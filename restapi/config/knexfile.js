export default {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: true,
    migrations: {
        directory: '../model/migrations',
    },
    seeds: {
        directory: '../model/seeds',
    },
};
