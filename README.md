# GitMeAnInternship

# Application for JustBrasil's internship selective process

## Brief introduction:
First of all, this is a fullstack application created for the sole purpose of submitting it to an institution's  internship selective process, that said be very aware that not to apply this directly to any of your projects without giving the code a good review in order to uphold your own best practice's standards.

This is a very basic search engine with a frontend for searching.

##Tecnologies used here:
###A) Backend:
* NodeJS with Express framework
* Body-parser for data validation and JSON usage
* MySQL Database
### B) Frontend:
* Create-react-app and all its packages
### C) For testing and package management:
* cURL
* NPM

##Instalation

###Installing packages:
Go to the application folder(~/GitMeAnInternship), open your terminal and do:
```bash
npm install
```

```bash
curl -X POST http://localhost:5000/entities -d '{"title": "Some title", "type": "TOPIC"}'
```

```bash
curl -X GET http://localhost:3000/entities/searchterm 
```


