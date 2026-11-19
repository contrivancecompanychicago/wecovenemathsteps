# We Convene MathSteps Agent

A comprehensive mathematics tutoring platform for Chicago-area students, with practice support aligned to common grades 6–12 topics and Cook County GED preparation needs.

> This repository is an educational prototype. Grade-band and GED descriptions are guides for practice, not an official CPS curriculum or GED testing endorsement. Verify instructional standards and test information against current official sources.

## Project Overview

The repository combines:

- A Node.js/Express math tutoring website.
- The existing `mathsteps` algebra engine.
- PostgreSQL student profiles and progress tracking.
- A Python FastAPI tutoring-agent package.
- A Google Colab practice notebook for grades 6–12 and GED-focused mathematics.

## MathSteps Agent Package

**Package name:** `weconvene-mathsteps-agent`  
**Version:** `0.1.0`

The Python package provides deterministic hints and explanations from mathsteps solver output. It currently supports:

- `hint` — coaching prompts that conceal the next solver result.
- `explain` — explanations for a supplied solver step.
- `solve` — presentation of supplied solver steps, without inventing solutions.

Requires Python 3.10 or newer.

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -e "."
weconvene-mathsteps-agent
```

The API is available at `http://127.0.0.1:8000`; interactive documentation is at `http://127.0.0.1:8000/docs`.

See [AGENT.md](AGENT.md) for API usage and [tests/test_agent.py](tests/test_agent.py) for package tests.

## Google Colab Practice Lab

The [`notebooks/We_Convene_MathSteps_Grades_6_12_GED.ipynb`](notebooks/We_Convene_MathSteps_Grades_6_12_GED.ipynb) notebook provides Python/SymPy practice across:

- Number operations and fractions.
- Ratios and proportions.
- Percentages and basic statistics.
- Linear equations and inequalities.
- Polynomial expansion and factoring.
- Quadratic equations.
- Systems of equations.
- Slope and coordinate geometry.
- Area and measurement.
- GED-style arithmetic and algebra foundations.

### Open in Colab

1. Open [Google Colab](https://colab.research.google.com/).
2. Choose **File → Open notebook → GitHub**.
3. Enter `contrivancecompanychicago/wecovenemathsteps`.
4. Select the notebook under `notebooks/`.
5. Run the cells from top to bottom.

The notebook safely parses only arithmetic expressions and `x`, `y`, and `z`; it does not execute arbitrary Python entered as an expression. It requires SymPy and is for temporary practice sessions rather than as an always-on service.

See [notebooks/README.md](notebooks/README.md) for setup details.

> Notebook contents require review and correction before classroom use. In particular, the proportion example `3/4 = x/12` must return `x = 9`; do not rely on the notebook’s preexisting example output until that calculation is verified.

## Existing Web Application

### Features

- Step-by-step algebra solving.
- CPS-oriented practice content for grades 6–12.
- GED mathematical reasoning practice material.
- UIC and ACT placement-preparation resources.
- TI-30XS and TI-84 calculator guidance.
- Python-for-math programming examples.
- Student profiles and optional progress tracking.

### Run the website

Requires Node.js and npm.

```bash
npm install
node server.js
```

The website is available at `http://localhost:5000`.

PostgreSQL persistence requires `DATABASE_URL`. The progress endpoints also require follow-on authentication work; numeric student IDs are not a security boundary.

```bash
npm run migrate
```

## Key Technology

- JavaScript and Express for the existing website and solver API.
- SymPy for Colab algebra and mathematics demonstrations.
- FastAPI and Uvicorn for the Python agent service.
- PostgreSQL through `pg` for optional student progress storage.

## Repository Structure

- `server.js` — Express server and web APIs.
- `public/` — website HTML, CSS, and browser JavaScript.
- `lib/` — mathsteps and database implementations.
- `agent/` — Python tutoring agent package.
- `tests/` — Python agent tests.
- `notebooks/` — Google Colab practice notebooks.
- `db/` — PostgreSQL migration scripts.

## Development and Testing

```bash
python -m unittest discover -s tests
npm test
npm run migrate
```

Run an agent health check with:

```bash
curl http://127.0.0.1:8000/health
```

## Privacy and Safety

Do not enter student names, student records, login credentials, or other personally identifying information into a shared Colab notebook or untrusted agent request. Use fictional practice data where possible. The agent should remain advisory and should not be presented as a substitute for a teacher or professional academic guidance.

## About We Convene

We Convene at School and Home Tutoring Services of Chicago provides mathematics support for Chicago students from middle school through GED, college placement, and college readiness preparation.
