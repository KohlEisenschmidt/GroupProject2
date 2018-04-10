<<<<<<< HEAD
=======
DROP DATABASE IF EXISTS WBR_db ;

-- ### Schema

CREATE DATABASE WBR_db;
USE WBR_db;

CREATE TABLE profiles
(
	id int NOT NULL AUTO_INCREMENT,
	person_name VARCHAR(50) NOT NULL,
    gender VARCHAR(50) NOT NULL,
	activity VARCHAR(50) NOT NULL,
    area VARCHAR(50) NOT NULL,
    intensity VARCHAR(50) NOT NULL,
    time_in_min INTEGER(50) NOT NULL,
    total INTEGER(50) NOT NULL,
    
    image VARCHAR(2083) NOT NULL,
    
	PRIMARY KEY (id)
);
>>>>>>> kohlsdbfiles
