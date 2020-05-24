### Schema
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE employee
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	title varchar(255) NOT NULL,
	department varchar(255) NOT NULL,
	salary int NOT NULL,
	manager varchar(255) NOT NULL,

	PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, title, department, salary, manager) VALUES ('Tome', 'Doe','Sales Lead','Sale','10000','Ashley Ron');
INSERT INTO employee (first_name, last_name, title, department, salary, manager) VALUES ('John', 'Dim','Sales Lead','Sale','50000','Ashley Ron');
INSERT INTO employee (first_name, last_name, title, department, salary, manager) VALUES ('Nick', 'Doe','Software Engineer','Engineering','60000','Yummy Ron');
INSERT INTO employee (first_name, last_name, title, department, salary, manager) VALUES ('Pim', 'Luke','Sales Lead','Sale','30000','Ray Ron');
INSERT INTO employee (first_name, last_name, title, department, salary, manager) VALUES ('Jon', 'Doe','Sales Lead','Sale','20000','Ray Ron');
INSERT INTO employee (first_name, last_name, title, department, salary, manager) VALUES ('Lhn', 'Ma','Lawyer','Legal','10000','Dama LRon');
INSERT INTO employee (first_name, last_name, title, department, salary, manager) VALUES ('Yae', 'La','Sales Lead','Sale','10000','Ashley Ron');
INSERT INTO employee (first_name, last_name, title, department, salary, manager) VALUES ('Loo', 'Col','Software Engineer','Engineering','20000','Yummy Ron');