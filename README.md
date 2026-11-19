# We Convene Math Tutor

A comprehensive mathematics tutoring platform aligned with Chicago Public Schools (CPS) curriculum standards for grades 6-12, featuring specialized support for college placement and adult education.

## Key Features

- **Step-by-Step Math Solver:** Powered by `mathsteps`, providing detailed breakdowns of algebraic equations and simplifications.
- **CPS Aligned Curriculum:** Specialized content for Grades 6 through 12.
- **We Convene Math Resource Center:** Calculator tutorials, study materials, formula references, video lessons, worksheets, and study strategies.
- **Northwestern University CTD Math Help:** Middle school math enrichment resources.
- **Cook County GED Prep** and **UIC Math Placement Prep**.
- **Python for Mathematics:** Introductory mathematical programming material.
- **We Convene MathSteps Agent:** A separate, deterministic Python service for hints and explanations based on existing mathsteps transformations.

## Technology

- Node.js and Express serve the website, solver API, and student progress endpoints.
- PostgreSQL stores student profiles and progress when `DATABASE_URL` is configured.
- Python and FastAPI power the tutoring agent service. The Python service is independent of the existing Express app.

## Run the existing website

```bash
npm install
node server.js
```

The website is available at `http://localhost:5000`.

## Run the Python agent

Requires Python 3.10+.

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
pip install -r requirements-agent.txt
uvicorn agent.main:app --reload --host 127.0.0.1 --port 8000
```

See [AGENT.md](AGENT.md) for API examples and tests. The API docs are at `http://127.0.0.1:8000/docs` while the service is running.

## About We Convene

We Convene at School and Home Tutoring Services of Chicago provides personalized mathematics support tailored to Chicago students' needs, from middle school through college preparation.
