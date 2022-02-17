import connection from "./config/connection.js";

export default {
  client: "pg",
  connection: connection.object ?? connection.string,
  migrations: {
    //directory: "/migrations",
  },
  seeds: {
    //directory: "/seeds",
  },
};
