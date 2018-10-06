const express = require("express");
const application = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
/*const cors = require("cors");*/
const port = 5000;

application.use(bodyParser.json({ type: "*/*" }));
application.use(bodyParser.urlencoded({ extended: true }));
/*application.use(cors());*/

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "jusearch"
});

connection.connect(err => {
  if (err) {
    return err;
  }
});

application.get("/", (req, res) => {
  res.send("This is a message from the other side of the world dude!");
});

application.get("/entities", (req, res) => {
  res.send("This is a page supposed to add stuff");
});


application.post("/entities", (req, res) => {
  var info = req.body;
  //var title = req.body.title;
  //var type = req.body.type;
  const INSERT_QUERY = "INSERT INTO jusearch.website SET ?"; //VALUES('" + title + "','" + type +"')";

  var query = connection.query(INSERT_QUERY, info, (err, result) => {
    if (err) {
      return err;
    } else {
      console.log("Sucessfully inserted website's url and content data!");
    }
  });
});

application.get("/entities/:search", (req, res) => {
  var search = req.params.search;
  const SEARCH_QUERY =
    `SELECT * FROM jusearch.website WHERE MATCH(title) AGAINST ('${search}')
     OR MATCH(type) AGAINST ('${search}')`;
  var query = connection.query(SEARCH_QUERY, (err, result) => {
    if (err) {
      return err;
    } else {
      return res.json(result);
    }
  });
  // res.send("user searched for: \n" + req.params.search + "user's results were: \n" + query);
});

application.listen(port, () => console.log("Listening on port " + port));
