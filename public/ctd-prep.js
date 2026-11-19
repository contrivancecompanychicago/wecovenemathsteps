
class CTDMathHelp {
    constructor() {
        this.programInfo = {
            'online-courses': {
                title: 'CTD Online Middle School Math Courses',
                format: 'Live Online Instruction',
                description: 'Interactive online courses with expert instructors for middle school students',
                courses: [
                    {
                        name: 'Pre-Algebra Foundations',
                        grade: 'Grades 6-7',
                        description: 'Build strong foundations in algebraic thinking',
                        topics: [
                            'Variables and expressions',
                            'Order of operations',
                            'Integers and rational numbers',
                            'One-step and two-step equations',
                            'Ratios and proportions',
                            'Percentages and applications'
                        ],
                        duration: '12 weeks',
                        format: 'Live online sessions + independent practice'
                    },
                    {
                        name: 'Algebra I Accelerated',
                        grade: 'Grades 7-8',
                        description: 'Advanced algebra for high-achieving students',
                        topics: [
                            'Linear equations and inequalities',
                            'Systems of equations',
                            'Quadratic functions and factoring',
                            'Exponential functions',
                            'Polynomials and rational expressions',
                            'Data analysis and statistics'
                        ],
                        duration: '14 weeks',
                        format: 'Live online sessions + problem sets'
                    },
                    {
                        name: 'Geometry Explorations',
                        grade: 'Grades 7-8',
                        description: 'Develop geometric reasoning and proof skills',
                        topics: [
                            'Lines, angles, and triangles',
                            'Congruence and similarity',
                            'Coordinate geometry',
                            'Pythagorean theorem applications',
                            'Area and volume calculations',
                            'Introduction to geometric proofs'
                        ],
                        duration: '12 weeks',
                        format: 'Live online sessions + geometry software'
                    },
                    {
                        name: 'Problem Solving & Critical Thinking',
                        grade: 'Grades 6-8',
                        description: 'Advanced mathematical problem-solving strategies',
                        topics: [
                            'Mathematical reasoning',
                            'Pattern recognition',
                            'Logic puzzles and challenges',
                            'Competition math strategies',
                            'Creative problem-solving techniques',
                            'Mathematical communication'
                        ],
                        duration: '10 weeks',
                        format: 'Interactive online workshops'
                    }
                ]
            },
            'in-person-courses': {
                title: 'CTD In-Person Middle School Math Programs',
                format: 'On-Campus at Northwestern University',
                location: 'Evanston, IL Campus',
                description: 'Intensive in-person courses on Northwestern\'s campus',
                programs: [
                    {
                        name: 'Summer Math Intensive',
                        grade: 'Grades 6-8',
                        description: 'Three-week intensive summer program',
                        features: [
                            'Daily 3-hour math sessions',
                            'Small class sizes (12-15 students)',
                            'Northwestern campus experience',
                            'Hands-on problem solving',
                            'Peer collaboration',
                            'College preparatory focus'
                        ],
                        duration: '3 weeks',
                        schedule: 'Monday-Friday, 9:00 AM - 12:00 PM'
                    },
                    {
                        name: 'Saturday Enrichment Program',
                        grade: 'Grades 6-8',
                        description: 'Weekend math enrichment during the school year',
                        features: [
                            'Saturday morning sessions',
                            'Advanced topics beyond school curriculum',
                            'Math competitions preparation',
                            'Interactive group activities',
                            'Northwestern faculty instruction',
                            'Problem-solving workshops'
                        ],
                        duration: '10 weeks (Fall or Spring)',
                        schedule: 'Saturdays, 9:00 AM - 12:00 PM'
                    },
                    {
                        name: 'Math Olympiad Training',
                        grade: 'Grades 7-8',
                        description: 'Preparation for national math competitions',
                        features: [
                            'MATHCOUNTS preparation',
                            'AMC 8 competition strategies',
                            'Advanced problem-solving techniques',
                            'Mock competitions',
                            'Individual coaching',
                            'Team-based challenges'
                        ],
                        duration: '8 weeks',
                        schedule: 'Flexible weekend sessions'
                    }
                ]
            },
            'support-resources': {
                title: 'CTD Math Support Resources',
                description: 'Additional help and resources for enrolled students',
                resources: [
                    {
                        name: 'Online Tutoring Sessions',
                        description: 'One-on-one or small group tutoring',
                        availability: 'Evenings and weekends',
                        features: ['Personalized instruction', 'Homework help', 'Test preparation', 'Flexible scheduling']
                    },
                    {
                        name: 'Math Resource Library',
                        description: 'Digital resources and practice materials',
                        includes: ['Video tutorials', 'Practice problem sets', 'Solution guides', 'Interactive simulations']
                    },
                    {
                        name: 'Parent Information Sessions',
                        description: 'Supporting your child\'s math education',
                        topics: ['Understanding CTD curriculum', 'Supporting learning at home', 'College preparation pathway', 'Gifted education strategies']
                    },
                    {
                        name: 'Student Math Community',
                        description: 'Connect with other mathematically talented students',
                        features: ['Online discussion forums', 'Math club activities', 'Peer study groups', 'Alumni network']
                    }
                ]
            }
        };

        this.sampleProblems = {
            'grade-6-7': [
                {
                    problem: 'Solve for x: 2x + 7 = 19',
                    solution: 'x = 6',
                    explanation: 'Subtract 7 from both sides: 2x = 12, then divide by 2: x = 6',
                    level: 'Pre-Algebra'
                },
                {
                    problem: 'If 3/5 of a number is 24, what is the number?',
                    solution: '40',
                    explanation: 'Let n be the number. (3/5)n = 24, so n = 24 ÷ (3/5) = 24 × (5/3) = 40',
                    level: 'Ratios & Proportions'
                },
                {
                    problem: 'Simplify: 3(x + 4) - 2(x - 1)',
                    solution: 'x + 14',
                    explanation: 'Distribute: 3x + 12 - 2x + 2, combine like terms: x + 14',
                    level: 'Algebraic Expressions'
                }
            ],
            'grade-7-8': [
                {
                    problem: 'Solve the system: x + y = 10, x - y = 4',
                    solution: 'x = 7, y = 3',
                    explanation: 'Add equations: 2x = 14, so x = 7. Substitute: 7 + y = 10, so y = 3',
                    level: 'Systems of Equations'
                },
                {
                    problem: 'Factor: x² + 7x + 12',
                    solution: '(x + 3)(x + 4)',
                    explanation: 'Find two numbers that multiply to 12 and add to 7: 3 and 4',
                    level: 'Quadratic Factoring'
                },
                {
                    problem: 'Find the slope of the line through (2, 5) and (6, 13)',
                    solution: 'm = 2',
                    explanation: 'Slope = (y₂ - y₁)/(x₂ - x₁) = (13 - 5)/(6 - 2) = 8/4 = 2',
                    level: 'Coordinate Geometry'
                }
            ],
            'competition': [
                {
                    problem: 'How many different positive integers can be represented as the difference of two distinct members of the set {1, 2, 3, 4, 5, 6}?',
                    solution: '5',
                    explanation: 'Possible differences: 1, 2, 3, 4, 5. (Example: 6-5=1, 6-4=2, etc.)',
                    level: 'MATHCOUNTS'
                },
                {
                    problem: 'The sum of two numbers is 50 and their product is 600. What is the positive difference between the two numbers?',
                    solution: '10',
                    explanation: 'Numbers are 20 and 30 (solve x² - 50x + 600 = 0), difference = 30 - 20 = 10',
                    level: 'Problem Solving'
                }
            ]
        };

        this.enrollmentInfo = {
            contactInfo: {
                phone: '(847) 491-3782',
                email: 'ctd@northwestern.edu',
                website: 'www.ctd.northwestern.edu',
                office: 'Center for Talent Development, 617 Dartmouth Place, Evanston, IL 60208'
            },
            admissionRequirements: [
                'Above-grade-level standardized test scores',
                'Teacher recommendations',
                'Academic transcripts',
                'Talent search qualification (for some programs)',
                'Completed application form',
                'Application fee'
            ],
            financialAid: {
                available: true,
                types: ['Need-based scholarships', 'Merit scholarships', 'Payment plans'],
                application: 'Submit financial aid form with enrollment application'
            }
        };
    }

    getPrograms(type) {
        return this.programInfo[type];
    }

    getAllPrograms() {
        return Object.keys(this.programInfo).map(key => ({
            id: key,
            ...this.programInfo[key]
        }));
    }

    getSampleProblems(category) {
        return this.sampleProblems[category] || [];
    }

    getAllSampleProblems() {
        return this.sampleProblems;
    }

    getEnrollmentInfo() {
        return this.enrollmentInfo;
    }

    getRandomProblem(level) {
        const problems = this.sampleProblems[level];
        if (!problems || problems.length === 0) return null;
        return problems[Math.floor(Math.random() * problems.length)];
    }
}

if (typeof window !== 'undefined') {
    window.CTDMathHelp = CTDMathHelp;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CTDMathHelp;
}
