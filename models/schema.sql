DROP DATABASE IF EXISTS grandmas_attic;
CREATE DATABASE grandmas_attic;

USE grandmas_attic

CREATE TABLE junk(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50),
    created_at TIMESTAMP,
    days_available INT NULL,
    PRIMARY KEY(id)
);

USE grandmas_attic;
CREATE TABLE items(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50),
    item VARCHAR(100),
    PRIMARY KEY(id)
);