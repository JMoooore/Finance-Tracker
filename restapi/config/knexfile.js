export default {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?sslmode=require',
    migrations: {
        directory: '../model/migrations',
    },
    seeds: {
        directory: '../model/seeds',
    },
};
