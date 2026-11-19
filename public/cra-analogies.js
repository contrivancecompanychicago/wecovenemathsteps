
const CRAAnalogies = {
    problemTypes: {
        linearEquation: {
            title: "Balance Scale",
            analogy: "Think of a balance scale where '=' is the pivot point. You have an unknown number of coins in a bag on the left side. Your goal is to find out how many coins are in the bag — but you must keep the scale perfectly balanced at every step. Whatever you do to one side, you must do to the other.",
            visual: "⚖️   [bags + loose coins]   =   [coins on right]"
        },
        quadraticEquation: {
            title: "Area Model",
            analogy: "Imagine a rectangle whose area you already know. A quadratic equation is like finding the length and width of that rectangle. When we factor x² − 5x + 6 = 0, we are asking: 'What two side lengths multiply to give this area and add to give the perimeter clue?'",
            visual: "📐  (x − 2)(x − 3)  =  0  →  length or width is zero"
        },
        quadraticExpression: {
            title: "Rectangle Dimensions",
            analogy: "Picture a rectangle made of tiles on a grid. A quadratic expression like x² + 5x + 6 describes the total number of tiles. Factoring means finding the rectangle's length and width — the two binomials that multiply to create that exact tile pattern.",
            visual: "📐  x² + 5x + 6  →  (x + 2) wide × (x + 3) tall"
        },
        distribution: {
            title: "Equal Gift Bags",
            analogy: "Imagine a teacher preparing gift bags for students. Each bag gets the same contents: some pencils and some erasers. The number outside the parenthesis is the number of bags. Distributing means opening every bag and counting items individually instead of by the bag.",
            visual: "🎁  3 × (x pencils + 4 erasers)  =  3x pencils + 12 erasers"
        },
        likeTerms: {
            title: "Sorting Coins by Type",
            analogy: "Imagine dumping a coin jar on a table: nickels, dimes, and quarters all mixed together. 'Like terms' are coins of the same denomination — you can only add nickels to nickels. The variable tells you the denomination. 3x and 2x are both 'x-coins' so you can combine them into 5x.",
            visual: "🪙  3x-coins + 2x-coins  →  5x-coins  (you can't mix x-coins with number-coins)"
        },
        polynomial: {
            title: "Lego Building Blocks",
            analogy: "Think of each term as a different size of Lego brick: x³ bricks, x² bricks, x bricks, and single-unit bricks. When you simplify a polynomial, you are organizing the pile by brick size — tallest to smallest — so the structure is easy to read and count.",
            visual: "🧱  x³ + 2x² + 3x + 4  (sorted largest → smallest power)"
        },
        general: {
            title: "Unwrapping Nested Packages",
            analogy: "Picture a gift wrapped inside multiple boxes, one inside another. Each step 'unwraps' one outer layer using the inverse operation. You always start with the outermost layer and work inward until the value inside is revealed.",
            visual: "📦 → open box → open box → 🎁 answer"
        }
    },

    changeTypes: {
        SUBTRACT_FROM_BOTH_SIDES: {
            cue: "Remove the same number of coins from BOTH pans of the scale — the balance holds because you treated both sides identically."
        },
        ADD_TO_BOTH_SIDES: {
            cue: "Add the same number of coins to BOTH pans of the scale. The balance holds because both sides gained the same weight."
        },
        DIVIDE_FROM_BOTH_SIDES: {
            cue: "Split both sides into equal groups — like dividing a pizza equally among friends. Every portion is the same size."
        },
        DIVIDE_BOTH_SIDES: {
            cue: "Divide both sides by the same number. Think of splitting the scale's coins into equal piles on each side."
        },
        MULTIPLY_BOTH_SIDES: {
            cue: "Multiply both sides by the same number — like doubling the coins on both pans simultaneously so the balance stays."
        },
        DISTRIBUTE: {
            cue: "Hand out the item outside the parentheses to EVERY term inside — like a teacher giving the same handout to each student in the group."
        },
        ADD_POLYNOMIAL_TERMS: {
            cue: "Combine matching coin types: x-coins with x-coins, constant coins with constant coins. Only same-type terms can be merged."
        },
        COLLECT_LIKE_TERMS: {
            cue: "Sort and group matching items before counting them — apples with apples, oranges with oranges."
        },
        SIMPLIFY_ARITHMETIC: {
            cue: "Just do the arithmetic — calculate what those numbers add up to, like checking the total on a receipt."
        },
        SIMPLIFY_FRACTION: {
            cue: "Reduce the fraction — cut the pizza into fewer, bigger slices that still represent the same amount."
        },
        SIMPLIFY_LEFT_SIDE: {
            cue: "Tidy up the left side of the scale before comparing. Clean up one side first, then check the balance."
        },
        SIMPLIFY_RIGHT_SIDE: {
            cue: "Tidy up the right side of the scale. Same idea — clean house first, then verify both sides still match."
        },
        MULTIPLY_POLYNOMIAL_TERMS: {
            cue: "Multiply term by term — like computing the area of a rectangle section by section (length × width for each piece)."
        },
        FACTOR_QUADRATIC: {
            cue: "Find two numbers whose product and sum fit the quadratic — like reverse-engineering a rectangle's dimensions when you only know its area and perimeter hint."
        },
        SIMPLIFY_EXPRESSION: {
            cue: "Apply the algebraic rule to make this expression cleaner and shorter."
        },
        REDUCE_EXPONENT: {
            cue: "Shrink the exponent using the rules of powers — like collapsing a stack of repeated multiplications."
        },
        CANCEL_TERMS: {
            cue: "Terms that appear on both sides cancel out — like removing the same weight from both pans of a balance scale."
        }
    },

    getAnalogy(expression, type, firstChangeType) {
        if (!expression) return this.problemTypes.general;
        const isEquation = type === 'equation' || (expression && expression.includes('='));
        const isQuadratic = expression.includes('^2') || expression.includes('x^2');
        const hasParens = expression.includes('(');
        if (isEquation && isQuadratic) return this.problemTypes.quadraticEquation;
        if (isEquation) return this.problemTypes.linearEquation;
        if (isQuadratic) return this.problemTypes.quadraticExpression;
        if (firstChangeType === 'DISTRIBUTE' || (hasParens && !isEquation)) return this.problemTypes.distribution;
        if (firstChangeType === 'ADD_POLYNOMIAL_TERMS' || firstChangeType === 'COLLECT_LIKE_TERMS') return this.problemTypes.likeTerms;
        if (expression.includes('^')) return this.problemTypes.polynomial;
        return this.problemTypes.likeTerms;
    },

    getStepCue(changeType) {
        const entry = this.changeTypes[changeType];
        return entry ? entry.cue : 'Apply the mathematical rule to transform this expression.';
    }
};

if (typeof module !== 'undefined') module.exports = CRAAnalogies;
