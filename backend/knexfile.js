require("dotenv").config();
const { DATABASE_URL, DATABASE_URL_PRODUCTION } = process.env;
const path = require("path");



module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 2, max: 10 },
    connection:
    "postgres://noqovsgn:0ueYnIUD2CY6iRCSJyLek1UT-r4hGVYa@isilo.db.elephantsql.com/noqovsgn",
    magrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: "postgres://tztgcaku:W0lkfUcNc6HGd0nZl4OaFVvZTG-5n89Y@peanut.db.elephantsql.com/tztgcaku",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
