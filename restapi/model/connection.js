import pg from 'pg';

const environment = process.env.NODE_ENV;
const connectionString = process.env.DATABASE_URL;
const pfConfig = { connectionString };

if (environment === 'prod') {
    pfconfig.ssl = { rejectUnauthorized: false };
}

const pool = new pg.Pool(pfConfig);

export default pool;
