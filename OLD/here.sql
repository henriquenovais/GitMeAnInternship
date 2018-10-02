websiteSELECT * FROM jusearch.website;

INSERT INTO website(title, type) VALUES ('https://mail.google.com/','gmail');
INSERT INTO website(title, type) VALUES ('https://surrenderat20.net/','leagueoflegends');
INSERT INTO website(title, type) VALUES ('https://google.com/','google');
INSERT INTO website(title, type) VALUES ('https://www.jusbrasil.com.br/home','jusbrasil');
INSERT INTO website(title, type)  VALUES ('https://www.wikipedia.org/','wikipedia');
INSERT INTO website(title, type)  VALUES ('https://www.jw.org/pt/','jeova');
INSERT INTO website(title, type)  VALUES ('http://ibam.com.br/','igreja');



DROP TABLE website; 

CREATE TABLE website(
id_website INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
title CHAR(100) NOT NULL,
type CHAR(50) NOT NULL,
FULLTEXT (siteurl),
FULLTEXT (sitecontent)
);

SHOW INDEXES FROM website;

EXPLAIN SELECT * FROM website WHERE sitecontent = 'goog';
SELECT * FROM website WHERE sitecontent = 'google';
SELECT siteurl, sitecontent FROM website WHERE MATCH(siteurl,sitecontent) AGAINST ('google');
SELECT * FROM website WHERE MATCH(sitecontent) AGAINST ('') OR MATCH(siteurl) AGAINST ('jw');
SELECT * FROM website WHERE MATCH(sitecontent) AGAINST ('jeova');
SELECT * FROM website WHERE MATCH(siteurl) AGAINST ('.org');