# We Convene MathSteps Agent

A small Python tutoring API that works alongside the existing JavaScript/Express mathsteps application. The agent gives deterministic hints and explanations; it does not execute user input or pretend to solve an expression without solver-provided steps.

## Run the Python agent

Requires Python 3.10+.

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
pip install -r requirements-agent.txt
uvicorn agent.main:app --reload --host 127.0.0.1 --port 8000
```

Open `http://127.0.0.1:8000/docs` for the interactive API documentation. The health endpoint is `GET /health`.

## Agent API

`POST /api/agent` accepts one of three modes:

- `hint` (default): gives a coaching prompt and hides the next solver result.
- `explain`: explains a provided solver step and returns its resulting expression.
- `solve`: presents steps supplied by the existing math solver. If no steps are supplied, it does not fabricate a solution.

Example request:

```json
{
  "expression": "2x + 3 = 11",
  "mode": "hint",
  "steps": [
    {
      "changeType": "SUBTRACT_FROM_BOTH_SIDES",
      "newExpression": "2x = 8",
      "explanation": "Subtracted 3 from both sides."
    }
  ]
}
```

The API responds with a tutoring prompt, without including `2x = 8` in hint mode. The existing Express service remains unchanged and continues to serve the website and math solver; the Python service currently runs independently on port 8000. Integrating a frontend chat UI or proxying requests through Express can be a follow-up.

## Tests

```bash
python -m unittest discover -s tests
```
