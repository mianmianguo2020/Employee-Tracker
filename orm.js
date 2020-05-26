const cTable = require('console.table');
const connnection = require("./db/connection")


var orm = {
   table:[], 

    viewAll: function() {
    var queryString = `SELECT employee.id,employee.first_name,employee.last_name,title,department,salary,CONCAT(employeeManager.first_name,' ',employeeManager.last_name) AS manager 
    FROM employee 
    JOIN role ON employee.role_id = role.id 
    JOIN department ON role.department_id = department.id 
    LEFT JOIN employee AS employeeManager ON employee.manager_id = employeeManager.id`;

    connnection.query(queryString, 
    function (err,result) {
      if(err) throw err;
      console.table("\n");
      console.table(result);
      this.table= result;
      // console.log(this.table)  
    })  

    },

    viewByDept: function(department,answer.Deptname) {
      var queryString = `SELECT employee.id,employee.first_name,employee.last_name,title,department,salary,CONCAT(employeeManager.first_name,' ',employeeManager.last_name) AS manager 
      FROM employee 
      JOIN role ON employee.role_id = role.id 
      JOIN department ON role.department_id = department.id 
      LEFT JOIN employee AS employeeManager ON employee.manager_id = employeeManager.id
      WHERE department.id  = Sale`;

      connnection.query (queryString,[department,answer.Deptname],
        function (err,result) {
          if(err) throw err;
          console.table("\n");
          console.table(result);
          // this.table= result;
          // console.log(this.table)  
        })  


    },
    

    
}


module.exports = orm; 