// Require mysql
var mysql = require('mysql');

// Set up our connection
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Champion123#",
    database: "burgers_db"
  });
};

// connect to the database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// export connection
module.exports = connection;