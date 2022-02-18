export default {
  client: "pg",
  connection: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
  },
  migrations: {
    directory: "../model/migrations",
  },
  seeds: {
    directory: "../model/seeds",
  },
};