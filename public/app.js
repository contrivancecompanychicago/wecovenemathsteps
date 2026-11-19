// Chicago Public Schools Grade-Aligned Math Problems
const cpsStandards = {
    6: {
        title: "Grade 6 - Ratios, Rates & Expressions",
        problemTypes: [
            { name: "Ratios and Proportional Relationships", description: "Understanding ratios and rates" },
            { name: "Basic Algebra", description: "Simple expressions and equations" },
            { name: "Arithmetic Operations", description: "Fractions, decimals, and integers" }
        ],
        examples: [
            { title: "Simple Linear Equations", expression: "x + 5 = 12", description: "Solve for x" },
            { title: "Basic Proportions", expression: "3/4 = x/12", description: "Find the missing value" },
            { title: "Combining Like Terms", expression: "3x + 2x + 7", description: "Simplify the expression" }
        ]
    },
    7: {
        title: "Grade 7 - Proportional Relationships & Linear Equations",
        problemTypes: [
            { name: "Proportional Relationships", description: "Ratios, rates, and proportions" },
            { name: "Linear Equations", description: "One-step and two-step equations" },
            { name: "Expressions & Inequalities", description: "Algebraic expressions and inequalities" }
        ],
        examples: [
            { title: "Two-Step Equations", expression: "2x + 3 = 11", description: "Solve for x" },
            { title: "Combining Like Terms", expression: "4x + 2x - 3x + 5", description: "Simplify" },
            { title: "Distributive Property", expression: "3(x + 4)", description: "Expand the expression" }
        ]
    },
    8: {
        title: "Grade 8 - Linear Functions & Systems",
        problemTypes: [
            { name: "Linear Functions", description: "Slope, y-intercept, and linear relationships" },
            { name: "Systems of Equations", description: "Solving systems with substitution" },
            { name: "Exponents & Scientific Notation", description: "Powers and scientific notation" }
        ],
        examples: [
            { title: "Multi-Step Equations", expression: "3x + 2 = 2x + 7", description: "Solve for x" },
            { title: "Distributive Property", expression: "2(3x + 4) + 5x", description: "Simplify" },
            { title: "Linear Equation", expression: "4x - 7 = 3x + 2", description: "Find the solution" }
        ]
    },
    9: {
        title: "Grade 9 - Algebra I Foundations",
        problemTypes: [
            { name: "Linear Equations & Inequalities", description: "Advanced linear relationships" },
            { name: "Quadratic Functions", description: "Introduction to quadratics" },
            { name: "Exponential Functions", description: "Growth and decay models" }
        ],
        examples: [
            { title: "Linear Systems", expression: "2x + y = 7", description: "Part of a system of equations" },
            { title: "Factoring", expression: "x^2 + 5x + 6", description: "Factor the quadratic" },
            { title: "Complex Linear", expression: "3(2x - 4) = 2(x + 1)", description: "Solve the equation" }
        ]
    },
    10: {
        title: "Grade 10 - Geometry & Algebra II",
        problemTypes: [
            { name: "Quadratic Equations", description: "Solving and graphing quadratics" },
            { name: "Rational Functions", description: "Working with rational expressions" },
            { name: "Radical Expressions", description: "Square roots and higher order roots" }
        ],
        examples: [
            { title: "Quadratic Equation", expression: "x^2 - 4x + 3 = 0", description: "Solve by factoring" },
            { title: "Complex Expression", expression: "2x^2 + 3x - 5", description: "Factor if possible" },
            { title: "Rational Expression", expression: "(x^2 - 1)/(x + 1)", description: "Simplify" }
        ]
    },
    11: {
        title: "Grade 11 - Advanced Algebra & Pre-Calculus + ACT Math Prep",
        problemTypes: [
            { name: "Polynomial Functions", description: "Higher degree polynomials" },
            { name: "Exponential & Logarithmic", description: "Advanced exponential functions" },
            { name: "Trigonometric Functions", description: "Introduction to trigonometry" },
            { name: "ACT Math Test Prep", description: "Fall Semester ACT preparation and practice" }
        ],
        examples: [
            { title: "Polynomial Factoring", expression: "x^3 - 8", description: "Factor completely" },
            { title: "Complex Quadratic", expression: "2x^2 - 8x + 6", description: "Factor and solve" },
            { title: "Advanced Linear", expression: "3x + 4y = 12", description: "Linear equation in two variables" },
            { title: "ACT Algebra", expression: "3x + 7 = 4x - 5", description: "ACT-style linear equation" },
            { title: "ACT Coordinate Geometry", expression: "Distance between (2,3) and (8,11)", description: "Use distance formula" },
            { title: "ACT Trigonometry", expression: "sin²θ + cos²θ = 1", description: "Pythagorean identity" },
            { title: "ACT Functions", expression: "f(x) = 2x² - 3x + 1, find f(4)", description: "Function evaluation" },
            { title: "ACT Statistics", expression: "Mean of {12, 15, 18, 21, 24}", description: "Calculate average" }
        ]
    },
    12: {
        title: "Grade 12 - UIC Mathematics Placement Test Prep",
        problemTypes: [
            { name: "Algebra Fundamentals", description: "Linear equations, inequalities, and systems" },
            { name: "Polynomial Operations", description: "Factoring, expanding, and solving polynomials" },
            { name: "Rational Functions", description: "Rational expressions and equations" },
            { name: "Exponential & Logarithmic", description: "Exponential and logarithmic functions" },
            { name: "Trigonometry Basics", description: "Trigonometric functions and identities" },
            { name: "Pre-Calculus Topics", description: "Functions, domain/range, and transformations" }
        ],
        examples: [
            { title: "Linear System", expression: "2x + 3y = 7, x - y = 1", description: "Solve the system of equations" },
            { title: "Quadratic Factoring", expression: "3x^2 - 7x - 6", description: "Factor completely" },
            { title: "Rational Expression", expression: "(x^2 - 9)/(x^2 + 6x + 9)", description: "Simplify the rational expression" },
            { title: "Exponential Equation", expression: "2^(x+1) = 16", description: "Solve for x" },
            { title: "Logarithmic Expression", expression: "log(x^2 - 1) = log(8)", description: "Solve for x" },
            { title: "Function Composition", expression: "f(x) = 2x + 1, g(x) = x^2", description: "Find f(g(x))" },
            { title: "Polynomial Division", expression: "(2x^3 - 3x^2 + x - 5)/(x - 2)", description: "Perform polynomial division" },
            { title: "Inequality Solution", expression: "x^2 - 5x + 6 > 0", description: "Solve and express in interval notation" }
        ]
    },
    'python-coding': {
        title: "Everybody can Code Python - Math Programming",
        problemTypes: [
            { name: "Python Basics for Math", description: "Variables, numbers, and basic operations" },
            { name: "Math Libraries", description: "Using math, numpy, and matplotlib" },
            { name: "Problem Solving", description: "Writing programs to solve math problems" },
            { name: "Data Visualization", description: "Creating graphs and charts for math data" },
            { name: "Mathematical Functions", description: "Writing functions for calculations" }
        ],
        examples: [
            { title: "Basic Calculator", expression: "def add(a, b): return a + b", description: "Create simple math functions" },
            { title: "Quadratic Formula", expression: "import math\n(-b ± √(b²-4ac)) / 2a", description: "Solve quadratic equations with Python" },
            { title: "Plot Function", expression: "import matplotlib.pyplot as plt", description: "Graph mathematical functions" },
            { title: "Statistics", expression: "import statistics\nstatistics.mean([1,2,3,4,5])", description: "Calculate mean, median, mode" },
            { title: "Random Numbers", expression: "import random\nrandom.randint(1, 100)", description: "Generate random numbers for simulations" },
            { title: "List Operations", expression: "numbers = [1, 2, 3, 4, 5]\nsum(numbers)", description: "Work with lists of numbers" }
        ]
    },
    'uic-help': {
        title: "UIC Mathematics Department Help & Resources",
        problemTypes: [
            { name: "Department Contact Information", description: "Phone, email, location, and office hours" },
            { name: "Academic Support Services", description: "Math Learning Center, tutoring, and help rooms" },
            { name: "Course Information", description: "Mathematics course sequence and prerequisites" },
            { name: "Placement Testing", description: "ALEKS PPL and placement test information" },
            { name: "Student Resources", description: "Online tools, study groups, and accessibility services" }
        ],
        examples: [
            { title: "Department Contact", expression: "📧 mscs@uic.edu | 📞 (312) 996-3041", description: "Main department contact information" },
            { title: "Math Learning Center", description: "SEO 430 - Free tutoring" },
            { title: "Placement Test", expression: "ALEKS PPL Assessment", description: "Adaptive placement testing system" },
            { title: "Office Hours", expression: "Mon-Fri 8:30 AM - 5:00 PM", description: "Department administrative hours" },
            { title: "Emergency Help", expression: "Crisis Academic Support", description: "Immediate math help resources" }
        ]
    },
    'resource-center': {
        title: "We Convene Math Resource Center",
        problemTypes: [
            { name: "Texas Instruments Calculator Tutorials", description: "Comprehensive TI calculator guides and tutorials" },
            { name: "Math Study Resources", description: "Study guides, practice materials, and reference sheets" },
            { name: "Video Tutorials", description: "Step-by-step video lessons for common math topics" },
            { name: "Practice Worksheets", description: "Downloadable worksheets with solutions" }
        ],
        examples: [
            { title: "TI-30XS Tutorial", expression: "Basic operations guide", description: "Learn the GED-approved calculator" },
            { title: "TI-84 Plus CE", expression: "Graphing calculator tutorial", description: "Master advanced graphing features" },
            { title: "Calculator Comparison", expression: "Which TI calculator?", description: "Choose the right calculator for your needs" },
            { title: "Common Calculator Mistakes", expression: "Avoid errors", description: "Learn to prevent typical calculator mistakes" },
            { title: "Formula Reference Sheets", expression: "Quick reference", description: "Essential math formulas at a glance" },
            { title: "Study Tips", expression: "Effective learning strategies", description: "Maximize your math study time" }
        ]
    },
    'ged': {
        title: "Cook County GED Math Test Prep",
        problemTypes: [
            { name: "Number Sense & Operations", description: "Fractions, decimals, percentages, and basic operations" },
            { name: "Algebra & Functions", description: "Linear equations, quadratics, and functions" },
            { name: "Geometry & Measurement", description: "Area, volume, coordinate geometry, and trigonometry" },
            { name: "Data Analysis & Statistics", description: "Graphs, probability, and statistical measures" }
        ],
        examples: [
            { title: "Percentage Problem", expression: "25% of 120", description: "Calculate the percentage" },
            { title: "Linear Equation", expression: "3x + 7 = 22", description: "Solve for x" },
            { title: "Quadratic Equation", expression: "x^2 - 6x + 8 = 0", description: "Solve by factoring" },
            { title: "Pythagorean Theorem", expression: "a^2 + b^2 = c^2", description: "Find missing side: a=3, b=4, c=?" },
            { title: "Area of Rectangle", expression: "A = length × width", description: "Find area: l=8, w=5" },
            { title: "Mean Calculation", expression: "(12 + 15 + 18 + 21 + 24)/5", description: "Calculate the mean" },
            { title: "Slope Formula", expression: "m = (y2 - y1)/(x2 - x1)", description: "Find slope: (2,3) and (6,11)" },
            { title: "Distance Formula", expression: "d = √[(x2-x1)² + (y2-y1)²]", description: "Find distance between (1,2) and (4,6)" }
        ]
    },
    'ctd-math': {
        title: "Northwestern University Center for Talent Development - Middle School Math",
        problemTypes: [
            { name: "Online Middle School Courses", description: "Live interactive online math instruction" },
            { name: "In-Person Summer Programs", description: "Intensive on-campus programs at Northwestern" },
            { name: "Saturday Enrichment", description: "Weekend enrichment during the school year" },
            { name: "Competition Math Training", description: "MATHCOUNTS & AMC preparation" },
            { name: "Support Resources", description: "Tutoring, materials, and student community" }
        ],
        examples: [
            { title: "Pre-Algebra: Equation Solving", expression: "2x + 7 = 19", description: "Solve for x" },
            { title: "Ratio Problem", expression: "If 3/5 of a number is 24, what is the number?", description: "Find the whole number" },
            { title: "Algebraic Expression", expression: "3(x + 4) - 2(x - 1)", description: "Simplify the expression" },
            { title: "System of Equations", expression: "x + y = 10, x - y = 4", description: "Solve for x and y" },
            { title: "Quadratic Factoring", expression: "x^2 + 7x + 12", description: "Factor completely" },
            { title: "Slope Calculation", expression: "Find slope through (2, 5) and (6, 13)", description: "Use slope formula" },
            { title: "MATHCOUNTS Problem", expression: "How many positive integers can be represented as a difference of two members of {1,2,3,4,5,6}?", description: "Competition-level problem solving" },
            { title: "Advanced Problem", expression: "Sum of two numbers is 50, product is 600", description: "Find the positive difference" }
        ]
    }
};

class MathTutorApp {
    constructor() {
        this.selectedGrade = null;
        this.initializeApp();
    }

    initializeApp() {
        this.setupEventListeners();
        this.loadMathSteps();
        this.updateStruggleToggleBtn();
        this.loadProgressWidget();
    }

    async loadMathSteps() {
        try {
            // Load mathsteps library - in a real deployment, this would be bundled
            const response = await fetch('/lib/mathsteps.js');
            if (response.ok) {
                // MathSteps is available via the main index.js
                console.log('MathSteps library loaded');
            }
        } catch (error) {
            console.log('Using fallback math processing');
        }
    }

    async loadProgressWidget() {
        const container = document.getElementById('progressContent');
        if (!container) return;
        const userId = localStorage.getItem('weconvene_user_id');

        if (!userId) {
            container.innerHTML = `
                <p class="progress-prompt">Start tracking your progress across sessions.</p>
                <div class="progress-id-form">
                    <input type="number" id="userIdInput" class="userid-input"
                        placeholder="Enter Student ID" min="1" aria-label="Student ID">
                    <button id="saveUserIdBtn" class="save-id-btn">Save</button>
                </div>`;
            document.getElementById('saveUserIdBtn').addEventListener('click', () => {
                const val = (document.getElementById('userIdInput').value || '').trim();
                const parsed = parseInt(val);
                if (parsed > 0) {
                    localStorage.setItem('weconvene_user_id', String(parsed));
                    this.loadProgressWidget();
                }
            });
            return;
        }

        try {
            const res = await fetch(`/api/users/${userId}/progress`);
            if (!res.ok) throw new Error('not found');
            const data = await res.json();
            this.renderProgressWidget(container, data, userId);
        } catch (_) {
            container.innerHTML = `
                <p class="progress-error-msg">Could not load progress for ID ${userId}.</p>
                <button id="clearUserIdBtn" class="clear-id-btn">Use a different ID</button>`;
            document.getElementById('clearUserIdBtn').addEventListener('click', () => {
                localStorage.removeItem('weconvene_user_id');
                this.loadProgressWidget();
            });
        }
    }

    renderProgressWidget(container, data, userId) {
        const user = data.user || {};
        // Backend returns { user, topics, totalProblems }
        const topics = Array.isArray(data.topics) ? data.topics : [];
        const totalProblems = typeof data.totalProblems === 'number'
            ? data.totalProblems
            : topics.reduce((s, t) => s + (t.problems_attempted || 0), 0);

        const topicsHTML = topics.length > 0
            ? topics.map(t => {
                const score = Math.min(100, Math.round(t.mastery_score || 0));
                const safeTopic = this.escapeHtml(String(t.topic || ''));
                return `
                <div class="mastery-row">
                    <span class="mastery-topic" title="${safeTopic}">${safeTopic}</span>
                    <div class="mastery-bar-wrap" role="progressbar"
                         aria-valuenow="${score}" aria-valuemin="0" aria-valuemax="100">
                        <div class="mastery-bar" style="width:${score}%"></div>
                    </div>
                    <span class="mastery-score">${score}%</span>
                </div>`;
            }).join('')
            : '<p class="no-topics">No problems solved yet — pick a grade and try some!</p>';

        const safeName = this.escapeHtml(String(user.name || 'Student ' + userId));
        const safeGrade = user.grade_level ? this.escapeHtml(String(user.grade_level)) : '';

        container.innerHTML = `
            <div class="progress-user-row">
                <span class="progress-name">👤 ${safeName}</span>
                ${safeGrade ? `<span class="progress-grade-badge">${safeGrade}</span>` : ''}
                <button class="clear-id-btn" id="clearUserIdBtn">Switch</button>
            </div>
            <p class="progress-stats">${totalProblems} problem${totalProblems !== 1 ? 's' : ''} solved</p>
            <div class="mastery-list">${topicsHTML}</div>`;
        document.getElementById('clearUserIdBtn').addEventListener('click', () => {
            localStorage.removeItem('weconvene_user_id');
            this.loadProgressWidget();
        });
    }

    setupEventListeners() {
        // Grade selection (numeric grades + python in the grade-selector row)
        document.querySelectorAll('.grade-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const grade = e.target.dataset.grade;
                if (!grade) return;
                const numericKeys = ['6','7','8','9','10','11','12'];
                if (numericKeys.includes(grade)) {
                    this.selectGrade(parseInt(grade));
                } else {
                    this.selectGrade(grade);
                }
            });
        });

        // Dashboard path card CTA buttons
        document.querySelectorAll('.dash-cta-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const grade = e.currentTarget.dataset.grade;
                if (grade) this.selectGrade(grade);
            });
        });

        // Solve button
        document.getElementById('solveBtn').addEventListener('click', () => {
            this.solveProblem();
        });

        // Math input enter key
        document.getElementById('mathInput').addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                this.solveProblem();
            }
        });

        // Example clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.example-card')) {
                const expression = e.target.closest('.example-card').querySelector('.math-expression').textContent;
                document.getElementById('mathInput').value = expression;
                this.solveProblem();
            }
        });

        // Productive Struggle toggle
        const struggleBtn = document.getElementById('struggleToggleBtn');
        if (struggleBtn) {
            struggleBtn.addEventListener('click', () => this.toggleProductiveStruggle());
        }
    }

    selectGrade(grade) {
        this.selectedGrade = grade;

        // Clear active state from grade buttons and dashboard CTA buttons
        document.querySelectorAll('.grade-btn, .dash-cta-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeEl = document.querySelector(`[data-grade="${grade}"]`);
        if (activeEl) activeEl.classList.add('active');

        // Show problem types
        this.displayProblemTypes(grade);

        // Show examples
        this.displayExamples(grade);

        // Show sections
        document.getElementById('problemTypeSection').style.display = 'block';
        document.getElementById('examplesSection').style.display = 'block';
    }

    displayProblemTypes(grade) {
        const problemTypesContainer = document.getElementById('problemTypes');
        const gradeData = cpsStandards[grade];

        problemTypesContainer.innerHTML = gradeData.problemTypes.map(type => `
            <div class="problem-type-btn" tabindex="0">
                <h4>${type.name}</h4>
                <p>${type.description}</p>
            </div>
        `).join('');
    }

    displayExamples(grade) {
        const examplesContainer = document.getElementById('examplesGrid');
        const gradeData = cpsStandards[grade];

        let examplesHTML = gradeData.examples.map(example => `
            <div class="example-card" tabindex="0">
                <h4>${example.title}</h4>
                <div class="math-expression">${example.expression}</div>
                <p>${example.description}</p>
            </div>
        `).join('');

        // Add ACT prep section for grade 11
        if (grade === 11) {
            examplesHTML += `
                <div class="act-prep-section">
                    <h3>🎯 Fall Semester ACT Math Test Prep</h3>
                    <div class="act-overview">
                        <div class="act-info-card">
                            <h4>📊 ACT Math Test Format</h4>
                            <ul>
                                <li><strong>Time:</strong> 60 minutes</li>
                                <li><strong>Questions:</strong> 60 multiple choice</li>
                                <li><strong>Calculator:</strong> Permitted for all questions</li>
                                <li><strong>Score Range:</strong> 1-36</li>
                                <li><strong>Average Time:</strong> 1 minute per question</li>
                            </ul>
                        </div>
                        <div class="act-info-card">
                            <h4>📚 Content Breakdown</h4>
                            <ul>
                                <li><strong>Pre-Algebra:</strong> 20-25% (12-15 questions)</li>
                                <li><strong>Elementary Algebra:</strong> 15-20% (9-12 questions)</li>
                                <li><strong>Intermediate Algebra:</strong> 15-20% (9-12 questions)</li>
                                <li><strong>Coordinate Geometry:</strong> 15-20% (9-12 questions)</li>
                                <li><strong>Plane Geometry:</strong> 20-25% (12-15 questions)</li>
                                <li><strong>Trigonometry:</strong> 5-10% (3-6 questions)</li>
                            </ul>
                        </div>
                        <div class="act-info-card">
                            <h4>⏰ Fall Semester Timeline</h4>
                            <ul>
                                <li><strong>September:</strong> Diagnostic test & fundamentals review</li>
                                <li><strong>October:</strong> Content mastery & problem-solving strategies</li>
                                <li><strong>November:</strong> Practice tests & time management</li>
                                <li><strong>December:</strong> Final review & test day preparation</li>
                                <li><strong>Test Dates:</strong> December & February opportunities</li>
                            </ul>
                        </div>
                    </div>

                    <div class="act-content-areas">
                        <div class="content-area">
                            <h4>🧮 Pre-Algebra & Elementary Algebra</h4>
                            <div class="topic-examples">
                                <div class="example-problem">
                                    <strong>Example:</strong> If 3x + 7 = 22, what is the value of x?
                                    <div class="solution">x = 5</div>
                                </div>
                                <div class="example-problem">
                                    <strong>Example:</strong> What is 15% of 80?
                                    <div class="solution">12</div>
                                </div>
                                <div class="example-problem">
                                    <strong>Example:</strong> Simplify: 2x² + 3x² - x²
                                    <div class="solution">4x²</div>
                                </div>
                            </div>
                            <div class="key-topics">
                                <p><strong>Key Topics:</strong> Linear equations, inequalities, percentages, ratios, basic polynomials</p>
                            </div>
                        </div>

                        <div class="content-area">
                            <h4>📈 Intermediate Algebra & Functions</h4>
                            <div class="topic-examples">
                                <div class="example-problem">
                                    <strong>Example:</strong> Factor: x² - 9x + 20
                                    <div class="solution">(x - 4)(x - 5)</div>
                                </div>
                                <div class="example-problem">
                                    <strong>Example:</strong> If f(x) = 2x² - 3x + 1, find f(3)
                                    <div class="solution">f(3) = 10</div>
                                </div>
                                <div class="example-problem">
                                    <strong>Example:</strong> Solve: |2x - 4| = 6
                                    <div class="solution">x = 5 or x = -1</div>
                                </div>
                            </div>
                            <div class="key-topics">
                                <p><strong>Key Topics:</strong> Quadratics, functions, absolute value, radicals, rational expressions</p>
                            </div>
                        </div>

                        <div class="content-area">
                            <h4>📐 Coordinate & Plane Geometry</h4>
                            <div class="topic-examples">
                                <div class="example-problem">
                                    <strong>Example:</strong> Find the slope between (2, 5) and (6, 13)
                                    <div class="solution">m = 2</div>
                                </div>
                                <div class="example-problem">
                                    <strong>Example:</strong> What is the area of a circle with radius 4?
                                    <div class="solution">16π square units</div>
                                </div>
                                <div class="example-problem">
                                    <strong>Example:</strong> In a right triangle, if legs are 3 and 4, find the hypotenuse
                                    <div class="solution">5</div>
                                </div>
                            </div>
                            <div class="key-topics">
                                <p><strong>Key Topics:</strong> Lines, circles, triangles, polygons, coordinate plane, distance formula</p>
                            </div>
                        </div>

                        <div class="content-area">
                            <h4>📏 Trigonometry Basics</h4>
                            <div class="topic-examples">
                                <div class="example-problem">
                                    <strong>Example:</strong> In a right triangle with opposite = 3 and hypotenuse = 5, find sin θ
                                    <div class="solution">sin θ = 3/5 = 0.6</div>
                                </div>
                                <div class="example-problem">
                                    <strong>Example:</strong> If cos θ = 0.8, find sin²θ + cos²θ
                                    <div class="solution">1 (Pythagorean identity)</div>
                                </div>
                            </div>
                            <div class="key-topics">
                                <p><strong>Key Topics:</strong> SOH-CAH-TOA, unit circle basics, trigonometric identities</p>
                            </div>
                        </div>
                    </div>

                    <div class="act-strategies">
                        <h4>🎯 Test-Taking Strategies</h4>
                        <div class="strategy-grid">
                            <div class="strategy-tip">
                                <h5>⏱️ Time Management</h5>
                                <p>Spend no more than 1 minute per question. Skip difficult ones and return later.</p>
                            </div>
                            <div class="strategy-tip">
                                <h5>🧮 Calculator Usage</h5>
                                <p>Use calculator strategically - not every problem needs it. Master mental math for speed.</p>
                            </div>
                            <div class="strategy-tip">
                                <h5>📋 Process of Elimination</h5>
                                <p>Eliminate obviously wrong answers first. Look for answer choices that don't make sense.</p>
                            </div>
                            <div class="strategy-tip">
                                <h5>📐 Draw Diagrams</h5>
                                <p>For geometry problems, always draw or label the given diagram clearly.</p>
                            </div>
                            <div class="strategy-tip">
                                <h5>🔍 Check Your Work</h5>
                                <p>If time permits, substitute your answer back into the original equation.</p>
                            </div>
                            <div class="strategy-tip">
                                <h5>📈 Guess Strategically</h5>
                                <p>No penalty for wrong answers - never leave a question blank!</p>
                            </div>
                        </div>
                    </div>

                    <div class="act-practice-plan">
                        <h4>📅 Weekly Practice Schedule</h4>
                        <div class="practice-schedule">
                            <div class="week-plan">
                                <h5>Week 1-4: Foundation Building</h5>
                                <ul>
                                    <li>Monday: Pre-Algebra review (30 min)</li>
                                    <li>Wednesday: Elementary Algebra practice (45 min)</li>
                                    <li>Friday: Mixed problem solving (30 min)</li>
                                    <li>Sunday: Timed section practice (20 questions/20 min)</li>
                                </ul>
                            </div>
                            <div class="week-plan">
                                <h5>Week 5-8: Content Mastery</h5>
                                <ul>
                                    <li>Monday: Intermediate Algebra & Functions (45 min)</li>
                                    <li>Wednesday: Coordinate & Plane Geometry (45 min)</li>
                                    <li>Friday: Trigonometry basics (30 min)</li>
                                    <li>Sunday: Full section practice (30 questions/30 min)</li>
                                </ul>
                            </div>
                            <div class="week-plan">
                                <h5>Week 9-12: Test Mastery</h5>
                                <ul>
                                    <li>Monday: Full practice test (60 min)</li>
                                    <li>Wednesday: Review wrong answers (45 min)</li>
                                    <li>Friday: Speed drills (20 min)</li>
                                    <li>Sunday: Final review & strategy practice (60 min)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="act-resources">
                        <h4>📖 Study Resources</h4>
                        <p><strong>We Convene ACT Math Prep:</strong> Contact us for personalized tutoring sessions focused on your target score improvement. Our Grade 11 ACT prep program includes diagnostic testing, individualized study plans, and proven test-taking strategies.</p>
                        <div class="score-goals">
                            <h5>Score Improvement Goals:</h5>
                            <ul>
                                <li><strong>Score 18-22:</strong> Focus on Pre-Algebra and Elementary Algebra mastery</li>
                                <li><strong>Score 23-27:</strong> Strengthen Intermediate Algebra and Geometry skills</li>
                                <li><strong>Score 28-32:</strong> Master advanced topics and timing strategies</li>
                                <li><strong>Score 33-36:</strong> Perfect accuracy and advanced problem-solving techniques</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }

        // Add UIC prep section for grade 12
        if (grade === 12) {
            examplesHTML += `
                <div class="uic-prep-section">
                    <h3>🎓 UIC Placement Test Strategies</h3>
                    <div class="prep-tips">
                        <div class="tip-card">
                            <h4>Test Format</h4>
                            <p>The UIC placement test covers algebra through pre-calculus. Focus on:</p>
                            <ul>
                                <li>Linear and quadratic equations</li>
                                <li>Polynomial operations</li>
                                <li>Rational functions</li>
                                <li>Exponential and logarithmic functions</li>
                            </ul>
                        </div>
                        <div class="tip-card">
                            <h4>Key Topics to Review</h4>
                            <p>Essential skills for placement:</p>
                            <ul>
                                <li>Factoring techniques</li>
                                <li>Function composition</li>
                                <li>Domain and range</li>
                                <li>Solving inequalities</li>
                            </ul>
                        </div>
                        <div class="tip-card">
                            <h4>Test-Taking Tips</h4>
                            <ul>
                                <li>Show all work clearly</li>
                                <li>Check your answers</li>
                                <li>Manage your time effectively</li>
                                <li>Review algebra fundamentals</li>
                            </ul>
                        </div>
                    </div>

                    <div class="uic-dept-help">
                        <h3>🏛️ UIC Mathematics Department Help & Resources</h3>

                        <div class="dept-overview">
                            <div class="dept-info-card">
                                <h4>📍 Department Contact Information</h4>
                                <div class="contact-info">
                                    <p><strong>University of Illinois Chicago</strong></p>
                                    <p><strong>Department of Mathematics, Statistics, and Computer Science</strong></p>
                                    <p>📧 Email: <a href="mailto:mscs@uic.edu">mscs@uic.edu</a></p>
                                    <p>📞 Phone: (312) 996-3041</p>
                                    <p>🏢 Location: Science and Engineering Offices (SEO), Room 322</p>
                                    <p>📮 Address: 851 S. Morgan Street, Chicago, IL 60607-7045</p>
                                    <p>🌐 Website: <a href="https://mscs.uic.edu" target="_blank">mscs.uic.edu</a></p>
                                </div>
                            </div>

                            <div class="dept-info-card">
                                <h4>⏰ Department Hours</h4>
                                <ul>
                                    <li><strong>Monday - Friday:</strong> 8:30 AM - 5:00 PM</li>
                                    <li><strong>Academic Advising:</strong> By appointment</li>
                                    <li><strong>Walk-in Hours:</strong> Monday, Wednesday, Friday 1:00 PM - 4:00 PM</li>
                                    <li><strong>Summer Hours:</strong> May vary, check website</li>
                                </ul>
                            </div>

                            <div class="dept-info-card">
                                <h4>🎯 Academic Support Services</h4>
                                <ul>
                                    <li><strong>Math Learning Center:</strong> Free tutoring for MATH 070-181</li>
                                    <li><strong>Calculus Help Room:</strong> Drop-in assistance for calculus courses</li>
                                    <li><strong>Statistics Help Room:</strong> Support for statistics courses</li>
                                    <li><strong>Peer Tutoring:</strong> Student-to-student assistance</li>
                                    <li><strong>SI (Supplemental Instruction):</strong> Study groups for challenging courses</li>
                                </ul>
                            </div>
                        </div>

                        <div class="course-info">
                            <h4>📚 UIC Mathematics Course Sequence</h4>
                            <div class="course-pathway">
                                <div class="course-level">
                                    <h5>Prerequisite Courses</h5>
                                    <ul>
                                        <li><strong>MATH 070:</strong> Intermediate Algebra</li>
                                        <li><strong>MATH 090:</strong> Intermediate Algebra</li>
                                        <li><strong>MATH 105:</strong> Precalculus Mathematics</li>
                                        <li><strong>MATH 110:</strong> College Algebra</li>
                                    </ul>
                                </div>
                                <div class="course-level">
                                    <h5>Core Calculus Sequence</h5>
                                    <ul>
                                        <li><strong>MATH 180:</strong> Calculus I</li>
                                        <li><strong>MATH 181:</strong> Calculus II</li>
                                        <li><strong>MATH 210:</strong> Calculus III</li>
                                    </ul>
                                </div>
                                <div class="course-level">
                                    <h5>Advanced Mathematics</h5>
                                    <ul>
                                        <li><strong>MATH 220:</strong> Linear Algebra</li>
                                        <li><strong>MATH 310:</strong> Applied Linear Algebra</li>
                                        <li><strong>MATH 320:</strong> Abstract Algebra</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="placement-info">
                            <h4>📝 Mathematics Placement Test Information</h4>
                            <div class="placement-details">
                                <div class="placement-section">
                                    <h5>Test Options</h5>
                                    <ul>
                                        <li><strong>ALEKS PPL:</strong> Adaptive assessment for placement</li>
                                        <li><strong>Credit by Exam:</strong> Challenge exams for advanced placement</li>
                                        <li><strong>Transfer Credit:</strong> Evaluation of previous coursework</li>
                                    </ul>
                                </div>
                                <div class="placement-section">
                                    <h5>Placement Outcomes</h5>
                                    <ul>
                                        <li><strong>Score 0-29:</strong> MATH 090 (Intermediate Algebra)</li>
                                        <li><strong>Score 30-60:</strong> MATH 105 (Precalculus) or MATH 110 (College Algebra)</li>
                                        <li><strong>Score 61-75:</strong> MATH 180 (Calculus I)</li>
                                        <li><strong>Score 76-100:</strong> MATH 181 (Calculus II) with advisor approval</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="resources-section">
                            <h4>📖 Additional UIC Mathematics Resources</h4>
                            <div class="resources-grid">
                                <div class="resource-item">
                                    <h5>🖥️ Online Resources</h5>
                                    <ul>
                                        <li>UIC Blackboard course materials</li>
                                        <li>WebAssign homework system</li>
                                        <li>MyMathLab access</li>
                                        <li>UIC Library research databases</li>
                                    </ul>
                                </div>
                                <div class="resource-item">
                                    <h5>👥 Study Groups & Communities</h5>
                                    <ul>
                                        <li>UIC Math Club</li>
                                        <li>Women in Mathematics Society</li>
                                        <li>Actuarial Science Club</li>
                                        <li>Statistics Student Organization</li>
                                    </ul>
                                </div>
                                <div class="resource-item">
                                    <h5>🎓 Career & Graduate School</h5>
                                    <ul>
                                        <li>Mathematics major advising</li>
                                        <li>Graduate school preparation</li>
                                        <li>Career counseling services</li>
                                        <li>Research opportunities (REU)</li>
                                    </ul>
                                </div>
                                <div class="resource-item">
                                    <h5>♿ Accessibility Services</h5>
                                    <ul>
                                        <li>Disability Resource Center coordination</li>
                                        <li>Extended time accommodations</li>
                                        <li>Alternative format materials</li>
                                        <li>Assistive technology support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="emergency-help">
                            <h4>🆘 Need Immediate Math Help?</h4>
                            <div class="help-options">
                                <div class="help-option urgent">
                                    <h5>📞 Crisis Academic Support</h5>
                                    <p>If you're struggling in a math course and need immediate help:</p>
                                    <ul>
                                        <li>Contact your instructor during office hours</li>
                                        <li>Visit the Math Learning Center (SEO 430)</li>
                                        <li>Schedule emergency tutoring through We Convene</li>
                                        <li>Reach out to academic advisors: (312) 996-3040</li>
                                    </ul>
                                </div>
                                <div class="help-option">
                                    <h5>📧 Quick Contact Options</h5>
                                    <ul>
                                        <li><strong>General Math Questions:</strong> <a href="mailto:mscs@uic.edu">mscs@uic.edu</a></li>
                                        <li><strong>Placement Test Issues:</strong> <a href="mailto:testing@uic.edu">testing@uic.edu</a></li>
                                        <li><strong>Academic Advising:</strong> <a href="mailto:mscsadvising@uic.edu">mscsadvising@uic.edu</a></li>
                                        <li><strong>Transfer Credit:</strong> <a href="mailto:admissions@uic.edu">admissions@uic.edu</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="we-convene-connection">
                            <h4>🤝 We Convene + UIC Partnership</h4>
                            <div class="partnership-info">
                                <p><strong>Specialized UIC Math Preparation:</strong> Our tutors are familiar with UIC's mathematics curriculum and can provide targeted preparation for:</p>
                                <ul>
                                    <li>ALEKS PPL placement test preparation</li>
                                    <li>Prerequisite course review (MATH 070, 090, 105, 110)</li>
                                    <li>Calculus readiness assessment</li>
                                    <li>UIC-specific course support and study strategies</li>
                                    <li>Transfer student mathematics evaluation assistance</li>
                                </ul>
                                <p><em>Contact We Convene for personalized UIC mathematics preparation tailored to your specific placement goals and academic plans.</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Add TI Education section
        if (grade === 'ti-education') {
            examplesHTML += `
                <div class="ti-education-section">
                    <h3>🧮 TI Calculator Education Center</h3>
                    <div class="calculator-overview">
                        <div class="calculator-selector">
                            <h4>Choose Your Calculator</h4>
                            <div class="calculator-buttons">
                                <button class="calculator-btn" data-calculator="ti-30xs">
                                    <span class="calc-icon">🧮</span>
                                    <div>
                                        <strong>TI-30XS MultiView™</strong>
                                        <p>GED Test Approved</p>
                                    </div>
                                </button>
                                <button class="calculator-btn" data-calculator="ti-84">
                                    <span class="calc-icon">📊</span>
                                    <div>
                                        <strong>TI-84 Plus CE</strong>
                                        <p>Advanced Graphing</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="tutorial-categories">
                        <div class="tutorial-category">
                            <h4>🎯 GED Test Preparation</h4>
                            <p>Master the TI-30XS calculator for the GED Math test</p>
                            <ul class="tutorial-list">
                                <li>Basic Operations & Order of Operations</li>
                                <li>Fractions, Decimals & Percentages</li>
                                <li>Scientific Notation & Exponents</li>
                                <li>Statistics Functions</li>
                                <li>Test Day Strategies</li>
                            </ul>
                        </div>

                        <div class="tutorial-category">
                            <h4>📈 High School Math</h4>
                            <p>Advanced features for algebra, geometry, and calculus</p>
                            <ul class="tutorial-list">
                                <li>Graphing Linear & Quadratic Functions</li>
                                <li>Solving Systems of Equations</li>
                                <li>Matrix Operations</li>
                                <li>Statistical Analysis</li>
                                <li>Programming Basics</li>
                            </ul>
                        </div>

                        <div class="tutorial-category">
                            <h4>⚠️ Common Mistakes</h4>
                            <p>Avoid these frequent calculator errors</p>
                            <ul class="mistake-list">
                                <li><strong>Order of Operations:</strong> Use parentheses (2+3)×4</li>
                                <li><strong>Fraction Entry:</strong> Use n/d key correctly</li>
                                <li><strong>Scientific Notation:</strong> Use EE not ×10^</li>
                                <li><strong>Memory Clear:</strong> Press AC before new problems</li>
                            </ul>
                        </div>
                    </div>

                    <div class="practice-scenarios">
                        <h4>🏃‍♂️ Quick Practice Scenarios</h4>
                        <div class="scenario-grid">
                            <div class="scenario-card" data-scenario="ged-basics">
                                <h5>GED Basics</h5>
                                <p>Essential operations for test day</p>
                                <span class="duration">⏱️ 15 min</span>
                            </div>
                            <div class="scenario-card" data-scenario="fractions-master">
                                <h5>Fraction Master</h5>
                                <p>Complete fraction operations</p>
                                <span class="duration">⏱️ 20 min</span>
                            </div>
                            <div class="scenario-card" data-scenario="graphing-intro">
                                <h5>Graphing Intro</h5>
                                <p>Basic graphing with TI-84</p>
                                <span class="duration">⏱️ 25 min</span>
                            </div>
                        </div>
                    </div>

                    <div class="calculator-tips">
                        <h4>💡 Pro Tips for Calculator Success</h4>
                        <div class="tips-grid">
                            <div class="tip-item">
                                <strong>Practice Daily:</strong> Spend 10 minutes daily with your calculator
                            </div>
                            <div class="tip-item">
                                <strong>Test Mode:</strong> Learn to use calculator without looking at keys
                            </div>
                            <div class="tip-item">
                                <strong>Double Check:</strong> Always verify your entries before pressing equals
                            </div>
                            <div class="tip-item">
                                <strong>Memory Functions:</strong> Use STO and RCL for complex problems
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Add UIC Math Help section
        if (grade === 'uic-help') {
            examplesHTML += `
                <div class="uic-dept-help">
                    <h3>🏛️ UIC Mathematics Department Help & Resources</h3>

                    <div class="dept-overview">
                        <div class="dept-info-card">
                            <h4>📍 Department Contact Information</h4>
                            <div class="contact-info">
                                <p><strong>University of Illinois Chicago</strong></p>
                                <p><strong>Department of Mathematics, Statistics, and Computer Science</strong></p>
                                <p>📧 Email: <a href="mailto:mscs@uic.edu">mscs@uic.edu</a></p>
                                <p>📞 Phone: (312) 996-3041</p>
                                <p>🏢 Location: Science and Engineering Offices (SEO), Room 322</p>
                                <p>📮 Address: 851 S. Morgan Street, Chicago, IL 60607-7045</p>
                                <p>🌐 Website: <a href="https://mscs.uic.edu" target="_blank">mscs.uic.edu</a></p>
                            </div>
                        </div>

                        <div class="dept-info-card">
                            <h4>⏰ Department Hours</h4>
                            <ul>
                                <li><strong>Monday - Friday:</strong> 8:30 AM - 5:00 PM</li>
                                <li><strong>Academic Advising:</strong> By appointment</li>
                                <li><strong>Walk-in Hours:</strong> Monday, Wednesday, Friday 1:00 PM - 4:00 PM</li>
                                <li><strong>Summer Hours:</strong> May vary, check website</li>
                            </ul>
                        </div>

                        <div class="dept-info-card">
                            <h4>🎯 Academic Support Services</h4>
                            <ul>
                                <li><strong>Math Learning Center:</strong> Free tutoring for MATH 070-181</li>
                                <li><strong>Calculus Help Room:</strong> Drop-in assistance for calculus courses</li>
                                <li><strong>Statistics Help Room:</strong> Support for statistics courses</li>
                                <li><strong>Peer Tutoring:</strong> Student-to-student assistance</li>
                                <li><strong>SI (Supplemental Instruction):</strong> Study groups for challenging courses</li>
                            </ul>
                        </div>
                    </div>

                    <div class="course-info">
                        <h4>📚 UIC Mathematics Course Sequence</h4>
                        <div class="course-pathway">
                            <div class="course-level">
                                <h5>Prerequisite Courses</h5>
                                <ul>
                                    <li><strong>MATH 070:</strong> Intermediate Algebra</li>
                                    <li><strong>MATH 090:</strong> Intermediate Algebra</li>
                                    <li><strong>MATH 105:</strong> Precalculus Mathematics</li>
                                    <li><strong>MATH 110:</strong> College Algebra</li>
                                </ul>
                            </div>
                            <div class="course-level">
                                <h5>Core Calculus Sequence</h5>
                                <ul>
                                    <li><strong>MATH 180:</strong> Calculus I</li>
                                    <li><strong>MATH 181:</strong> Calculus II</li>
                                    <li><strong>MATH 210:</strong> Calculus III</li>
                                </ul>
                            </div>
                            <div class="course-level">
                                <h5>Advanced Mathematics</h5>
                                <ul>
                                    <li><strong>MATH 220:</strong> Linear Algebra</li>
                                    <li><strong>MATH 310:</strong> Applied Linear Algebra</li>
                                    <li><strong>MATH 320:</strong> Abstract Algebra</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="placement-info">
                        <h4>📝 Mathematics Placement Test Information</h4>
                        <div class="placement-details">
                            <div class="placement-section">
                                <h5>Test Options</h5>
                                <ul>
                                    <li><strong>ALEKS PPL:</strong> Adaptive assessment for placement</li>
                                    <li><strong>Credit by Exam:</strong> Challenge exams for advanced placement</li>
                                    <li><strong>Transfer Credit:</strong> Evaluation of previous coursework</li>
                                </ul>
                            </div>
                            <div class="placement-section">
                                <h5>Placement Outcomes</h5>
                                <ul>
                                    <li><strong>Score 0-29:</strong> MATH 090 (Intermediate Algebra)</li>
                                    <li><strong>Score 30-60:</strong> MATH 105 (Precalculus) or MATH 110 (College Algebra)</li>
                                    <li><strong>Score 61-75:</strong> MATH 180 (Calculus I)</li>
                                    <li><strong>Score 76-100:</strong> MATH 181 (Calculus II) with advisor approval</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="resources-section">
                        <h4>📖 Additional UIC Mathematics Resources</h4>
                        <div class="resources-grid">
                            <div class="resource-item">
                                <h5>🖥️ Online Resources</h5>
                                <ul>
                                    <li>UIC Blackboard course materials</li>
                                    <li>WebAssign homework system</li>
                                    <li>MyMathLab access</li>
                                    <li>UIC Library research databases</li>
                                </ul>
                            </div>
                            <div class="resource-item">
                                <h5>👥 Study Groups & Communities</h5>
                                <ul>
                                    <li>UIC Math Club</li>
                                    <li>Women in Mathematics Society</li>
                                    <li>Actuarial Science Club</li>
                                    <li>Statistics Student Organization</li>
                                </ul>
                            </div>
                            <div class="resource-item">
                                <h5>🎓 Career & Graduate School</h5>
                                <ul>
                                    <li>Mathematics major advising</li>
                                    <li>Graduate school preparation</li>
                                    <li>Career counseling services</li>
                                    <li>Research opportunities (REU)</li>
                                </ul>
                            </div>
                            <div class="resource-item">
                                <h5>♿ Accessibility Services</h5>
                                <ul>
                                    <li>Disability Resource Center coordination</li>
                                    <li>Extended time accommodations</li>
                                    <li>Alternative format materials</li>
                                    <li>Assistive technology support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="emergency-help">
                        <h4>🆘 Need Immediate Math Help?</h4>
                        <div class="help-options">
                            <div class="help-option urgent">
                                <h5>📞 Crisis Academic Support</h5>
                                <p>If you're struggling in a math course and need immediate help:</p>
                                <ul>
                                    <li>Contact your instructor during office hours</li>
                                    <li>Visit the Math Learning Center (SEO 430)</li>
                                    <li>Schedule emergency tutoring through We Convene</li>
                                    <li>Reach out to academic advisors: (312) 996-3040</li>
                                </ul>
                            </div>
                            <div class="help-option">
                                <h5>📧 Quick Contact Options</h5>
                                <ul>
                                    <li><strong>General Math Questions:</strong> <a href="mailto:mscs@uic.edu">mscs@uic.edu</a></li>
                                    <li><strong>Placement Test Issues:</strong> <a href="mailto:testing@uic.edu">testing@uic.edu</a></li>
                                    <li><strong>Academic Advising:</strong> <a href="mailto:mscsadvising@uic.edu">mscsadvising@uic.edu</a></li>
                                    <li><strong>Transfer Credit:</strong> <a href="mailto:admissions@uic.edu">admissions@uic.edu</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="we-convene-connection">
                        <h4>🤝 We Convene + UIC Partnership</h4>
                        <div class="partnership-info">
                            <p><strong>Specialized UIC Math Preparation:</strong> Our tutors are familiar with UIC's mathematics curriculum and can provide targeted preparation for:</p>
                            <ul>
                                <li>ALEKS PPL placement test preparation</li>
                                <li>Prerequisite course review (MATH 070, 090, 105, 110)</li>
                                <li>Calculus readiness assessment</li>
                                <li>UIC-specific course support and study strategies</li>
                                <li>Transfer student mathematics evaluation assistance</li>
                            </ul>
                            <p><em>Contact We Convene for personalized UIC mathematics preparation tailored to your specific placement goals and academic plans.</em></p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Add Python coding section
        if (grade === 'python-coding') {
            examplesHTML += `
                <div class="python-coding-section">
                    <h3>🐍 Everybody can Code Python - Mathematical Programming</h3>
                    
                    <div class="python-intro">
                        <div class="intro-card">
                            <h4>🎯 Why Learn Python for Math?</h4>
                            <p>Python is one of the most popular programming languages for mathematics, science, and data analysis. It's beginner-friendly and powerful enough for advanced mathematical computations.</p>
                            <ul>
                                <li><strong>Easy to Learn:</strong> Simple, readable syntax</li>
                                <li><strong>Powerful Libraries:</strong> NumPy, SciPy, Matplotlib for math</li>
                                <li><strong>Real-World Applications:</strong> Used in finance, engineering, research</li>
                                <li><strong>Free and Open Source:</strong> Available to everyone</li>
                            </ul>
                        </div>
                    </div>

                    <div class="python-modules">
                        <div class="module-card">
                            <h4>📚 Module 1: Python Basics for Math</h4>
                            <div class="lesson-list">
                                <div class="lesson">
                                    <h5>Variables and Numbers</h5>
                                    <div class="code-example">
                                        <pre><code># Storing numbers in variables
x = 10
y = 3.14
result = x + y
print(f"The result is: {result}")</code></pre>
                                    </div>
                                    <p><strong>Try it:</strong> Create variables for your math homework problems!</p>
                                </div>
                                
                                <div class="lesson">
                                    <h5>Basic Math Operations</h5>
                                    <div class="code-example">
                                        <pre><code># Python math operators
addition = 5 + 3        # 8
subtraction = 10 - 4    # 6
multiplication = 7 * 6  # 42
division = 15 / 3       # 5.0
exponent = 2 ** 3       # 8
remainder = 17 % 5      # 2</code></pre>
                                    </div>
                                </div>

                                <div class="lesson">
                                    <h5>Math Functions</h5>
                                    <div class="code-example">
                                        <pre><code># Built-in math functions
import math

# Square root
sqrt_result = math.sqrt(16)  # 4.0

# Trigonometry
sin_value = math.sin(math.pi/2)  # 1.0
cos_value = math.cos(0)          # 1.0

# Logarithms
log_result = math.log(10)        # Natural log
log10_result = math.log10(100)   # 2.0</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="module-card">
                            <h4>🔢 Module 2: Solving Math Problems with Code</h4>
                            <div class="lesson-list">
                                <div class="lesson">
                                    <h5>Quadratic Formula Solver</h5>
                                    <div class="code-example">
                                        <pre><code>import math

def solve_quadratic(a, b, c):
    """Solve ax² + bx + c = 0"""
    discriminant = b**2 - 4*a*c
    
    if discriminant < 0:
        return "No real solutions"
    elif discriminant == 0:
        x = -b / (2*a)
        return f"One solution: x = {x}"
    else:
        x1 = (-b + math.sqrt(discriminant)) / (2*a)
        x2 = (-b - math.sqrt(discriminant)) / (2*a)
        return f"Two solutions: x₁ = {x1}, x₂ = {x2}"

# Example: Solve 2x² + 5x - 3 = 0
result = solve_quadratic(2, 5, -3)
print(result)</code></pre>
                                    </div>
                                </div>

                                <div class="lesson">
                                    <h5>Distance Formula Calculator</h5>
                                    <div class="code-example">
                                        <pre><code>import math

def distance_between_points(x1, y1, x2, y2):
                                            """Calculate distance between two points"""
    distance = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    return distance

# Example: Distance between (1, 2) and (4, 6)
dist = distance_between_points(1, 2, 4, 6)
print(f"Distance: {dist:.2f}")</code></pre>
                                    </div>
                                </div>

                                <div class="lesson">
                                    <h5>Statistics Calculator</h5>
                                    <div class="code-example">
                                        <pre><code>def calculate_stats(numbers):
    """Calculate basic statistics"""
    n = len(numbers)
    mean = sum(numbers) / n
    
    # Calculate median
    sorted_nums = sorted(numbers)
    if n % 2 == 0:
        median = (sorted_nums[n//2-1] + sorted_nums[n//2]) / 2
    else:
        median = sorted_nums[n//2]
    
    # Calculate range
    range_val = max(numbers) - min(numbers)
    
    return {
        'mean': mean,
        'median': median,
        'range': range_val,
        'min': min(numbers),
        'max': max(numbers)
    }

# Example usage
grades = [85, 92, 78, 96, 88, 91, 84]
stats = calculate_stats(grades)
print(f"Mean: {stats['mean']:.1f}")
print(f"Median: {stats['median']}")
print(f"Range: {stats['range']}")</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="module-card">
                            <h4>📊 Module 3: Data Visualization</h4>
                            <div class="lesson-list">
                                <div class="lesson">
                                    <h5>Plotting Mathematical Functions</h5>
                                    <div class="code-example">
                                        <pre><code>import matplotlib.pyplot as plt
import numpy as np

# Create x values
x = np.linspace(-10, 10, 100)

# Define functions
y1 = x**2              # Parabola
y2 = 2*x + 1          # Linear function
y3 = np.sin(x)        # Sine wave

# Create the plot
plt.figure(figsize=(10, 6))
plt.plot(x, y1, label='y = x²', color='red')
plt.plot(x, y2, label='y = 2x + 1', color='blue')
plt.plot(x, y3, label='y = sin(x)', color='green')

plt.xlabel('x')
plt.ylabel('y')
plt.title('Mathematical Functions')
plt.legend()
plt.grid(True)
plt.show()</code></pre>
                                    </div>
                                </div>

                                <div class="lesson">
                                    <h5>Creating Bar Charts for Data</h5>
                                    <div class="code-example">
                                        <pre><code>import matplotlib.pyplot as plt

# Student test scores by subject
subjects = ['Math', 'Science', 'English', 'History', 'Art']
scores = [88, 92, 85, 78, 94]

# Create bar chart
plt.figure(figsize=(8, 6))
bars = plt.bar(subjects, scores, color=['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57'])

# Add value labels on bars
for bar, score in zip(bars, scores):
    plt.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.5, 
             str(score), ha='center', va='bottom')

plt.ylabel('Score')
plt.title('Test Scores by Subject')
plt.ylim(0, 100)
plt.show()</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="module-card">
                            <h4>🚀 Module 4: Advanced Mathematical Programming</h4>
                            <div class="lesson-list">
                                <div class="lesson">
                                    <h5>Working with Lists and Loops</h5>
                                    <div class="code-example">
                                        <pre><code># Generate Fibonacci sequence
def fibonacci(n):
    """Generate first n Fibonacci numbers"""
    sequence = []
    a, b = 0, 1
    for i in range(n):
        sequence.append(a)
        a, b = b, a + b
    return sequence

# Calculate factorial
def factorial(n):
    """Calculate n! (n factorial)"""
    if n <= 1:
        return 1
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

# Prime number checker
def is_prime(n):
    """Check if a number is prime"""
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# Examples
print("First 10 Fibonacci numbers:", fibonacci(10))
print("5! =", factorial(5))
print("Is 17 prime?", is_prime(17))</code></pre>
                                    </div>
                                </div>

                                <div class="lesson">
                                    <h5>Random Number Simulations</h5>
                                    <div class="code-example">
                                        <pre><code>import random
import matplotlib.pyplot as plt

# Coin flip simulation
def coin_flip_simulation(num_flips):
    """Simulate coin flips and count heads/tails"""
    heads = 0
    tails = 0
    
    for _ in range(num_flips):
        if random.random() < 0.5:
            heads += 1
        else:
            tails += 1
    
    return heads, tails

# Dice roll simulation
def dice_roll_analysis(num_rolls):
    """Analyze frequency of dice rolls"""
    results = {i: 0 for i in range(1, 7)}
    
    for _ in range(num_rolls):
        roll = random.randint(1, 6)
        results[roll] += 1
    
    return results

# Run simulations
heads, tails = coin_flip_simulation(1000)
print(f"Coin flips: {heads} heads, {tails} tails")

dice_data = dice_roll_analysis(1000)
print("Dice roll frequencies:", dice_data)</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="python-projects">
                        <h4>🎯 Practice Projects</h4>
                        <div class="project-grid">
                            <div class="project-card">
                                <h5>📱 Math Calculator App</h5>
                                <p>Build a calculator that can solve various math problems including:</p>
                                <ul>
                                    <li>Basic arithmetic operations</li>
                                    <li>Quadratic equation solver</li>
                                    <li>Area and volume calculators</li>
                                    <li>Unit converters</li>
                                </ul>
                            </div>

                            <div class="project-card">
                                <h5>📊 Grade Tracker</h5>
                                <p>Create a program to track and analyze your grades:</p>
                                <ul>
                                    <li>Store test scores and assignments</li>
                                    <li>Calculate GPA and averages</li>
                                    <li>Generate progress reports</li>
                                    <li>Visualize grade trends</li>
                                </ul>
                            </div>

                            <div class="project-card">
                                <h5>🎲 Math Game</h5>
                                <p>Design an interactive math game:</p>
                                <ul>
                                    <li>Random problem generation</li>
                                    <li>Score tracking system</li>
                                    <li>Difficulty levels</li>
                                    <li>Performance statistics</li>
                                </ul>
                            </div>

                            <div class="project-card">
                                <h5>📈 Function Grapher</h5>
                                <p>Build a tool to graph mathematical functions:</p>
                                <ul>
                                    <li>Plot multiple functions</li>
                                    <li>Find intersections</li>
                                    <li>Calculate derivatives</li>
                                    <li>Interactive zoom and pan</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="python-resources">
                        <h4>📚 Learning Resources</h4>
                        <div class="resources-grid">
                            <div class="resource-item">
                                <h5>🔧 Setup and Installation</h5>
                                <p>Getting started with Python programming:</p>
                                <ul>
                                    <li>Install Python from python.org</li>
                                    <li>Use online editors like Replit</li>
                                    <li>Install VS Code or PyCharm</li>
                                    <li>Learn pip package management</li>
                                </ul>
                            </div>

                            <div class="resource-item">
                                <h5>📦 Essential Libraries</h5>
                                <ul>
                                    <li><strong>math:</strong> Basic mathematical functions</li>
                                    <li><strong>numpy:</strong> Advanced numerical computing</li>
                                    <li><strong>matplotlib:</strong> Data visualization and plotting</li>
                                    <li><strong>pandas:</strong> Data analysis and manipulation</li>
                                    <li><strong>scipy:</strong> Scientific computing tools</li>
                                </ul>
                            </div>

                            <div class="resource-item">
                                <h5>💡 Programming Tips</h5>
                                <ul>
                                    <li>Start with simple problems</li>
                                    <li>Break complex problems into smaller parts</li>
                                    <li>Use meaningful variable names</li>
                                    <li>Comment your code for clarity</li>
                                    <li>Test your programs with different inputs</li>
                                </ul>
                            </div>

                            <div class="resource-item">
                                <h5>🌟 Next Steps</h5>
                                <ul>
                                    <li>Join Python communities online</li>
                                    <li>Contribute to open-source projects</li>
                                    <li>Build a portfolio of math projects</li>
                                    <li>Explore machine learning applications</li>
                                    <li>Consider computer science courses</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="we-convene-python">
                        <h4>🤝 We Convene Python Programming Support</h4>
                        <div class="support-info">
                            <p><strong>Personalized Python Tutoring:</strong> Our experienced tutors can help you master Python programming for mathematical applications. We offer:</p>
                            <ul>
                                <li>One-on-one coding sessions</li>
                                <li>Project-based learning approach</li>
                                <li>Math-focused programming challenges</li>
                                <li>Homework and assignment help</li>
                                <li>Preparation for computer science courses</li>
                                <li>Portfolio development guidance</li>
                            </ul>
                            <p><em>Contact We Convene to start your journey in mathematical programming with Python!</em></p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Add GED prep section
        if (grade === 'ged') {
            examplesHTML += `
                <div class="ged-prep-section">
                    <h3>📚 Cook County GED Math Test Information</h3>
                    <div class="ged-overview">
                        <div class="ged-info-card">
                            <h4>Test Overview</h4>
                            <p>The GED Mathematical Reasoning test covers four main areas:</p>
                            <ul>
                                <li><strong>Number Sense & Operations</strong> - 20-30%</li>
                                <li><strong>Algebra & Functions</strong> - 45-55%</li>
                                <li><strong>Geometry & Measurement</strong> - 15-25%</li>
                                <li><strong>Data Analysis & Statistics</strong> - 8-12%</li>
                            </ul>
                        </div>
                        <div class="ged-info-card">
                            <h4>Test Details</h4>
                            <ul>
                                <li><strong>Time:</strong> 115 minutes</li>
                                <li><strong>Questions:</strong> ~46 questions</li>
                                <li><strong>Calculator:</strong> TI-30XS provided</li>
                                <li><strong>Format:</strong> Multiple choice, drag-and-drop, fill-in-the-blank</li>
                                <li><strong>Passing Score:</strong> 145 out of 200</li>
                            </ul>
                        </div>
                        <div class="ged-info-card">
                            <h4>Study Tips</h4>
                            <ul>
                                <li>Practice with the TI-30XS calculator</li>
                                <li>Focus on word problems and real-world applications</li>
                                <li>Review basic arithmetic and algebra</li>
                                <li>Practice interpreting graphs and charts</li>
                                <li>Time management is crucial - practice pacing</li>
                            </ul>
                        </div>
                    </div>
                    <div class="ged-formula-sheet">
                        <h4>📝 Key Formulas to Remember</h4>
                        <div class="formula-grid">
                            <div class="formula-item">
                                <strong>Area of Rectangle:</strong> A = lw
                            </div>
                            <div class="formula-item">
                                <strong>Area of Triangle:</strong> A = ½bh
                            </div>
                            <div class="formula-item">
                                <strong>Area of Circle:</strong> A = πr²
                            </div>
                            <div class="formula-item">
                                <strong>Pythagorean Theorem:</strong> a² + b² = c²
                            </div>
                            <div class="formula-item">
                                <strong>Distance Formula:</strong> d = √[(x₂-x₁)² + (y₂-y₁)²]
                            </div>
                            <div class="formula-item">
                                <strong>Slope Formula:</strong> m = (y₂-y₁)/(x₂-x₁)
                            </div>
                        </div>
                    </div>
                    <div class="ged-resources">
                        <h4>🎯 Cook County Resources</h4>
                        <p>Contact We Convene for personalized GED prep tutoring sessions tailored to Cook County requirements.</p>
                    </div>
                </div>
            `;
        }

        if (grade === 'resource-center') {
            examplesHTML += `
                <div class="resource-center-section">
                    <h3>📚 We Convene Math Resource Center</h3>
                    <p class="section-intro">Your comprehensive collection of math learning tools, calculator tutorials, and study resources to support your mathematical journey.</p>
                    
                    <div class="resource-categories">
                        <div class="resource-category ti-calculators">
                            <h4>🧮 Texas Instruments Calculator Tutorials</h4>
                            <p class="category-description">Master your TI calculator with our comprehensive step-by-step tutorials. From basic operations to advanced graphing, we've got you covered.</p>
                            
                            <div class="calculator-models">
                                <div class="calculator-model">
                                    <div class="model-header">
                                        <span class="calculator-icon">🧮</span>
                                        <h5>TI-30XS MultiView™</h5>
                                        <span class="ged-badge">✓ GED Approved</span>
                                    </div>
                                    <p class="model-description">The standard calculator for GED Math Test and general mathematics</p>
                                    
                                    <div class="tutorial-list">
                                        <div class="tutorial-item">
                                            <h6>📖 Basic Operations</h6>
                                            <p class="tutorial-meta"><span class="difficulty beginner">Beginner</span> • 5 minutes</p>
                                            <ul class="tutorial-topics">
                                                <li>Turn on calculator</li>
                                                <li>Addition, subtraction, multiplication, division</li>
                                                <li>Order of operations</li>
                                                <li>Clearing the display</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="tutorial-item">
                                            <h6>📖 Working with Fractions</h6>
                                            <p class="tutorial-meta"><span class="difficulty beginner">Beginner</span> • 8 minutes</p>
                                            <ul class="tutorial-topics">
                                                <li>Entering fractions (n/d key)</li>
                                                <li>Mixed numbers (U n/d key)</li>
                                                <li>Adding and subtracting fractions</li>
                                                <li>Converting between fractions and decimals</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="tutorial-item">
                                            <h6>📖 Calculating Percentages</h6>
                                            <p class="tutorial-meta"><span class="difficulty beginner">Beginner</span> • 6 minutes</p>
                                            <ul class="tutorial-topics">
                                                <li>Finding percent of a number</li>
                                                <li>Calculating percent increase/decrease</li>
                                                <li>Converting decimals to percentages</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="tutorial-item">
                                            <h6>📖 Exponents and Square Roots</h6>
                                            <p class="tutorial-meta"><span class="difficulty intermediate">Intermediate</span> • 10 minutes</p>
                                            <ul class="tutorial-topics">
                                                <li>Using the x² key for squares</li>
                                                <li>Using the ^ key for higher powers</li>
                                                <li>Calculating square roots</li>
                                                <li>Cube roots and nth roots</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="tutorial-item">
                                            <h6>📖 Scientific Notation</h6>
                                            <p class="tutorial-meta"><span class="difficulty intermediate">Intermediate</span> • 7 minutes</p>
                                            <ul class="tutorial-topics">
                                                <li>Entering numbers with EE key</li>
                                                <li>Multiplying in scientific notation</li>
                                                <li>Converting to standard notation</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="ged-specific">
                                        <h6>🎯 GED Test Day Tips</h6>
                                        <div class="tips-grid">
                                            <div class="tip-card">
                                                <strong>Before Test Day</strong>
                                                <ul>
                                                    <li>Familiarize yourself with all TI-30XS buttons</li>
                                                    <li>Practice without looking at keys</li>
                                                    <li>Learn clearing (ON + AC)</li>
                                                </ul>
                                            </div>
                                            <div class="tip-card">
                                                <strong>Time-Saving Tips</strong>
                                                <ul>
                                                    <li>Use ANS key for continuing calculations</li>
                                                    <li>Store values in memory (STO/RCL)</li>
                                                    <li>Use parentheses for complex operations</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="calculator-model">
                                    <div class="model-header">
                                        <span class="calculator-icon">📊</span>
                                        <h5>TI-84 Plus CE</h5>
                                        <span class="advanced-badge">Advanced</span>
                                    </div>
                                    <p class="model-description">Advanced graphing calculator for high school mathematics and beyond</p>
                                    
                                    <div class="tutorial-list">
                                        <div class="tutorial-item">
                                            <h6>📖 Basic Graphing</h6>
                                            <p class="tutorial-meta"><span class="difficulty intermediate">Intermediate</span> • 12 minutes</p>
                                            <ul class="tutorial-topics">
                                                <li>Entering equations (Y= button)</li>
                                                <li>Graphing functions (GRAPH)</li>
                                                <li>Adjusting viewing window</li>
                                                <li>Using TRACE to explore functions</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="tutorial-item">
                                            <h6>📖 Solving Equations</h6>
                                            <p class="tutorial-meta"><span class="difficulty advanced">Advanced</span> • 15 minutes</p>
                                            <ul class="tutorial-topics">
                                                <li>Graphing quadratic functions</li>
                                                <li>Finding zeros (x-intercepts)</li>
                                                <li>Finding minimum/maximum points</li>
                                                <li>Using table of values</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="calculator-comparison">
                                <h5>🔍 Which TI Calculator Should You Use?</h5>
                                <div class="comparison-grid">
                                    <div class="comparison-card">
                                        <h6>TI-30XS MultiView™</h6>
                                        <p class="recommended-for"><strong>Best for:</strong> GED, Basic Math, Pre-Algebra, Algebra I</p>
                                        <div class="features">
                                            <h6>Features:</h6>
                                            <ul>
                                                <li>✓ Basic arithmetic</li>
                                                <li>✓ Fractions and decimals</li>
                                                <li>✓ Percentages</li>
                                                <li>✓ Scientific notation</li>
                                                <li>✓ Statistics functions</li>
                                                <li>✓ GED approved</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div class="comparison-card">
                                        <h6>TI-84 Plus CE</h6>
                                        <p class="recommended-for"><strong>Best for:</strong> Algebra II, Geometry, Trigonometry, Pre-Calculus, Calculus</p>
                                        <div class="features">
                                            <h6>Features:</h6>
                                            <ul>
                                                <li>✓ All TI-30XS features</li>
                                                <li>✓ Graphing capabilities</li>
                                                <li>✓ Programming functions</li>
                                                <li>✓ Matrix operations</li>
                                                <li>✓ Calculus functions</li>
                                                <li>✓ Color display</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="common-mistakes">
                                <h5>⚠️ Common Calculator Mistakes to Avoid</h5>
                                <div class="mistakes-grid">
                                    <div class="mistake-card">
                                        <h6>❌ Forgetting Order of Operations</h6>
                                        <p class="problem">Wrong: 2 + 3 × 4 = 20</p>
                                        <p class="solution">✓ Use parentheses: (2 + 3) × 4 = 20</p>
                                    </div>
                                    
                                    <div class="mistake-card">
                                        <h6>❌ Mixing Up Fraction Entry</h6>
                                        <p class="problem">Confusion between fractions and mixed numbers</p>
                                        <p class="solution">✓ Use n/d for fractions, U n/d for mixed numbers</p>
                                    </div>
                                    
                                    <div class="mistake-card">
                                        <h6>❌ Not Clearing Previous Calculations</h6>
                                        <p class="problem">Old calculations affecting new results</p>
                                        <p class="solution">✓ Always press ON, then AC before new problems</p>
                                    </div>
                                    
                                    <div class="mistake-card">
                                        <h6>❌ Incorrect Scientific Notation</h6>
                                        <p class="problem">Using × 10^ instead of EE key</p>
                                        <p class="solution">✓ For 1.5 × 10⁶: press 1.5, EE, 6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="resource-category study-materials">
                            <h4>📖 Additional Study Resources</h4>
                            
                            <div class="materials-grid">
                                <div class="material-card">
                                    <h5>📋 Formula Reference Sheets</h5>
                                    <p>Quick-access reference for essential math formulas</p>
                                    <ul>
                                        <li>Algebra formulas</li>
                                        <li>Geometry formulas</li>
                                        <li>Trigonometry identities</li>
                                        <li>Statistics formulas</li>
                                    </ul>
                                </div>
                                
                                <div class="material-card">
                                    <h5>🎥 Video Tutorial Library</h5>
                                    <p>Step-by-step video lessons for visual learners</p>
                                    <ul>
                                        <li>Concept explanations</li>
                                        <li>Worked examples</li>
                                        <li>Problem-solving strategies</li>
                                        <li>Test-taking tips</li>
                                    </ul>
                                </div>
                                
                                <div class="material-card">
                                    <h5>📝 Practice Worksheets</h5>
                                    <p>Downloadable worksheets with answer keys</p>
                                    <ul>
                                        <li>Topic-specific practice</li>
                                        <li>Mixed review exercises</li>
                                        <li>Challenge problems</li>
                                        <li>Detailed solutions</li>
                                    </ul>
                                </div>
                                
                                <div class="material-card">
                                    <h5>💡 Study Tips & Strategies</h5>
                                    <p>Proven methods for effective math learning</p>
                                    <ul>
                                        <li>Time management techniques</li>
                                        <li>Note-taking strategies</li>
                                        <li>Memory aids and mnemonics</li>
                                        <li>Test anxiety management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="resource-center-footer">
                        <h4>🎯 Need Personalized Help?</h4>
                        <p>Contact <strong>We Convene at School and Home Tutoring Services of Chicago</strong> for one-on-one tutoring sessions, calculator training, and customized study plans tailored to your specific needs and goals.</p>
                        <p class="contact-info">We offer both in-person and online tutoring sessions for all grade levels and math topics.</p>
                    </div>
                </div>
            `;
        }

        if (grade === 'ctd-math') {
            examplesHTML += `
                <div class="ctd-section">
                    <h3>🎓 Northwestern University Center for Talent Development - Middle School Math</h3>
                    
                    <div class="ctd-intro">
                        <div class="intro-card">
                            <h4>🌟 About CTD Math Programs</h4>
                            <p>The Center for Talent Development at Northwestern University offers exceptional mathematics programs for academically talented middle school students. Both online and in-person options are available to challenge and inspire young mathematicians.</p>
                            <div class="program-highlights">
                                <div class="highlight">✨ Expert Northwestern faculty</div>
                                <div class="highlight">✨ Accelerated curriculum</div>
                                <div class="highlight">✨ Small class sizes</div>
                                <div class="highlight">✨ College preparatory focus</div>
                            </div>
                        </div>
                    </div>

                    <div class="ctd-programs">
                        <div class="program-category">
                            <h4>💻 Online Middle School Math Courses</h4>
                            
                            <div class="course-cards">
                                <div class="course-card">
                                    <h5>Pre-Algebra Foundations</h5>
                                    <p class="grade-level">Grades 6-7 | 12 weeks</p>
                                    <p class="course-desc">Build strong foundations in algebraic thinking with live online instruction</p>
                                    <ul class="topic-list">
                                        <li>Variables and expressions</li>
                                        <li>Order of operations</li>
                                        <li>Integers and rational numbers</li>
                                        <li>Equations and proportions</li>
                                    </ul>
                                </div>

                                <div class="course-card">
                                    <h5>Algebra I Accelerated</h5>
                                    <p class="grade-level">Grades 7-8 | 14 weeks</p>
                                    <p class="course-desc">Advanced algebra for high-achieving students</p>
                                    <ul class="topic-list">
                                        <li>Linear and quadratic functions</li>
                                        <li>Systems of equations</li>
                                        <li>Exponential functions</li>
                                        <li>Polynomials and factoring</li>
                                    </ul>
                                </div>

                                <div class="course-card">
                                    <h5>Geometry Explorations</h5>
                                    <p class="grade-level">Grades 7-8 | 12 weeks</p>
                                    <p class="course-desc">Develop geometric reasoning and proof skills</p>
                                    <ul class="topic-list">
                                        <li>Congruence and similarity</li>
                                        <li>Coordinate geometry</li>
                                        <li>Pythagorean theorem</li>
                                        <li>Introduction to proofs</li>
                                    </ul>
                                </div>

                                <div class="course-card">
                                    <h5>Problem Solving & Critical Thinking</h5>
                                    <p class="grade-level">Grades 6-8 | 10 weeks</p>
                                    <p class="course-desc">Advanced mathematical problem-solving strategies</p>
                                    <ul class="topic-list">
                                        <li>Mathematical reasoning</li>
                                        <li>Pattern recognition</li>
                                        <li>Logic puzzles</li>
                                        <li>Competition math strategies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="program-category">
                            <h4>🏛️ In-Person Programs at Northwestern</h4>
                            
                            <div class="in-person-programs">
                                <div class="program-card">
                                    <h5>☀️ Summer Math Intensive</h5>
                                    <p class="program-details"><strong>Duration:</strong> 3 weeks | <strong>Location:</strong> Evanston Campus</p>
                                    <p class="program-desc">Intensive summer program with daily 3-hour math sessions</p>
                                    <div class="features-grid">
                                        <div class="feature">📚 Small classes (12-15 students)</div>
                                        <div class="feature">🎓 Northwestern campus experience</div>
                                        <div class="feature">🤝 Peer collaboration</div>
                                        <div class="feature">🎯 College preparatory focus</div>
                                    </div>
                                    <p class="schedule">Monday-Friday, 9:00 AM - 12:00 PM</p>
                                </div>

                                <div class="program-card">
                                    <h5>📅 Saturday Enrichment Program</h5>
                                    <p class="program-details"><strong>Duration:</strong> 10 weeks | <strong>Location:</strong> Evanston Campus</p>
                                    <p class="program-desc">Weekend math enrichment during the school year</p>
                                    <div class="features-grid">
                                        <div class="feature">📖 Beyond school curriculum</div>
                                        <div class="feature">🏆 Competition preparation</div>
                                        <div class="feature">👥 Interactive group activities</div>
                                        <div class="feature">👨‍🏫 Northwestern faculty</div>
                                    </div>
                                    <p class="schedule">Saturdays, 9:00 AM - 12:00 PM (Fall or Spring)</p>
                                </div>

                                <div class="program-card">
                                    <h5>🏅 Math Olympiad Training</h5>
                                    <p class="program-details"><strong>Duration:</strong> 8 weeks | <strong>Grades:</strong> 7-8</p>
                                    <p class="program-desc">Preparation for national math competitions</p>
                                    <div class="features-grid">
                                        <div class="feature">🎯 MATHCOUNTS prep</div>
                                        <div class="feature">📝 AMC 8 strategies</div>
                                        <div class="feature">🎪 Mock competitions</div>
                                        <div class="feature">👤 Individual coaching</div>
                                    </div>
                                    <p class="schedule">Flexible weekend sessions</p>
                                </div>
                            </div>
                        </div>

                        <div class="program-category">
                            <h4>📚 Support Resources for CTD Students</h4>
                            
                            <div class="resources-grid">
                                <div class="resource-card">
                                    <h5>💡 Online Tutoring Sessions</h5>
                                    <p>One-on-one or small group tutoring with personalized instruction</p>
                                    <ul>
                                        <li>Homework help</li>
                                        <li>Test preparation</li>
                                        <li>Flexible scheduling</li>
                                    </ul>
                                </div>

                                <div class="resource-card">
                                    <h5>📖 Math Resource Library</h5>
                                    <p>Digital resources and practice materials</p>
                                    <ul>
                                        <li>Video tutorials</li>
                                        <li>Practice problem sets</li>
                                        <li>Solution guides</li>
                                        <li>Interactive simulations</li>
                                    </ul>
                                </div>

                                <div class="resource-card">
                                    <h5>👪 Parent Information Sessions</h5>
                                    <p>Supporting your child's math education</p>
                                    <ul>
                                        <li>Understanding CTD curriculum</li>
                                        <li>Supporting learning at home</li>
                                        <li>College preparation pathway</li>
                                    </ul>
                                </div>

                                <div class="resource-card">
                                    <h5>🌐 Student Math Community</h5>
                                    <p>Connect with mathematically talented students</p>
                                    <ul>
                                        <li>Online discussion forums</li>
                                        <li>Math club activities</li>
                                        <li>Peer study groups</li>
                                        <li>Alumni network</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ctd-enrollment">
                        <h4>📋 Enrollment Information</h4>
                        <div class="enrollment-grid">
                            <div class="enrollment-info">
                                <h5>📞 Contact Information</h5>
                                <p><strong>Phone:</strong> (847) 491-3782</p>
                                <p><strong>Email:</strong> ctd@northwestern.edu</p>
                                <p><strong>Website:</strong> www.ctd.northwestern.edu</p>
                                <p><strong>Office:</strong> 617 Dartmouth Place, Evanston, IL 60208</p>
                            </div>

                            <div class="enrollment-info">
                                <h5>✅ Admission Requirements</h5>
                                <ul>
                                    <li>Above-grade-level test scores</li>
                                    <li>Teacher recommendations</li>
                                    <li>Academic transcripts</li>
                                    <li>Completed application form</li>
                                </ul>
                            </div>

                            <div class="enrollment-info">
                                <h5>💰 Financial Aid Available</h5>
                                <ul>
                                    <li>Need-based scholarships</li>
                                    <li>Merit scholarships</li>
                                    <li>Payment plans</li>
                                </ul>
                                <p><em>Submit financial aid form with application</em></p>
                            </div>
                        </div>
                        <div class="we-convene-support">
                            <p><strong>🎯 We Convene Support:</strong> Contact We Convene for additional tutoring and preparation for CTD programs. We can help you prepare for admission tests and excel in CTD coursework.</p>
                        </div>
                    </div>
                </div>
            `;
        }

        examplesContainer.innerHTML = examplesHTML;
    }

    async solveProblem() {
        const input = document.getElementById('mathInput').value.trim();
        if (!input) {
            alert('Please enter a math expression or equation');
            return;
        }

        const solveBtn = document.getElementById('solveBtn');
        solveBtn.disabled = true;
        solveBtn.textContent = 'Solving...';

        try {
            await this.processAndDisplaySolution(input);
        } catch (error) {
            this.displayError('Sorry, there was an error processing your problem. Please check your input and try again.');
        } finally {
            solveBtn.disabled = false;
            solveBtn.textContent = 'Solve Step by Step';
        }
    }

    async processAndDisplaySolution(input) {
        try {
            const userId = localStorage.getItem('weconvene_user_id');
            const body = { expression: input };
            if (userId) body.userId = parseInt(userId);
            const response = await fetch('/api/solve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            if (data.error) throw new Error(data.error);
            this.displayAPISteps(data);
        } catch (error) {
            this.displayFallbackSolution(input);
        }
    }

    getProductiveStruggleMode() {
        return localStorage.getItem('weconvene_productive_struggle') === 'on';
    }

    toggleProductiveStruggle() {
        const newMode = !this.getProductiveStruggleMode();
        localStorage.setItem('weconvene_productive_struggle', newMode ? 'on' : 'off');
        this.updateStruggleToggleBtn();
        if (this._lastAPIData) {
            this.displayAPISteps(this._lastAPIData);
        }
    }

    escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    updateStruggleToggleBtn() {
        const btn = document.getElementById('struggleToggleBtn');
        if (!btn) return;
        const on = this.getProductiveStruggleMode();
        btn.textContent = on ? '🧠 Productive Struggle: ON' : '🧠 Productive Struggle: OFF';
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', String(on));
    }

    displayAPISteps(data) {
        this._lastAPIData = data;
        const { steps = [], type, originalExpression } = data;
        const resultsSection = document.getElementById('resultsSection');
        const solutionSteps = document.getElementById('solutionSteps');
        const craCard = document.getElementById('craCard');

        const firstChangeType = steps.length > 0 ? steps[0].changeType : null;
        const analogy = typeof CRAAnalogies !== 'undefined'
            ? CRAAnalogies.getAnalogy(originalExpression, type, firstChangeType)
            : null;

        if (analogy) {
            craCard.innerHTML = `
                <div class="cra-card-inner">
                    <div class="cra-icon">🌍</div>
                    <div class="cra-content">
                        <h4>Real-World Connection: ${analogy.title}</h4>
                        <p class="cra-analogy">${analogy.analogy}</p>
                        <div class="cra-visual">${analogy.visual}</div>
                    </div>
                </div>
            `;
            craCard.style.display = 'block';
        } else {
            craCard.style.display = 'none';
        }

        const struggleMode = this.getProductiveStruggleMode();

        let stepsHTML = `
            <div class="step step-original">
                <div class="step-number">Original Problem:</div>
                <div class="step-expression">${this.escapeHtml(originalExpression)}</div>
            </div>
        `;

        if (steps.length > 0) {
            steps.forEach((step, index) => {
                const stepCue = typeof CRAAnalogies !== 'undefined'
                    ? CRAAnalogies.getStepCue(step.changeType)
                    : '';
                const hiddenClass = (struggleMode && index > 0) ? 'step-hidden' : '';
                stepsHTML += `
                    <div class="step ${hiddenClass}" data-step-index="${index}">
                        <div class="step-number">Step ${step.stepNumber}: ${this.formatChangeType(step.changeType)}</div>
                        <div class="step-expression">${this.escapeHtml(step.newExpression)}</div>
                        <div class="step-explanation">${this.escapeHtml(step.explanation)}</div>
                        ${stepCue ? `<div class="step-cue">💡 ${stepCue}</div>` : ''}
                    </div>
                `;
            });

            if (struggleMode && steps.length > 1) {
                stepsHTML += `
                    <div class="anticipation-block" id="anticipationBlock">
                        <p class="anticipation-prompt">🤔 What do you think happens next?</p>
                        <button class="reveal-btn" id="revealNextBtn">Reveal Next Step</button>
                    </div>
                `;
            }
        } else {
            stepsHTML += `
                <div class="step">
                    <div class="step-number">Result:</div>
                    <div class="step-expression">No further simplification possible</div>
                    <div class="step-explanation">The expression is already in its simplest form.</div>
                </div>
            `;
        }

        solutionSteps.innerHTML = stepsHTML;
        this.updateStruggleToggleBtn();
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });

        const revealBtn = document.getElementById('revealNextBtn');
        if (revealBtn) {
            revealBtn.addEventListener('click', () => this.revealNextStep());
        }
    }

    revealNextStep() {
        const hiddenSteps = document.querySelectorAll('.step-hidden');
        if (hiddenSteps.length === 0) return;
        hiddenSteps[0].classList.remove('step-hidden');
        if (hiddenSteps.length === 1) {
            const block = document.getElementById('anticipationBlock');
            if (block) block.style.display = 'none';
        }
    }

    displaySteps(steps, originalInput) {
        const resultsSection = document.getElementById('resultsSection');
        const solutionSteps = document.getElementById('solutionSteps');

        let stepsHTML = `
            <div class="step">
                <div class="step-number">Original Problem:</div>
                <div class="step-expression">${originalInput}</div>
            </div>
        `;

        if (steps && steps.length > 0) {
            steps.forEach((step, index) => {
                const beforeChange = step.oldNode ? step.oldNode.toString() : (step.oldEquation ? step.oldEquation.ascii() : '');
                const afterChange = step.newNode ? step.newNode.toString() : (step.newEquation ? step.newEquation.ascii() : '');
                const changeType = this.formatChangeType(step.changeType);

                stepsHTML += `
                    <div class="step">
                        <div class="step-number">Step ${index + 1}: ${changeType}</div>
                        <div class="step-expression">${afterChange}</div>
                        <div class="step-explanation">${this.getStepExplanation(step.changeType)}</div>
                    </div>
                `;
            });
        } else {
            stepsHTML += `
                <div class="step">
                    <div class="step-number">Result:</div>
                    <div class="step-expression">No further simplification possible</div>
                    <div class="step-explanation">The expression is already in its simplest form.</div>
                </div>
            `;
        }

        solutionSteps.innerHTML = stepsHTML;
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    displayFallbackSolution(input) {
        this._lastAPIData = null;
        const resultsSection = document.getElementById('resultsSection');
        const solutionSteps = document.getElementById('solutionSteps');

        const craCard = document.getElementById('craCard');
        if (craCard) craCard.style.display = 'none';

        let stepsHTML = `
            <div class="step">
                <div class="step-number">Original Problem:</div>
                <div class="step-expression">${this.escapeHtml(input)}</div>
            </div>
            <div class="step">
                <div class="step-number">Analysis:</div>
                <div class="step-explanation">
                    This is a ${this.identifyProblemType(input)} problem.
                    ${this.getGeneralGuidance(input)}
                </div>
            </div>
        `;

        solutionSteps.innerHTML = stepsHTML;
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    identifyProblemType(input) {
        if (input.includes('=')) return 'equation solving';
        if (input.includes('^2') || input.includes('x^2')) return 'quadratic';
        if (input.includes('+') || input.includes('-')) return 'algebraic expression';
        return 'mathematical expression';
    }

    getGeneralGuidance(input) {
        if (input.includes('=')) {
            return 'To solve this equation, isolate the variable by performing the same operations on both sides.';
        }
        if (input.includes('x')) {
            return 'To simplify this expression, combine like terms and use the distributive property where applicable.';
        }
        return 'Simplify this expression using order of operations and basic arithmetic rules.';
    }

    formatChangeType(changeType) {
        const changeTypeMap = {
            'ADD_POLYNOMIAL_TERMS': 'Combine Like Terms',
            'MULTIPLY_POLYNOMIAL_TERMS': 'Multiply Terms',
            'DISTRIBUTE': 'Distribute',
            'SIMPLIFY_LEFT_SIDE': 'Simplify Left Side',
            'SIMPLIFY_RIGHT_SIDE': 'Simplify Right Side',
            'SUBTRACT_FROM_BOTH_SIDES': 'Subtract from Both Sides',
            'ADD_TO_BOTH_SIDES': 'Add to Both Sides',
            'DIVIDE_BOTH_SIDES': 'Divide Both Sides',
            'MULTIPLY_BOTH_SIDES': 'Multiply Both Sides'
        };
        return changeTypeMap[changeType] || changeType;
    }

    getStepExplanation(changeType) {
        const explanations = {
            'ADD_POLYNOMIAL_TERMS': 'Combined terms with the same variable and exponent.',
            'MULTIPLY_POLYNOMIAL_TERMS': 'Multiplied polynomial terms together.',
            'DISTRIBUTE': 'Applied the distributive property.',
            'SIMPLIFY_LEFT_SIDE': 'Simplified the left side of the equation.',
            'SIMPLIFY_RIGHT_SIDE': 'Simplified the right side of the equation.',
            'SUBTRACT_FROM_BOTH_SIDES': 'Subtracted the same value from both sides to maintain equality.',
            'ADD_TO_BOTH_SIDES': 'Added the same value to both sides to maintain equality.',
            'DIVIDE_BOTH_SIDES': 'Divided both sides by the same non-zero value.',
            'MULTIPLY_BOTH_SIDES': 'Multiplied both sides by the same value.'
        };
        return explanations[changeType] || 'Applied mathematical transformation.';
    }

    displayError(message) {
        const resultsSection = document.getElementById('resultsSection');
        const solutionSteps = document.getElementById('solutionSteps');

        solutionSteps.innerHTML = `
            <div class="step" style="border-left-color: #ef4444;">
                <div class="step-number">Error:</div>
                <div class="step-explanation" style="color: #ef4444;">${message}</div>
            </div>
        `;

        resultsSection.style.display = 'block';
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MathTutorApp();
});

// Make mathsteps available globally for the web interface
if (typeof window !== 'undefined') {
    window.MathTutorApp = MathTutorApp;
}