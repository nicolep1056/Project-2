DROP DATABASE IF EXISTS grandmas_attic;
CREATE DATABASE grandmas_attic;

USE grandmas_attic;


-- CREATE TABLE junk(
--     id INT NOT NULL AUTO_INCREMENT,
--     username VARCHAR(50),
--     TIMESTAMP,
--     days_available INT NULL,
--     PRIMARY KEY(id)
-- );

USE grandmas_attic;
	CREATE TABLE items (
    id INTEGER NOT NULL AUTO_INCREMENT,
    item VARCHAR(30),
    area VARCHAR(30),
    description_of_item VARCHAR(100),
    pickup_instructions VARCHAR(100),
    time TIMESTAMP,
    PRIMARY KEY(id)
);
	SELECT * FROM items