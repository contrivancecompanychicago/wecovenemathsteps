
// TI Education Calculator Tutorial Module
class TIEducationTutorials {
    constructor() {
        this.calculatorModels = {
            'ti-30xs': {
                name: 'TI-30XS MultiView™',
                description: 'Standard calculator for GED Math Test',
                image: '🧮',
                isGEDApproved: true,
                tutorials: [
                    {
                        id: 'basic-operations',
                        title: 'Basic Operations',
                        difficulty: 'Beginner',
                        duration: '5 minutes',
                        steps: [
                            { action: 'Turn on calculator', key: 'ON', description: 'Press the ON button to power up' },
                            { action: 'Addition', key: '5 + 3 =', description: 'Enter 5, press +, enter 3, press = to get 8' },
                            { action: 'Subtraction', key: '10 - 4 =', description: 'Enter 10, press -, enter 4, press = to get 6' },
                            { action: 'Multiplication', key: '6 × 7 =', description: 'Enter 6, press ×, enter 7, press = to get 42' },
                            { action: 'Division', key: '15 ÷ 3 =', description: 'Enter 15, press ÷, enter 3, press = to get 5' }
                        ]
                    },
                    {
                        id: 'fractions',
                        title: 'Working with Fractions',
                        difficulty: 'Beginner',
                        duration: '8 minutes',
                        steps: [
                            { action: 'Enter fraction', key: '3 n/d 4', description: 'Press 3, then n/d key, then 4 to enter 3/4' },
                            { action: 'Mixed number', key: '2 U n/d 1 n/d 3', description: 'Enter 2 1/3 using the U n/d key for mixed numbers' },
                            { action: 'Add fractions', key: '1 n/d 2 + 1 n/d 4 =', description: 'Add 1/2 + 1/4 = 3/4' },
                            { action: 'Convert to decimal', key: '◄►', description: 'Use toggle key to switch between fraction and decimal' }
                        ]
                    },
                    {
                        id: 'percentages',
                        title: 'Calculating Percentages',
                        difficulty: 'Beginner',
                        duration: '6 minutes',
                        steps: [
                            { action: 'Percent of number', key: '25 % × 80 =', description: 'Calculate 25% of 80: enter 25, press %, press ×, enter 80, press =' },
                            { action: 'Percent increase', key: '120 - 100 = ÷ 100 × 100', description: 'Find percent change from 100 to 120' },
                            { action: 'Convert decimal to %', key: '0.15 × 100', description: 'Convert 0.15 to 15%' }
                        ]
                    },
                    {
                        id: 'exponents-roots',
                        title: 'Exponents and Square Roots',
                        difficulty: 'Intermediate',
                        duration: '10 minutes',
                        steps: [
                            { action: 'Square a number', key: '5 x² =', description: 'Calculate 5² = 25 using the x² key' },
                            { action: 'Higher powers', key: '2 ^ 5 =', description: 'Calculate 2⁵ = 32 using the ^ key' },
                            { action: 'Square root', key: '√ 16 =', description: 'Calculate √16 = 4 using the √ key' },
                            { action: 'Cube root', key: '3 √ 27 =', description: 'Calculate ∛27 = 3 using the nth root function' }
                        ]
                    },
                    {
                        id: 'scientific-notation',
                        title: 'Scientific Notation',
                        difficulty: 'Intermediate',
                        duration: '7 minutes',
                        steps: [
                            { action: 'Enter scientific notation', key: '1.5 EE 6', description: 'Enter 1.5 × 10⁶ using the EE key' },
                            { action: 'Multiply in sci notation', key: '2 EE 3 × 3 EE 4 =', description: 'Multiply (2×10³) × (3×10⁴)' },
                            { action: 'Convert to standard', key: 'Mode → Normal', description: 'Switch display mode to see standard notation' }
                        ]
                    }
                ]
            },
            'ti-84': {
                name: 'TI-84 Plus CE',
                description: 'Advanced graphing calculator for high school math',
                image: '📊',
                isGEDApproved: false,
                tutorials: [
                    {
                        id: 'graphing-basics',
                        title: 'Basic Graphing',
                        difficulty: 'Intermediate',
                        duration: '12 minutes',
                        steps: [
                            { action: 'Enter equation', key: 'Y= button', description: 'Press Y= and enter y = 2x + 3' },
                            { action: 'Graph equation', key: 'GRAPH', description: 'Press GRAPH to display the line' },
                            { action: 'Adjust window', key: 'WINDOW', description: 'Set Xmin=-10, Xmax=10, Ymin=-10, Ymax=10' },
                            { action: 'Trace function', key: 'TRACE', description: 'Use TRACE to move along the line and see coordinates' }
                        ]
                    },
                    {
                        id: 'solving-equations',
                        title: 'Solving Equations',
                        difficulty: 'Advanced',
                        duration: '15 minutes',
                        steps: [
                            { action: 'Enter quadratic', key: 'Y1 = x² - 4x + 3', description: 'Graph the quadratic function' },
                            { action: 'Find zeros', key: '2nd TRACE → Zero', description: 'Use the zero function to find x-intercepts' },
                            { action: 'Find minimum', key: '2nd TRACE → Minimum', description: 'Find the vertex of the parabola' },
                            { action: 'Table of values', key: '2nd GRAPH', description: 'View table to see x and y values' }
                        ]
                    }
                ]
            }
        };

        this.gedSpecificTutorials = [
            {
                title: 'GED Test Day Calculator Setup',
                steps: [
                    'Familiarize yourself with the TI-30XS before test day',
                    'Practice basic operations without looking at keys',
                    'Know how to clear the calculator (ON, then AC)',
                    'Practice fraction and percentage calculations',
                    'Learn to switch between fraction and decimal modes'
                ]
            },
            {
                title: 'Time-Saving Calculator Tips for GED',
                steps: [
                    'Use the ANS key to continue calculations with previous result',
                    'Store frequently used numbers in memory (STO and RCL)',
                    'Use parentheses for complex order of operations',
                    'Practice mental math for simple calculations to save time',
                    'Double-check calculator entries before pressing equals'
                ]
            }
        ];

        this.commonMistakes = [
            {
                mistake: 'Forgetting order of operations',
                solution: 'Always use parentheses to group operations: (2 + 3) × 4',
                example: 'Wrong: 2 + 3 × 4 = 20, Correct: (2 + 3) × 4 = 20'
            },
            {
                mistake: 'Mixing up fraction entry',
                solution: 'Use n/d key for fractions, U n/d for mixed numbers',
                example: 'For 2 1/3: press 2, U n/d, 1, n/d, 3'
            },
            {
                mistake: 'Not clearing previous calculations',
                solution: 'Always press AC (All Clear) before starting new problems',
                example: 'Press ON, then AC to completely clear the calculator'
            },
            {
                mistake: 'Incorrect scientific notation entry',
                solution: 'Use EE key, not × 10^',
                example: 'For 1.5 × 10⁶: press 1.5, EE, 6'
            }
        ];
    }

    getCalculatorModel(modelId) {
        return this.calculatorModels[modelId];
    }

    getAllCalculators() {
        return Object.keys(this.calculatorModels).map(key => ({
            id: key,
            ...this.calculatorModels[key]
        }));
    }

    getTutorial(modelId, tutorialId) {
        const calculator = this.calculatorModels[modelId];
        if (!calculator) return null;
        return calculator.tutorials.find(tutorial => tutorial.id === tutorialId);
    }

    getGEDTutorials() {
        return this.gedSpecificTutorials;
    }

    getCommonMistakes() {
        return this.commonMistakes;
    }

    generatePracticeSequence(modelId, difficulty = 'all') {
        const calculator = this.calculatorModels[modelId];
        if (!calculator) return [];

        let tutorials = calculator.tutorials;
        if (difficulty !== 'all') {
            tutorials = tutorials.filter(t => t.difficulty.toLowerCase() === difficulty.toLowerCase());
        }

        return tutorials.map(tutorial => ({
            id: tutorial.id,
            title: tutorial.title,
            estimatedTime: tutorial.duration,
            stepCount: tutorial.steps.length
        }));
    }

    getCalculatorComparison() {
        return {
            gedRecommended: 'ti-30xs',
            highSchoolRecommended: 'ti-84',
            features: {
                'ti-30xs': ['Basic arithmetic', 'Fractions', 'Percentages', 'Scientific notation', 'Statistics'],
                'ti-84': ['All TI-30XS features', 'Graphing', 'Programming', 'Matrix operations', 'Calculus functions']
            }
        };
    }
}

// Integration with main app
if (typeof window !== 'undefined') {
    window.TIEducationTutorials = TIEducationTutorials;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = TIEducationTutorials;
}
