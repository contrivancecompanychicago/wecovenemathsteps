const express = require('express');
const path = require('path');
const mathsteps = require('./lib');
const db = require('./lib/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint for solving math problems
app.post('/api/solve', async (req, res) => {
    try {
        const { expression, type, userId } = req.body;

        if (!expression) {
            return res.status(400).json({ error: 'Expression is required' });
        }

        let steps = [];
        let result = {};

        if (type === 'equation' || expression.includes('=')) {
            steps = mathsteps.solveEquation(expression);
            result.type = 'equation';
        } else {
            steps = mathsteps.simplifyExpression(expression);
            result.type = 'expression';
        }

        // Format steps for the frontend
        const formattedSteps = steps.map((step, index) => ({
            stepNumber: index + 1,
            changeType: step.changeType,
            oldExpression: step.oldNode ? step.oldNode.toString() : (step.oldEquation ? step.oldEquation.ascii() : ''),
            newExpression: step.newNode ? step.newNode.toString() : (step.newEquation ? step.newEquation.ascii() : ''),
            explanation: getStepExplanation(step.changeType)
        }));

        result.steps = formattedSteps;
        result.originalExpression = expression;

        // Record progress if a userId was provided (non-blocking)
        // outcome: 'completed' when the solver produced steps; 'incorrect' if no steps could be generated
        if (userId) {
            const parsedUserId = parseId(userId);
            if (parsedUserId) {
                const { topic, subtopic } = db.detectTopic(expression, type);
                const outcome = formattedSteps.length > 0 ? 'completed' : 'incorrect';
                const correct = outcome !== 'incorrect';
                db.upsertProgress({ userId: parsedUserId, topic, subtopic, correct })
                    .catch(err => console.error('Progress tracking error:', err.message));
            }
        }

        res.json(result);

    } catch (error) {
        console.error('Error solving math problem:', error);
        res.status(500).json({ 
            error: 'Failed to solve the math problem',
            details: error.message 
        });
    }
});

// API endpoint for getting grade-specific examples
app.get('/api/examples/:grade', (req, res) => {
    const grade = parseInt(req.params.grade);

    const gradeExamples = {
        6: [
            { expression: 'x + 5 = 12', description: 'Simple linear equation' },
            { expression: '3x + 2x', description: 'Combining like terms' },
            { expression: '2(x + 3)', description: 'Distributive property' }
        ],
        7: [
            { expression: '2x + 3 = 11', description: 'Two-step equation' },
            { expression: '4x - 2x + 5', description: 'Simplifying expressions' },
            { expression: '3(x + 4) - 2', description: 'Distribution and combining' }
        ],
        8: [
            { expression: '3x + 2 = 2x + 7', description: 'Variables on both sides' },
            { expression: '2(3x + 4) + 5x', description: 'Complex distribution' },
            { expression: '4x - 7 = 3x + 2', description: 'Multi-step solving' }
        ],
        9: [
            { expression: 'x^2 + 5x + 6', description: 'Quadratic factoring' },
            { expression: '3(2x - 4) = 2(x + 1)', description: 'Complex linear equation' },
            { expression: '2x^2 - 8x + 6', description: 'Quadratic expression' }
        ],
        10: [
            { expression: 'x^2 - 4x + 3 = 0', description: 'Quadratic equation' },
            { expression: '2x^2 + 3x - 5', description: 'Complex quadratic' },
            { expression: 'x^2 - 9', description: 'Difference of squares' }
        ],
        11: [
            { expression: 'x^3 - 8', description: 'Difference of cubes' },
            { expression: '6x^2 - 11x + 3', description: 'Complex trinomial' },
            { expression: 'x^4 - 16', description: 'Higher degree polynomial' }
        ],
        12: [
            { expression: 'x^4 - 16', description: 'Complex polynomial factoring' },
            { expression: '3x^3 + 12x^2 + 12x', description: 'Polynomial with common factor' },
            { expression: '2x^3 - 16', description: 'Cubic expression' }
        ]
    };

    if (gradeExamples[grade]) {
        res.json(gradeExamples[grade]);
    } else {
        res.status(404).json({ error: 'Grade not found' });
    }
});

// ─── User & Progress API ────────────────────────────────────────────────────

const VALID_GRADE_LEVELS = new Set([
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
    'GED', 'College Prep', 'unknown'
]);

function parseId(raw) {
    const id = parseInt(raw, 10);
    return Number.isFinite(id) && id > 0 ? id : null;
}

// Create or upsert a student profile
app.post('/api/users', async (req, res) => {
    try {
        const { name, email, grade_level } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'name is required' });
        }
        const resolvedGrade = grade_level || 'unknown';
        if (!VALID_GRADE_LEVELS.has(resolvedGrade)) {
            return res.status(400).json({
                error: 'Invalid grade_level',
                allowed: [...VALID_GRADE_LEVELS]
            });
        }
        const user = await db.upsertUser({ name, email, grade_level: resolvedGrade });
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user profile', details: error.message });
    }
});

// Fetch a student profile by ID
app.get('/api/users/:id', async (req, res) => {
    try {
        const id = parseId(req.params.id);
        if (!id) return res.status(400).json({ error: 'Invalid user id' });
        const user = await db.getUserById(id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Failed to fetch user', details: error.message });
    }
});

// Get a student's full progress summary
app.get('/api/users/:id/progress', async (req, res) => {
    try {
        const userId = parseId(req.params.id);
        if (!userId) return res.status(400).json({ error: 'Invalid user id' });
        const user = await db.getUserById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const rows = await db.getUserProgress(userId);

        // Group by topic with aggregate mastery
        const topicsMap = {};
        for (const row of rows) {
            if (!topicsMap[row.topic]) {
                topicsMap[row.topic] = { topic: row.topic, subtopics: [], totalMastery: 0, count: 0 };
            }
            topicsMap[row.topic].subtopics.push({
                subtopic: row.subtopic,
                attempts: row.attempts,
                mastery_score: parseFloat(row.mastery_score),
                last_attempted_at: row.last_attempted_at
            });
            topicsMap[row.topic].totalMastery += parseFloat(row.mastery_score);
            topicsMap[row.topic].count++;
        }

        const topics = Object.values(topicsMap).map(t => ({
            topic: t.topic,
            mastery_score: Math.round(t.totalMastery / t.count),
            subtopics: t.subtopics
        }));

        res.json({ user, topics, totalProblems: rows.reduce((sum, r) => sum + r.attempts, 0) });
    } catch (error) {
        console.error('Error fetching progress:', error);
        res.status(500).json({ error: 'Failed to fetch progress', details: error.message });
    }
});

// Manually record a progress attempt (for external use / future features)
// status: 'correct' | 'incorrect' | 'completed' (default: 'completed')
app.post('/api/users/:id/progress', async (req, res) => {
    try {
        const userId = parseId(req.params.id);
        if (!userId) return res.status(400).json({ error: 'Invalid user id' });
        const { topic, subtopic, status } = req.body;
        if (!topic) return res.status(400).json({ error: 'topic is required' });
        const validStatuses = new Set(['correct', 'incorrect', 'completed']);
        const resolvedStatus = validStatuses.has(status) ? status : 'completed';
        const correct = resolvedStatus !== 'incorrect';
        const record = await db.upsertProgress({ userId, topic, subtopic, correct });
        res.json({ ...record, status: resolvedStatus });
    } catch (error) {
        console.error('Error recording progress:', error);
        res.status(500).json({ error: 'Failed to record progress', details: error.message });
    }
});

function getStepExplanation(changeType) {
    const explanations = {
        'ADD_POLYNOMIAL_TERMS': 'Combined terms with the same variable and exponent.',
        'MULTIPLY_POLYNOMIAL_TERMS': 'Multiplied polynomial terms together.',
        'DISTRIBUTE': 'Applied the distributive property to expand expressions.',
        'SIMPLIFY_LEFT_SIDE': 'Simplified the left side of the equation.',
        'SIMPLIFY_RIGHT_SIDE': 'Simplified the right side of the equation.',
        'SUBTRACT_FROM_BOTH_SIDES': 'Subtracted the same value from both sides to maintain equality.',
        'ADD_TO_BOTH_SIDES': 'Added the same value to both sides to maintain equality.',
        'DIVIDE_BOTH_SIDES': 'Divided both sides by the same non-zero value.',
        'MULTIPLY_BOTH_SIDES': 'Multiplied both sides by the same value.',
        'FACTOR_QUADRATIC': 'Factored the quadratic expression into binomial factors.',
        'COLLECT_LIKE_TERMS': 'Grouped and combined like terms together.',
        'REMOVE_PARENTHESES': 'Removed unnecessary parentheses for clarity.'
    };
    return explanations[changeType] || 'Applied mathematical transformation.';
}

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'healthy', service: 'We Convene Math Tutor' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`We Convene Math Tutor server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to access the tutoring platform`);
});

module.exports = app;