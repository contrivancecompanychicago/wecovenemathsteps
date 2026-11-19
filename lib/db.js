const { Pool } = require('pg');

if (!process.env.DATABASE_URL) {
    console.warn('[db] WARNING: DATABASE_URL is not set. All persistence endpoints will fail. ' +
        'Set DATABASE_URL in Replit Secrets or run the Replit PostgreSQL integration.');
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL && process.env.DATABASE_URL.includes('localhost')
        ? false
        : { rejectUnauthorized: false }
});

pool.on('error', (err) => {
    console.error('Unexpected database pool error:', err.message);
});

async function query(sql, params) {
    const client = await pool.connect();
    try {
        const result = await client.query(sql, params);
        return result;
    } finally {
        client.release();
    }
}

async function upsertUser({ name, email, grade_level }) {
    if (email) {
        const result = await query(
            `INSERT INTO users (name, email, grade_level, updated_at)
             VALUES ($1, $2, $3, NOW())
             ON CONFLICT (email) DO UPDATE
               SET name = EXCLUDED.name,
                   grade_level = EXCLUDED.grade_level,
                   updated_at = NOW()
             RETURNING *`,
            [name, email, grade_level || 'unknown']
        );
        return result.rows[0];
    } else {
        const result = await query(
            `INSERT INTO users (name, grade_level) VALUES ($1, $2) RETURNING *`,
            [name, grade_level || 'unknown']
        );
        return result.rows[0];
    }
}

async function getUserById(id) {
    const result = await query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0] || null;
}

async function getUserProgress(userId) {
    const result = await query(
        `SELECT topic, subtopic, attempts, mastery_score, last_attempted_at
         FROM progress
         WHERE user_id = $1
         ORDER BY topic, subtopic`,
        [userId]
    );
    return result.rows;
}

async function upsertProgress({ userId, topic, subtopic, correct }) {
    const delta = correct ? 10 : -5;
    const result = await query(
        `INSERT INTO progress (user_id, topic, subtopic, attempts, mastery_score, last_attempted_at)
         VALUES ($1, $2, $3, 1, GREATEST(0, LEAST(100, 50 + $4)), NOW())
         ON CONFLICT (user_id, topic, subtopic) DO UPDATE
           SET attempts = progress.attempts + 1,
               mastery_score = GREATEST(0, LEAST(100, progress.mastery_score + $4)),
               last_attempted_at = NOW()
         RETURNING *`,
        [userId, topic, subtopic || '', delta]
    );
    return result.rows[0];
}

function detectTopic(expression, type) {
    if (type === 'equation' || (expression && expression.includes('='))) {
        return { topic: 'Solving Equations', subtopic: expression && expression.includes('^2') ? 'Quadratic Equations' : 'Linear Equations' };
    }
    if (expression && (expression.includes('^2') || expression.includes('^3'))) {
        return { topic: 'Factoring', subtopic: 'Polynomial Factoring' };
    }
    if (expression && expression.includes('(')) {
        return { topic: 'Simplification', subtopic: 'Distributive Property' };
    }
    return { topic: 'Simplification', subtopic: 'Combining Like Terms' };
}

module.exports = { query, upsertUser, getUserById, getUserProgress, upsertProgress, detectTopic };
