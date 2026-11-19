/**
 * Database migration script for We Convene Math LMS
 * Run with: npm run migrate
 * Creates users and progress tables if they do not already exist.
 * DATABASE_URL is automatically provided by Replit's PostgreSQL integration.
 */

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL && process.env.DATABASE_URL.includes('localhost')
        ? false
        : { rejectUnauthorized: false }
});

async function migrate() {
    const client = await pool.connect();
    try {
        console.log('Running database migrations...');

        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id          SERIAL PRIMARY KEY,
                name        VARCHAR(255) NOT NULL,
                email       VARCHAR(255) UNIQUE,
                grade_level VARCHAR(50)  NOT NULL DEFAULT 'unknown',
                created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
                updated_at  TIMESTAMP NOT NULL DEFAULT NOW()
            );
        `);
        console.log('✓  users table ready');

        await client.query(`
            CREATE TABLE IF NOT EXISTS progress (
                id                SERIAL PRIMARY KEY,
                user_id           INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                topic             VARCHAR(100) NOT NULL,
                subtopic          VARCHAR(100) NOT NULL DEFAULT '',
                attempts          INTEGER NOT NULL DEFAULT 1,
                mastery_score     NUMERIC(5,2) NOT NULL DEFAULT 0,
                last_attempted_at TIMESTAMP NOT NULL DEFAULT NOW(),
                UNIQUE (user_id, topic, subtopic)
            );
        `);
        console.log('✓  progress table ready');

        await client.query(`
            CREATE INDEX IF NOT EXISTS idx_progress_user_id ON progress(user_id);
            CREATE INDEX IF NOT EXISTS idx_progress_topic   ON progress(topic);
        `);
        console.log('✓  indexes ready');

        console.log('Migrations complete.');
    } catch (err) {
        console.error('Migration failed:', err.message);
        process.exit(1);
    } finally {
        client.release();
        await pool.end();
    }
}

migrate();
