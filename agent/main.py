"""FastAPI endpoint for the deterministic We Convene MathSteps Agent."""

from typing import Any, Literal

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

from agent.tutor import MAX_EXPRESSION_LENGTH, MAX_STEPS, respond

app = FastAPI(
    title="We Convene MathSteps Agent",
    description="A lightweight tutoring API that coaches learners using mathsteps output.",
    version="0.1.0",
)


class AgentRequest(BaseModel):
    expression: str = Field(min_length=1, max_length=MAX_EXPRESSION_LENGTH)
    mode: Literal["hint", "explain", "solve"] = "hint"
    message: str = Field(default="", max_length=1000)
    steps: list[dict[str, Any]] = Field(default_factory=list, max_length=MAX_STEPS)
    step_index: int = Field(default=0, ge=0, le=MAX_STEPS - 1)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "healthy", "service": "We Convene MathSteps Agent"}


@app.post("/api/agent")
def tutor(request: AgentRequest) -> dict[str, Any]:
    try:
        return respond(
            expression=request.expression,
            mode=request.mode,
            steps=request.steps,
            step_index=request.step_index,
            message=request.message,
        )
    except ValueError as error:
        raise HTTPException(status_code=400, detail=str(error)) from error
