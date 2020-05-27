INSERT INTO department (department) VALUES ('Sale');
INSERT INTO department (department) VALUES ('Engineering');
INSERT INTO department (department) VALUES ('Legal');
INSERT INTO department (department) VALUES ('Finance');


INSERT INTO role (title, department_id, salary) SELECT 'Sales',id,'35000' FROM department WHERE department = 'Sale'  ;
INSERT INTO role (title, department_id, salary) SELECT 'Sales Manager',id,'60000' FROM department WHERE department = 'Sale'  ;
INSERT INTO role (title, department_id, salary) SELECT 'Software Engineer',id,'40000' FROM department WHERE department = 'Engineering'  ;
INSERT INTO role (title, department_id, salary) SELECT 'manager',id,'80000' FROM department WHERE department = 'Engineering'  ;
INSERT INTO role (title, department_id, salary) SELECT 'Lawyer',id,'30000' FROM department WHERE department = 'Legal'  ;
INSERT INTO role (title, department_id, salary) SELECT 'analyst',id,'35000' FROM department WHERE department = 'Finance'  ;
INSERT INTO role (title, department_id, salary) SELECT 'manager',id,'70000' FROM department WHERE department = 'Finance'  ;

 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('LaLa', 'DoeD',2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Ku', 'Kong',4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Tom', 'Doe',1,1), ('Dim', 'Sum',1,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Toe', 'Kuku',3, 2), ('Noodle', 'Fire',3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Time', 'Kku',5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Baking', 'Soda',7, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Ma', 'Lku',6, 8);