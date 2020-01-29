// Dependencies
const express = require("express");
const mysql = require("mysql");

const app = express();

const PORT = 8080;

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Ca5aBlanca310",
    database: "FitMe"
  });

// Initiate MySQL Connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  // Routes
app.get("/", function(req, res) {

    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM Activity", function(err, result) {
      if (err) throw err;
      
      //do something with result
    res.send(result);
    });

    app.get("/", function(req, res){
      res.json();
    });

    app.get("/", function(req,res) {
      res.json();
    });
  });

  // Start our server so that it can begin listening to client requests.
app.listen(3306, function() {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${3306}`);
  });