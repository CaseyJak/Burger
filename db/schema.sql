CREATE DATABASE burgers_db;
USE burgesr_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR (100) NOT NULL,
    devored BOOLEAN DEAFULT false,
);