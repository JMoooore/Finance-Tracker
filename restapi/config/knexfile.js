export default {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
        directory: '../model/migrations',
    },
    seeds: {
        directory: '../model/seeds',
    },
};
