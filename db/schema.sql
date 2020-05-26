### Schema
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;



CREATE TABLE department
(
	id int NOT NULL AUTO_INCREMENT,
	department varchar(255) NOT NULL,
 	PRIMARY KEY (id)
);


CREATE TABLE role
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id int NOT NULL,
    FOREIGN KEY (department_id)REFERENCES department(id),
	PRIMARY KEY (id)
);




CREATE TABLE employee
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	role_id int NOT NULL,
	manager_id int ,
	PRIMARY KEY (id),
       
	FOREIGN KEY (role_id)REFERENCES role(id)
    
	);