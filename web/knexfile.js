const path = require("path");

const config = {
  client: "pg",
  connection: "postgres://postgres:postgres@db:5432/audiophile",
  migrations: {
    directory: path.join(__dirname, "src/db/migrations"),
    tableName: "knex_migrations",
  },
};

module.exports = config;