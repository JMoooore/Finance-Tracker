import pg from 'pg';

const connectionString = process.env.DATABASE_URL;
const pfConfig = { connectionString };

const pool = new pg.Pool(pfConfig);

export default pool;
