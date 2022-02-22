import pg from 'pg';

const connectionString = process.env.DATABASE_URL;

const pool = new pg.Pool({
    connectionString,
});

export default pool;
