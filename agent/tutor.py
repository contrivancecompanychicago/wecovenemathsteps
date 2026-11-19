"""A deterministic tutoring layer for mathsteps solver output.

This module does not evaluate arbitrary user input. It offers tutoring prompts
based on solver-provided transformation metadata, with conservative fallbacks.
"""

from typing import Any

MAX_EXPRESSION_LENGTH = 500
MAX_STEPS = 50
VALID_MODES = {"hint", "explain", "solve"}

_CHANGE_HINTS = {
    "ADD_POLYNOMIAL_TERMS": "Look for terms with the same variable and exponent, then combine their coefficients.",
    "MULTIPLY_POLYNOMIAL_TERMS": "Multiply the coefficients, then use exponent rules for matching variables.",
    "DISTRIBUTE": "Multiply the factor outside the parentheses by each term inside.",
    "SIMPLIFY_LEFT_SIDE": "Work on the left side first. Combine or simplify its terms without changing the right side.",
    "SIMPLIFY_RIGHT_SIDE": "Work on the right side first. Combine or simplify its terms without changing the left side.",
    "SUBTRACT_FROM_BOTH_SIDES": "What can you subtract from both sides to move a term closer to the variable?",
    "ADD_TO_BOTH_SIDES": "What can you add to both sides to isolate the variable while preserving equality?",
    "DIVIDE_BOTH_SIDES": "Once the variable has a coefficient, divide both sides by that same non-zero coefficient.",
    "MULTIPLY_BOTH_SIDES": "Apply the same multiplication to both sides so the equation stays balanced.",
    "FACTOR_QUADRATIC": "Find two factors whose product matches the constant term and whose sum matches the middle coefficient.",
    "COLLECT_LIKE_TERMS": "Group terms that have the same variable part, then combine their coefficients.",
    "REMOVE_PARENTHESES": "Check whether the parentheses are needed; if there is a factor outside, distribute it first.",
}

_CHANGE_EXPLANATIONS = {
    "ADD_POLYNOMIAL_TERMS": "Terms with matching variables and exponents can be combined by adding their coefficients.",
    "MULTIPLY_POLYNOMIAL_TERMS": "Multiply the numerical coefficients and apply exponent rules to the variable factors.",
    "DISTRIBUTE": "The distributive property multiplies the outside factor by every term inside the parentheses.",
    "SIMPLIFY_LEFT_SIDE": "The left side was simplified while the equation's right side was left unchanged.",
    "SIMPLIFY_RIGHT_SIDE": "The right side was simplified while the equation's left side was left unchanged.",
    "SUBTRACT_FROM_BOTH_SIDES": "Subtracting the same quantity from both sides preserves equality and helps isolate the variable.",
    "ADD_TO_BOTH_SIDES": "Adding the same quantity to both sides preserves equality and helps isolate the variable.",
    "DIVIDE_BOTH_SIDES": "Dividing both sides by the same non-zero quantity preserves equality and can isolate the variable.",
    "MULTIPLY_BOTH_SIDES": "Multiplying both sides by the same quantity preserves equality.",
    "FACTOR_QUADRATIC": "Factoring rewrites a quadratic as a product of simpler expressions.",
    "COLLECT_LIKE_TERMS": "Like terms have the same variable factors and exponents, so their coefficients can be combined.",
    "REMOVE_PARENTHESES": "Parentheses were removed after applying the appropriate algebraic rules.",
}


def _get_step(steps: list[dict[str, Any]], index: int) -> dict[str, str] | None:
    if index < 0 or index >= len(steps):
        return None
    step = steps[index]
    return {
        "changeType": str(step.get("changeType", ""))[:80],
        "newExpression": str(step.get("newExpression", ""))[:MAX_EXPRESSION_LENGTH],
        "explanation": str(step.get("explanation", ""))[:500],
    }


def respond(*, expression: str, mode: str = "hint", steps: list[dict[str, Any]] | None = None,
            step_index: int = 0, message: str = "") -> dict[str, Any]:
    """Return a tutoring response; solver transformations are supplied by caller."""
    expression = expression.strip()
    steps = steps or []
    if mode not in VALID_MODES:
        raise ValueError("mode must be one of: hint, explain, solve")
    if not expression:
        raise ValueError("expression is required")
    if len(expression) > MAX_EXPRESSION_LENGTH:
        raise ValueError(f"expression must be at most {MAX_EXPRESSION_LENGTH} characters")
    if len(steps) > MAX_STEPS:
        raise ValueError(f"steps must contain at most {MAX_STEPS} items")

    step = _get_step(steps, step_index)
    if mode == "solve":
        if not steps:
            return {"agent": "We Convene MathSteps Agent", "mode": mode,
                    "expression": expression,
                    "response": "I can walk through a solution when the math solver provides its steps. Try the existing step-by-step solver for this expression.",
                    "steps": []}
        return {"agent": "We Convene MathSteps Agent", "mode": mode,
                "expression": expression,
                "response": "Here are the solver's steps. Check that each transformation preserves the original equation or expression.",
                "steps": steps}

    if mode == "explain":
        if step:
            explanation = step["explanation"] or _CHANGE_EXPLANATIONS.get(step["changeType"], "This step applies an algebraic transformation.")
            return {"agent": "We Convene MathSteps Agent", "mode": mode,
                    "expression": expression, "step": step_index + 1,
                    "response": explanation, "result": step["newExpression"]}
        return {"agent": "We Convene MathSteps Agent", "mode": mode,
                "expression": expression,
                "response": "I don't have a solver step to explain yet. Use the step-by-step solver first, then ask me to explain a step."}

    # Hint mode deliberately does not include the step's resulting expression.
    if step:
        hint = _CHANGE_HINTS.get(step["changeType"], "Try one small algebraic transformation, and check that it keeps the equation balanced.")
        return {"agent": "We Convene MathSteps Agent", "mode": mode,
                "expression": expression, "step": step_index + 1,
                "response": hint, "nextStepHidden": True}

    lower = expression.lower()
    if "=" in expression:
        hint = "Keep both sides balanced. First simplify each side, then use inverse operations to isolate the variable."
    elif "(" in expression and ")" in expression:
        hint = "Look for parentheses. If a factor is outside them, apply the distributive property before combining like terms."
    elif "^" in expression:
        hint = "Check whether exponent rules or factoring can simplify the expression. Keep track of which terms have matching powers."
    elif any(variable in lower for variable in ("x", "y", "z")):
        hint = "Group like terms (same variable and exponent), then combine their coefficients."
    else:
        hint = "Use order of operations: parentheses, exponents, multiplication/division, then addition/subtraction."
    return {"agent": "We Convene MathSteps Agent", "mode": mode,
            "expression": expression, "response": hint,
            "nextStepHidden": True, "messageReceived": bool(message.strip())}
