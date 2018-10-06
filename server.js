const express = require("express"); //NodeJs Framework
const application = express();  //main object to be used in this application.
const bodyParser = require("body-parser");//Information parsing tool
const mysql = require("mysql"); //MySQL Database 
const port = 5000; //Port address to 


/*
Very important to note that in order to be able to receive 
json properly from curl without explicitly defining which
type of data is being sent the bodyParser type property necessary.

An example:

Using application.use(bodyParser.json());
JSON will only be received from curl if JSON format is specified:
curl -H "Content-type: application/json" POST http://localhost:5000/entities -d '{"title": "Some title", "type": "TOPIC"}'

Whereas using application.use(bodyParser.json({ type: "'asterisc'/*" })); everything works fine
typing in curl:
curl -X POST http://localhost:5000/entities -d '{"title": "Some title", "type": "TOPIC"}'

To learn more visit: https://www.npmjs.com/package/body-parser#type 
*/
application.use(bodyParser.json({ type: "*/*" }));

//What is this? What difference does it make?
application.use(bodyParser.urlencoded({ extended: true }));


//Defining connection parameters through the mysql object 
//which stores the mysql database package:
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "jusearch"
});
//Failsafe for server connection
connection.connect(err => {
  if (err) {
    return err;
  }
});

application.post("/entities", (req, res) => {
  //In case of POST request through the '/entities' endpoint do:
  var info = req.body;
  const INSERT_QUERY = "INSERT INTO jusearch.website SET ?"; 

  var query = connection.query(INSERT_QUERY, info, (err, result) => {
    if (err) {
      return err;
    } else {
      console.log("Sucessfully inserted website's url and content data!");
    }
  });
});


application.get("/entities/:search", (req, res) => {
//In case of GET request through the '/entities/:search' endpoint do:
  var search = req.params.search;
  const SEARCH_QUERY =
    `SELECT * FROM jusearch.website WHERE MATCH(title) AGAINST ('${search}')
     OR MATCH(type) AGAINST ('${search}')`;
//Using the connection MySQL object to do the query.
  var query = connection.query(SEARCH_QUERY, (err, result) => {
    if (err) {
      return err;
    } else {
      return res.json(result);
    }
  });
});
//Listen to port 5000:
application.listen(port, () => console.log("Listening on port " + port));
