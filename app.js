var application = require("./config/server.js");
var connMySQL = require("./config/dbConnection.js");
var translator = require("./config/translator.js");

con = connMySQL();

con.connect(error => {
  if (error) {
    console.log("Cannot connect to database");
  }
});


application.listen(3000, () => {
    console.log("I'm online boys");
});


translator.question("Enter website url: \n", url => {
  var website = { siteurl: url };
  translator.question("Enter website content: \n", content => {
    var website = { siteurl: url, sitecontent: content };
    con.query("INSERT INTO website SET ?", website, error => {
      if (error) {
        throw error;
      }

      con.query("SELECT * FROM website", (err, data) => {
        if (err) {
          throw err;
        }
        console.log("Data from DB: \n");

        for (var i = 0; i < data.length; i++) {
          console.log(data[i].siteurl, data[i].sitecontent);
        };
      });
    });
    translator.close();
  });
});

application.listen(8000, () => {
    console.log("I'm online boys");
});


