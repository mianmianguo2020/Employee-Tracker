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

userInput()

function userInput() {
    inquirer
     .prompt(questionQ).then(res=> {
         let toDo = res.askUser;

        if (toDo == "View All Employees"){
            orm.viewAll();
            userInput()
        };

        if (toDo == "View All Employees By Department"){
            orm.select();
            userInput()
        }






        if (toDo == "Exit"){
           
        }  
            
        // "View All Employees By Department",
        // "View All Employees By Manager",
        // "Add Employee",
        // "Remove Employee",
        // "Update Employee Role",
        // "Update Employee Manager",


     })

}

