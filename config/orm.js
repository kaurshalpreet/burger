var connection = require("./connection.js");

var orm = {
    selectAll: function(cb) {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
    },
    insertOne: function(burger_name,cb) {
      var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
      connection.query(queryString, [burger_name], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result)
      });
    },
    
    updateOne: function(id,cb) {
      var queryString =
        "UPDATE burgers SET devoured = 1 WHERE id = ?;";
  
      connection.query(queryString,[id],function(err, result) {
          if (err) throw err;
          console.log(result);
          cb(result)
        }
      );
    }
  };
  
  module.exports = orm;
  