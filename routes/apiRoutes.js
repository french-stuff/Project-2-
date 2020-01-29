var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });


  // Log in and Register

  app.get("/api/users/all", function(req, res) {
    db.users.findAll({})
      .then(function(dbUsers) {
        res.json(dbUsers);
      });
  });

  app.get("/api/users/newCheck/:name", function(req, res) {
    db.users.findAll({
      where: {
        user: req.params.name
      }
    })
      .then(function(dbUsers) {
        res.json(dbUsers);
      });
  });

  app.get("/api/users/find/:code", function(req, res) {
    db.users.findAll({
      where: {
        userCode: req.params.code
      }
    })
      .then(function(dbUsers) {
        res.json(dbUsers);
      });
  });

  app.post("/api/users/log/:user&:password", function(req, res) {
    db.users.findAll({
      where: {
        user: req.params.user,
        password: req.params.password
      }
    })
      .then(function(dbUsers) {
        res.json(dbUsers);
      });
  });

  app.post("/api/users/new", function(req, res) {
      console.log(req.body);
      db.users.create({
        user: req.body.user,
        password: req.body.password,
        userCode: req.body.userCode,
      })
        .then(function(dbUsers) {
          res.json(dbUsers);
        });
  });


  //Post and Feed

  app.get("/api/usersPosts/all", function(req, res) {
    db.posts.findAll({})
      .then(function(dbPosts) {
        res.json(dbPosts);
      });
  });

  app.post("/api/usersPosts/new", function(req, res){
    db.posts.create({
      user: req.body.user,
      userCode: req.body.code,
      activity: req.body.activity,
      message: req.body.message
    }) 
      .then(function(dbPosts) {
        res.json(dbPosts);
      });
  })

  app.get("/api/usersPosts/find/:code", function(req, res){
    db.posts.findAll({
      where: {
        userCode: req.params.code
      }
    })
      .then(function(dbPosts) {
        res.json(dbPosts);
      });
  });
    



};
