# We Convene MathSteps Agent

**Package:** `weconvene-mathsteps-agent`  
**Version:** `0.1.0`

A small Python tutoring API that works alongside the existing JavaScript/Express mathsteps application. The agent gives deterministic hints and explanations; it does not execute user input or pretend to solve an expression without solver-provided steps.

## Install from the repository

Requires Python 3.10+.

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
python -m pip install -U pip
python -m pip install -e "."
```

## Run

```bash
weconvene-mathsteps-agent
```

Or run the FastAPI module directly:

```bash
uvicorn agent.main:app --reload --host 127.0.0.1 --port 8000
```

Open `http://127.0.0.1:8000/docs` for interactive API documentation. The health endpoint is `GET /health`.

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

The API responds with a tutoring prompt, without including `2x = 8` in hint mode.

## Build the package

```bash
python -m pip install 'build>=1.2,<2.0'
python -m build
```

The build outputs version `0.1.0` source and wheel distributions under `dist/`.

## Tests

```bash
python -m unittest discover -s tests
```
