require("dotenv").config();
const { DATABASE_URL, DATABASE_URL_PRODUCTION } = process.env;
const path = require("path");


module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 2, max: 10 },
    connection:
    DATABASE_URL,
    magrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL_PRODUCTION,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
