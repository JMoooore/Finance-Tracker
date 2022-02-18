import connection from "./config/connection.js";

console.log(connection.object);

export default {
  client: "pg",
  connection: connection.object,
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
