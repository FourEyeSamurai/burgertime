// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/burgers", function(req, res) {
    db.Burgers.findAll({}).then(function(dbBurgers) {
      
      res.json(dbBurgers);
    });
  });

  // POST route for new burger
  app.post("/api/burgers", function(req, res) {
  
    db.Burgers.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
      date: req.body.date
    }).then(function(dbBurgers) {
     
      res.json(dbBurgers);
    });
  });

  
  // PUT route for updating burgers.
  app.put("/api/burgers", function(req, res) {
    
    db.Burgers.update({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
      date: req.body.date
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurgers) {
      res.json(dbBurgers);
    });
  });

};

