import unittest

from agent.tutor import respond


class AgentTutorTests(unittest.TestCase):
    def test_hint_gives_coaching_without_revealing_solver_result(self):
        result = respond(
            expression="2x + 3 = 11",
            steps=[{"changeType": "SUBTRACT_FROM_BOTH_SIDES", "newExpression": "2x = 8"}],
        )
        self.assertIn("both sides", result["response"])
        self.assertTrue(result["nextStepHidden"])
        self.assertNotIn("2x = 8", result["response"])

    def test_explain_returns_requested_step(self):
        result = respond(
            expression="3(x + 2)", mode="explain",
            steps=[{"changeType": "DISTRIBUTE", "newExpression": "3x + 6"}],
        )
        self.assertIn("distributive property", result["response"])
        self.assertEqual("3x + 6", result["result"])

    def test_solve_without_engine_steps_does_not_invent_solution(self):
        result = respond(expression="x + 1 = 2", mode="solve")
        self.assertEqual([], result["steps"])
        self.assertIn("solver provides its steps", result["response"])

    def test_rejects_long_expression(self):
        with self.assertRaises(ValueError):
            respond(expression="x" * 501)


if __name__ == "__main__":
    unittest.main()
