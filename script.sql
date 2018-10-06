SELECT * FROM jusearch.website;

INSERT INTO website(title, type) VALUES ('https://mail.google.com/','gmail');
INSERT INTO website(title, type) VALUES ('https://surrenderat20.net/','league of legends');
INSERT INTO website(title, type) VALUES ('https://google.com/','google');
INSERT INTO website(title, type) VALUES ('https://www.jusbrasil.com.br/home','jusbrasil');
INSERT INTO website(title, type)  VALUES ('https://www.wikipedia.org/','wikipedia');
INSERT INTO website(title, type)  VALUES ('https://www.jw.org/pt/','jeova');
INSERT INTO website(title, type)  VALUES ('http://ibam.com.br/','igreja');

/*
curl -H "Content-Type: application/json" POST -d '{"title":"xyz","type":"xyz"}' http://localhost:4000/entities
curl -H "Content-Type: application/json" POST -d '{"title":"xyz","type":"xyz"}' http://localhost:4000/entities

curl -H "Content-type: application/json" POST http://localhost:5000/entities -d '{"title": "Some title", "type": "TOPIC"}'

*/
DROP TABLE website; 

CREATE TABLE website(
id_website INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
title CHAR(100) NOT NULL,
type CHAR(50) NOT NULL,
FULLTEXT (title),
FULLTEXT (type)
);

SHOW INDEXES FROM website;

EXPLAIN SELECT * FROM website WHERE sitecontent = 'goog';
SELECT * FROM website WHERE sitecontent = 'google';
SELECT siteurl, sitecontent FROM website WHERE MATCH(siteurl,sitecontent) AGAINST ('google');
SELECT * FROM jusearch.website WHERE MATCH(title) AGAINST ('.org') OR MATCH(type) AGAINST ('.org');
SELECT * FROM website WHERE MATCH(sitecontent) AGAINST ('jeova');
SELECT * FROM website WHERE MATCH(siteurl) AGAINST ('.org');

curl -X POST http://localhost:4000/entities -d "{'title': 'test', 'type': 'TOPIC'}"