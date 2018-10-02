const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 4000;

const application = express();

application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: true }));
/*
const port = process.env.PORT || 5000;

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
*/

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'1234',
  database:'jusearch'
});

connection.connect( (err) => {
  if(err){
    return err;
  }
});


application.use(cors());

application.get('/', (req,res) => {
  res.send('This is a message from the other side of the world dude!');
});

application.get('/entities', (req, res) => {
  res.send('This is a page supposed to add stuff');
});

application.post('/entities', (req, res) => {
  //var info = {};
  var info = JSON.stringify(req.body);
  //info = req.body;
  console.log(info);
  const INSERT_QUERY = 'INSERT INTO jusearch.website SET ?';
  

  var query = connection.query(INSERT_QUERY, info, (err, result) => {
    if(err){
      //return
      console.log(err) ;
    }else{
      console.log('Sucessfully inserted query!');
    }
  });

});

application.get('/entities/:search' , (req,res) => {
  var search = req.params.search;
  const SEARCH_QUERY = 'SELECT * FROM jusearch.website WHERE MATCH(title) AGAINST ("'+search+'") OR MATCH(type) AGAINST ("'+search+'")';
  var query = connection.query(SEARCH_QUERY, (err,result) => {
    if(err){
      return err;
    }else{
      return res.json({
        data: result
      });
    }
  });
 // res.send("user searched for: \n" + req.params.search + "user's results were: \n" + query);
  
});



application.listen(port, () => console.log("Listening on port " + port));