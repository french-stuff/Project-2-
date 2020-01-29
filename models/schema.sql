-- Drops the FitMe if it exists currently --
DROP DATABASE IF EXISTS FitMe;
-- Creates the "FitMe" database --
CREATE DATABASE FitMe;

USE FitMe;
CREATE TABLE Activity(
id INT AUTO_INCREMENT,
activity_name VARCHAR(100),
PRIMARY KEY(id)
);

CREATE TABLE user(
id INT AUTO_INCREMENT,
First_name VARCHAR(40),
Password Varchar(40),
PRIMARY KEY (id)
);

CREATE TABLE user_log (
id INT AUTO_INCREMENT,
users INT,
body VARCHAR (300),
logged_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
activity_id INT,
PRIMARY KEY (users),
FOREIGN KEY(activity_id) REFERENCES Activity(id),
FOREIGN KEY (users) REFERENCES user(id)
)
