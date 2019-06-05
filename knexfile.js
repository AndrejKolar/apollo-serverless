require("dotenv").config();
const mysql = require("mysql");

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.db"
    },
    useNullAsDefault: true
  },
  production: {
    client: "mysql",
    connection: {
      host: process.env.MYSQLHOST,
      port: process.env.MYSQLPORT,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASS,
      database: process.env.MYSQLDATABASE
    }
  }
};
