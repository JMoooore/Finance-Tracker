import pg from 'pg';

const connectionString = process.env.DATABASE_URL;
const pfConfig = { connectionString, ssl: { rejectUnauthorized: false } };

const pool = new pg.Pool(pfConfig);

export default pool;
