var application = require("./config/server.js");
var connMySQL = require("./config/dbConnection.js");
/*
con = connMySQL();

con.connect(error => {
  if (error) {
    console.log("Cannot connect to database");
  }
});
*/
application.set('view engine','jsx');
application.set('views','./app/views');
application.engine('jsx', require('express-react-views').createEngine());

application.get('/', (req, res) => {
  res.render('./views/home.jsx');
  //res.send("<html><body>teste</body></html>");

});

application.listen(3000, () => {
  console.log("I'm online boys");
});
