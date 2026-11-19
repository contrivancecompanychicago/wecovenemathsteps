
// UIC Mathematics Placement Test Preparation Module
class UICMathPrep {
    constructor() {
        this.testTopics = {
            'algebra-fundamentals': {
                title: 'Algebra Fundamentals',
                description: 'Essential algebra skills for UIC placement',
                problems: [
                    {
                        problem: 'Solve: 3x - 7 = 2x + 5',
                        solution: 'x = 12',
                        steps: [
                            'Subtract 2x from both sides: 3x - 2x - 7 = 5',
                            'Simplify: x - 7 = 5',
                            'Add 7 to both sides: x = 12'
                        ]
                    },
                    {
                        problem: 'Solve the system: 2x + y = 8, x - y = 1',
                        solution: 'x = 3, y = 2',
                        steps: [
                            'Add equations: (2x + y) + (x - y) = 8 + 1',
                            'Simplify: 3x = 9',
                            'Solve: x = 3',
                            'Substitute back: 2(3) + y = 8, so y = 2'
                        ]
                    }
                ]
            },
            'polynomial-operations': {
                title: 'Polynomial Operations',
                description: 'Factoring and polynomial manipulation',
                problems: [
                    {
                        problem: 'Factor: x^2 - 5x + 6',
                        solution: '(x - 2)(x - 3)',
                        steps: [
                            'Look for two numbers that multiply to 6 and add to -5',
                            'The numbers are -2 and -3',
                            'Factor: (x - 2)(x - 3)'
                        ]
                    }
                ]
            },
            'rational-functions': {
                title: 'Rational Functions',
                description: 'Working with rational expressions and equations',
                problems: [
                    {
                        problem: 'Simplify: (x^2 - 4)/(x^2 + 4x + 4)',
                        solution: '(x - 2)/(x + 2)',
                        steps: [
                            'Factor numerator: x^2 - 4 = (x - 2)(x + 2)',
                            'Factor denominator: x^2 + 4x + 4 = (x + 2)^2',
                            'Cancel common factor: (x - 2)(x + 2)/(x + 2)^2 = (x - 2)/(x + 2)'
                        ]
                    }
                ]
            }
        };
        
        this.practiceTests = [
            {
                name: 'UIC Placement Practice Test 1',
                timeLimit: 60,
                questions: [
                    'Solve: 2x + 5 = 3x - 7',
                    'Factor: x^2 - 8x + 15',
                    'Simplify: (3x^2 - 12x)/(x - 4)',
                    'Solve: log(x + 3) = 2'
                ]
            }
        ];
    }

    generatePracticeProblem(topic) {
        const topicData = this.testTopics[topic];
        if (!topicData) return null;
        
        const randomProblem = topicData.problems[Math.floor(Math.random() * topicData.problems.length)];
        return randomProblem;
    }

    getTopicOverview(topic) {
        return this.testTopics[topic];
    }

    getAllTopics() {
        return Object.keys(this.testTopics).map(key => ({
            id: key,
            ...this.testTopics[key]
        }));
    }
}

// Integration with main app
if (typeof window !== 'undefined') {
    window.UICMathPrep = UICMathPrep;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = UICMathPrep;
}
