const connection = require("./db/connection")


var orm = {
    viewAll: function(callback) {
    var queryString = `SELECT employee.id,employee.first_name,employee.last_name,title,department,salary,CONCAT(employeeManager.first_name,' ',employeeManager.last_name) AS manager 
    FROM employee 
    JOIN role ON employee.role_id = role.id 
    JOIN department ON role.department_id = department.id 
    LEFT JOIN employee AS employeeManager ON employee.manager_id = employeeManager.id`;

    connection.query(queryString, callback);

    },
    getDepartments: function(callback) {
      const queryString = `SELECT department FROM department`;
      connection.query(queryString, callback);
    },

    getRoles: function(callback) {
      const queryString = `SELECT id, title FROM role`;
      connection.query(queryString, callback);
    },

    getEmployeesByDepartment: function(deptName, callback) {
      const queryString = `SELECT employee.id,employee.first_name,employee.last_name,title,department,salary,CONCAT(employeeManager.first_name,' ',employeeManager.last_name) AS manager 
      FROM employee 
      JOIN role ON employee.role_id = role.id 
      JOIN department ON role.department_id = department.id 
      LEFT JOIN employee AS employeeManager ON employee.manager_id = employeeManager.id
      WHERE department = ?`;
      connection.query(queryString, deptName, callback);
    },
    getManagers: function(callback) {
      const queryString = `SELECT DISTINCT CONCAT(employeeManager.first_name, ?,employeeManager.last_name) AS manager 
      FROM employee 
      LEFT JOIN employee AS employeeManager ON employee.manager_id = employeeManager.id
      WHERE CONCAT(employeeManager.first_name, ?,employeeManager.last_name) IS NOT NULL`;
      connection.query(queryString, [' ',' '],callback);
    },
    getManagersByDept: function(callback) {
      const queryString = `SELECT DISTINCT CONCAT(employeeManager.first_name, ?,employeeManager.last_name) AS manager 
      FROM employee 
      LEFT JOIN employee AS employeeManager ON employee.manager_id = employeeManager.id
      WHERE CONCAT(employeeManager.first_name, ?,employeeManager.last_name) IS NOT NULL`;
      connection.query(queryString, [' ',' '],callback);
    },
    getEmployeesByManager: function(managerName, callback) {
      const queryString = `SELECT employee.id,employee.first_name,employee.last_name,title,department,salary,CONCAT(employeeManager.first_name,' ',employeeManager.last_name) AS manager 
      FROM employee 
      JOIN role ON employee.role_id = role.id 
      JOIN department ON role.department_id = department.id 
      LEFT JOIN employee AS employeeManager ON employee.manager_id = employeeManager.id
      WHERE CONCAT(employeeManager.first_name, ? ,employeeManager.last_name) = ?`;
      connection.query(queryString, [' ', managerName], callback);
    },
    getEmployees: function(callback) {
      const queryString = `SELECT id, CONCAT(first_name, ?,last_name) AS name
      FROM employee`;
      connection.query(queryString, [' '], callback)
    },
    updateEmployeesManager: function(employeeId, managerId, callback) {
      const queryString = `UPDATE employee
      SET manager_id = ?
      WHERE id = ?`;
      connection.query(queryString,[managerId, employeeId], callback)
    },
    updateEmployeesRole: function(roleId, employeeName, callback) {
      const queryString = `UPDATE employee
      SET role_id = ?
      WHERE id = ?`;
      connection.query(queryString,[roleId, employeeName], callback)
    },
    addEmployee: function(whatToSecl,callback) {
      const queryString = `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
      VALUES (?, ? , ? , ?) `
      connection.query(queryString,whatToSecl, callback)

    }
}


module.exports = orm; 