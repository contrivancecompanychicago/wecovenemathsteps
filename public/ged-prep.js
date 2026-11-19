
// Cook County GED Math Test Preparation Module
class GEDMathPrep {
    constructor() {
        this.testAreas = {
            'number-operations': {
                title: 'Number Sense & Operations',
                weight: '20-30%',
                description: 'Basic arithmetic, fractions, decimals, percentages, and number theory',
                topics: [
                    'Order of operations',
                    'Fractions and mixed numbers',
                    'Decimals and percentages',
                    'Ratios and proportions',
                    'Exponents and scientific notation',
                    'Square roots and cube roots'
                ],
                sampleProblems: [
                    {
                        problem: 'Calculate 25% of 80',
                        solution: '20',
                        explanation: '25% = 0.25, so 0.25 × 80 = 20'
                    },
                    {
                        problem: 'Simplify: 3/4 + 2/3',
                        solution: '17/12',
                        explanation: 'Find common denominator: 9/12 + 8/12 = 17/12'
                    }
                ]
            },
            'algebra-functions': {
                title: 'Algebra & Functions',
                weight: '45-55%',
                description: 'Linear equations, quadratics, polynomials, and functions',
                topics: [
                    'Solving linear equations',
                    'Graphing linear functions',
                    'Systems of equations',
                    'Quadratic equations',
                    'Polynomials',
                    'Rational expressions',
                    'Exponential functions'
                ],
                sampleProblems: [
                    {
                        problem: 'Solve: 2x + 5 = 13',
                        solution: 'x = 4',
                        explanation: 'Subtract 5: 2x = 8, then divide by 2: x = 4'
                    },
                    {
                        problem: 'Factor: x² - 9',
                        solution: '(x + 3)(x - 3)',
                        explanation: 'This is a difference of squares: a² - b² = (a + b)(a - b)'
                    }
                ]
            },
            'geometry-measurement': {
                title: 'Geometry & Measurement',
                weight: '15-25%',
                description: 'Perimeter, area, volume, coordinate geometry, and trigonometry',
                topics: [
                    'Perimeter and area',
                    'Volume and surface area',
                    'Coordinate geometry',
                    'Pythagorean theorem',
                    'Similar triangles',
                    'Basic trigonometry'
                ],
                sampleProblems: [
                    {
                        problem: 'Find the area of a rectangle with length 8 and width 5',
                        solution: '40 square units',
                        explanation: 'Area = length × width = 8 × 5 = 40'
                    },
                    {
                        problem: 'Use Pythagorean theorem: a = 3, b = 4, find c',
                        solution: 'c = 5',
                        explanation: 'c² = a² + b² = 9 + 16 = 25, so c = 5'
                    }
                ]
            },
            'data-statistics': {
                title: 'Data Analysis & Statistics',
                weight: '8-12%',
                description: 'Interpreting graphs, probability, and statistical measures',
                topics: [
                    'Reading graphs and charts',
                    'Mean, median, mode',
                    'Basic probability',
                    'Data interpretation',
                    'Scatter plots',
                    'Correlation'
                ],
                sampleProblems: [
                    {
                        problem: 'Find the mean of: 12, 15, 18, 21, 24',
                        solution: '18',
                        explanation: 'Sum = 90, count = 5, mean = 90/5 = 18'
                    },
                    {
                        problem: 'What is the probability of rolling a 3 on a six-sided die?',
                        solution: '1/6',
                        explanation: 'One favorable outcome out of six possible outcomes'
                    }
                ]
            }
        };

        this.practiceTests = [
            {
                name: 'GED Math Practice Test 1',
                timeLimit: 115,
                totalQuestions: 46,
                questions: [
                    'Solve: 3x - 7 = 14',
                    'Find 30% of 150',
                    'Calculate the area of a circle with radius 5',
                    'Solve the system: x + y = 10, x - y = 2'
                ]
            }
        ];

        this.testTakingStrategies = [
            'Read questions carefully and identify what is being asked',
            'Use the calculator efficiently - practice with TI-30XS',
            'Draw diagrams for geometry problems',
            'Check your work when time permits',
            'Eliminate obviously wrong answers on multiple choice',
            'Show your work on fill-in-the-blank questions',
            'Manage your time - about 2.5 minutes per question'
        ];
    }

    getTestArea(area) {
        return this.testAreas[area];
    }

    getAllTestAreas() {
        return Object.keys(this.testAreas).map(key => ({
            id: key,
            ...this.testAreas[key]
        }));
    }

    generatePracticeProblem(area) {
        const areaData = this.testAreas[area];
        if (!areaData || !areaData.sampleProblems) return null;
        
        const randomProblem = areaData.sampleProblems[
            Math.floor(Math.random() * areaData.sampleProblems.length)
        ];
        return randomProblem;
    }

    getTestTakingStrategies() {
        return this.testTakingStrategies;
    }

    getCookCountyInfo() {
        return {
            testingSites: [
                'Chicago City Colleges',
                'Local libraries with testing centers',
                'Community organizations'
            ],
            registrationInfo: 'Register online at ged.com or call 1-877-EXAM-GED',
            cost: '$120 for all four tests ($30 per subject)',
            retakePolicy: 'Wait 60 days between retakes for same subject',
            accommodations: 'Available for students with documented disabilities'
        };
    }
}

// Integration with main app
if (typeof window !== 'undefined') {
    window.GEDMathPrep = GEDMathPrep;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = GEDMathPrep;
}
