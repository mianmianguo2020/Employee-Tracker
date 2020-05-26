const inquirer = require("inquirer");
const orm = require("./orm");

// orm.select("employee", "role", "role_id", "id");

const optionList = [
    "View All Employees",
    "View All Employees By Department",
    "View All Employees By Manager",
    "Add Employee",
    "Remove Employee",
    "Update Employee Role",
    "Update Employee Manager",
    "Exit"
 
]

const questionQ = [
    {
        type: 'list',
        name: 'askUser',
        message: 'What would you like to do ?',
        choices: optionList,
    },
]

start()

function start() {
    inquirer
     .prompt(questionQ).then(res=> {
         let toDo = res.askUser;

        if (toDo == "View All Employees"){
            orm.viewAll();
            userInput()
        };

        if (toDo == "View All Employees By Department"){
            orm.viewByDept();
            userInput()
        }
        if (toDo == "View All Employees By Manager"){

        }
        if (toDo == "Remove Employee"){

        }
        if (toDo == "Update Employee Role"){

        }
        if (toDo == "Update Employee Manager"){

        }

        if (toDo == "Exit"){
           
        }  

     })

}


function viewByDept () {
    inquirer
    .prompt ({
        name:"Deptname",
        type: "input",
        message: "What department would you like to search for? "
    })
    .then(function(answer) {
        var query = ` SELECT * FROM ${table} WHERE ? `;
        connection.query(query, {department: answer.Deptname}, function(err,res) {
        if (err) throw err;
        console.table("\n");
        console.table(result);
        this.table= result;
        });
    })

}
