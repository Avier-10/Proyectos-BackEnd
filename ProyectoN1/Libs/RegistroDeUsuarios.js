const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.2", //localhost
  port: 3306,
  user: "Javier",
  password: "Javier1+",
  database: "bd-apphorarios",
});

module.exports = connection;
