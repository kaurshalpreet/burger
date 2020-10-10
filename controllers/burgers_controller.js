var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


// create the router for the app and export the router at the end of the file.
router.get("/", function(req, res) {
    
    burger.selectAll(function(data) { 
        var hbsObject = {
            burgers: data,
        }; 
        console.log(hbsObject);
        res.render("index", hbsObject);
        
    });
});
 
router.post("/api/burgers", function (req, res) {
    burger.insertOne([req.body.burger_name], function (result) {
        res.json({ id: result.insertId });
      }
    );
  });
 
  
router.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;
  
    console.log("id: ", id);
  
    burger.updateOne(id, function (result) {
        if (result.changedRows == 0) {
          return res.status(404).end();
        } 
        else {
          res.status(200).end();
        }
      }
    );
  });
module.exports = router;