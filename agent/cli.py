"""Command-line launcher for the We Convene MathSteps Agent."""

from agent.main import app


def main() -> None:
    """Serve the agent on its local development address."""
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000)
