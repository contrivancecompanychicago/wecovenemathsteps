# We Convene Math Tutor

A comprehensive mathematics tutoring platform aligned with Chicago Public Schools (CPS) curriculum standards for grades 6-12, featuring specialized support for college placement and adult education.

## 🚀 Key Features

- **Step-by-Step Math Solver:** Powered by `mathsteps`, providing detailed breakdowns of algebraic equations and simplifications.
- **CPS Aligned Curriculum:** Specialized content for Grades 6 through 12.
- **We Convene Math Resource Center:** A centralized hub for:
  - **Texas Instruments Calculator Tutorials:** Comprehensive guides for TI-30XS MultiView™ (GED Approved) and TI-84 Plus CE.
  - **Study Materials:** Formula reference sheets, video tutorial library, practice worksheets, and study strategies.
- **Northwestern University CTD Math Help:** Specialized middle school math courses and enrichment programs (both online and in-person) from the Center for Talent Development.
- **Cook County GED Prep:** Dedicated modules for GED Mathematics test preparation.
- **UIC Math Placement Prep:** Specialized resources for students preparing for the ALEKS PPL assessment and UIC mathematics courses.
- **Python for Mathematics:** "Everybody Can Code Python" section focusing on mathematical programming and computational thinking.

## 🛠️ Integrated Tools & Services

- **Interactive Support:**
  - **WeConveneMathChat:** An AI-powered assistant (Dialogflow) for immediate math support.
  - **Google Calendar Scheduling:** Direct booking for personalized tutoring sessions with We Convene staff.
- **Core Technology:**
  - **Node.js Express Backend:** Serves the interactive web application.
  - **Mathsteps Library:** Handles complex mathematical symbolic computation.

## 📂 Project Structure

- `server.js`: Express server configuration.
- `public/`:
  - `index.html`: Main landing page and UI structure.
  - `app.js`: Core application logic and CPS standards data.
  - `styles.css`: Custom responsive styling with specialized themes (CTD, Resource Center, etc.).
  - `ctd-prep.js`: Northwestern CTD program logic.
  - `ged-prep.js`: GED preparation materials.
  - `ti-education.js`: Calculator tutorial data.
  - `uic-prep.js`: UIC placement preparation resources.
  - `lib/`: Local dependency storage (e.g., `mathsteps.js`).

## 💻 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Server:**
   ```bash
   node server.js
   ```
   The application will be available at `http://localhost:5000`.

## 🏛️ About We Convene
We Convene at School and Home Tutoring Services of Chicago provides personalized mathematics support tailored to Chicago students' needs, from middle school through college preparation.
