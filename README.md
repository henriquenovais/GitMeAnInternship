# GitMeAnInternship

# Application for JustBrasil's internship selective process

## Brief introduction:
First of all, this is a fullstack application created for the sole purpose of submitting it to an institution's  internship selective process, that said be very aware that not to apply this directly to any of your projects without giving the code a good review in order to uphold your own best practice's standards.

This is a very basic search engine with a frontend for searching.

## Tecnologies used here:
### A) Backend:
* NodeJS with Express framework
* Body-parser for data validation and JSON usage
* MySQL Database and package module
### B) Frontend:
* Create-react-app and all its packages
### C) For testing and package management:
* cURL
* NPM

## Instalation

### Installing packages:
* Go to the application folder ~/GitMeAnInternship or ~/GitMeAnInternship-master (depending on how you downloaded the repository), open your terminal and do:

```bash
npm install
```

* Go to the application folder ~/GitMeAnInternship/client or ~/GitMeAnInternship-master/client (depending on how you downloaded the repository), open your terminal and do:

```bash
npm install
```

### Installing cURL, MySQL Database, NPM and NodeJS:

* Visit the following link for instructions on how to download cURL: <br>
<a href="https://curl.haxx.se/download.html" target="_blank">cURL</a>


* To download NodeJS and NPM(both applications are installed together), visit the following website: <br>
<a href="https://nodejs.org/en/download/" target="_blank">NodeJS and NPM</a>

* Highly recommend to download MySQL with the MySQL's workbench, visit the following website: <br>
<a href="https://dev.mysql.com/downloads/" target="_blank"> MySQL</a>


### Quick-starting MySQL database:

* In order to quickly create the database used by the backend i provided a sql script. Open 
```
script.sql
```
and run it in your MySQL Database.

### Setting up your database connection:

* Open the `server.js` file.

* Change the following on line 33 to match your connection parameters. 
```js
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "jusearch"
});
```
* The MySQL default would be:
```js
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "jusearch"
});
```

```bash
curl -X POST http://localhost:5000/entities -d '{"title": "Some title", "type": "TOPIC"}'
```

```bash
curl -X GET http://localhost:3000/entities/searchterm 
```


