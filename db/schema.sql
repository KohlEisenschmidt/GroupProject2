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
    time_in_min VARCHAR(50) NOT NULL,
    
    image VARCHAR(2083) NOT NULL,
    
	PRIMARY KEY (id)
);

-- ### Seeds

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Thomas', "Male", "Walk", "North", "light", 60 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Sam', "Male", "Run", "West", "moderate", 30 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Millissa', "Female", "Bike", "East", "moderate", 60 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Kohl', "Male", "Run", "East", "strenuous", 45 );



            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Klara', "Male", "Walk", "North", "light", 60 );





            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Ellen', "Male", "Walk", "North", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Allex Bradley', "Male", "Walk", "North", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Taddes', "Male", "Walk", "North", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Philo', "Male", "Walk", "North", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('KT', "Male", "Walk", "North", "light", 60 );





            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Brandt', "Male", "Walk", "North", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Abby', "Male", "Walk", "North", "light", 60 )

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Andrew', "Male", "Walk", "North", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Daniel Crowley', "Male", "Walk", "North", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Daniel Doyle', "Male", "Walk", "North", "light", 60 );





            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Erik', "Male", "Walk", "North", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Jeffrey', "Male", "Walk", "North", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Jennifer', "Male", "Walk", "North", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Max', "Male", "Walk", "North", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Melia', "Male", "Walk", "North", "light", 60 );





            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Robert', "Male", "Walk", "North", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Sergio', "Male", "Walk", "North", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Ron Burgundy', "Male", "Walk", "South", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Frodo Baggins', "Male", "Walk", "East", "moderate", 60 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Captin Jack Sparrow', "Male", "Bike", "North", "moderate", 60 );





INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Derek Zoolander', "Male", "Run", "South", "moderate", 60 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Wolverine', "Male", "Bike", "West", "moderate", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('McLovin', "Male", "Walk", "East", "light", 15 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Gandalf', "Male", "Run", "North", "moderate", 45 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Harry Potter', "Male", "Bike", "North", "light", 60 );





INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Napoleon Dynamite', "Male", "Bike", "West", "light", 15 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Batman', "Male", "Bike", "South", "strenuous", 60 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Buddy the Elf', "Male", "Bike", "East", "light", 45 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('James Bond', "Male", "Run", "Center", "light", 60 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Shrek', "Male", "Walk", "West", "strenuous", 60 );





INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Tony Stark', "Male", "Run", "South", "moderate", 15 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Peter Parker', "Male", "Bike", "South", "moderate", 60 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Queen Elizabeth', "Female", "Run", "South", "strenuous", 45 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Dorthy Gale', "Female", "Walk", "South", "light", 30 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Sansa Stark', "Female", "Bike", "North", "strenuous", 60 );




INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Elaine Benes', "Male", "Run", "South", "moderate", 15 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Hermione Granger', "Female", "Bike", "South", "moderate", 20 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Xena', "Female", "Run", "South", "strenuous", 45 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Mulan', "Female", "Run", "East", "moderate", 30 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Lucy Ricardo', "Female", "Bike", "South", "strenuous", 60 );





INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Claire Underwood', "Female", "Run", "South", "moderate", 15 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Katniss Everdeen', "Female", "walk", "west", "strensuous", 20 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Phoebe Buffay', "Female", "Run", "East", "light", 45 );

INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
VALUES ('Mary Poppins', "Female", "Bike", "East", "moderate", 30 );

            INSERT INTO profiles (person_name, gender, activity, area, intensity, time_in_min) 
            VALUES ('Princess', "Female", "Walk", "East", "moderate", 60 );
