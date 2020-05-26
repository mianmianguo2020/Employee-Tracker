const inquirer = require('inquirer');
const orm = require('./orm');

const mainMenuChoices = [
    'View All Employees',
    'View All Employees By Department',
    'View All Employees By Manager',
    'Update Employee Manager'
]

const mainMenuConfig = [
    {
        type: 'list',
        name: 'selection',
        message: 'What would you like to do?',
        choices: mainMenuChoices
    }
]

function promptMainMenu() {
    return inquirer.prompt(mainMenuConfig).then((result) => {
        const selection = result.selection;
        if (selection == mainMenuChoices[0]) {
            orm.viewAll(function (err,result) {
                if(err) throw err;
                console.table("\n");
                console.table(result);
                promptMainMenu()
            })
        }
        if (selection == mainMenuChoices[1]) {
            orm.getDepartments((err,results) => {
                if(err) throw err;
                const departments = results.map(element => element.department);
                const departmentConfig = [{
                    type: 'list',
                    name: 'selection',
                    message: 'Which department?',
                    choices: departments
                }]
                inquirer.prompt(departmentConfig).then((result) => {
                    const selectedDepartment = result.selection;
                    orm.getEmployeesByDepartment(selectedDepartment, (err, result) => {
                        console.table(result)
                        promptMainMenu()
                    })
                })
            })
        }
        if (selection == mainMenuChoices[2]) {
            orm.getManagers((err,results) => {
                if(err) throw err;
                console.log(result)
                const managers = results.map(element => element.manager);
                const managerConfig = [{
                    type: 'list',
                    name: 'selection', 
                    message: 'Which manager?',
                    choices: managers
                }]
                inquirer.prompt(managerConfig).then((result) => {
                    const selectedManager = result.selection;
                    console.log(selectedManager)
                    orm.getEmployeesByManager(selectedManager, (err, result) => {
                        console.table(result)
                        promptMainMenu()
                    })
                })
            })
        }
        if (selection == mainMenuChoices[3]) {
            orm.getEmployees((err, results) => {
                const employeeIdMap = {}
                const employees = results.map(element => {
                    employeeIdMap[element.name] = element.id;
                    return element.name
                });
                console.log(employees);
                console.log(employeeIdMap);
                const employeeConfig = [{
                    type: 'list',
                    name: 'selection', 
                    message: 'Which employee?',
                    choices: employees
                }]
                inquirer.prompt(employeeConfig).then((results) => {
                    const selectedEmployee = results.selection
                    orm.getManagers((err,results) => {
                        if(err) throw err;
                        const managers = results.map(element => element.manager);
                        const managerConfig = [{
                            type: 'list',
                            name: 'selection', 
                            message: 'Which manager?',
                            choices: managers
                        }]
                        inquirer.prompt(managerConfig).then((result) => {
                            const selectedManager = result.selection;
                            const selectedEmployeeId = employeeIdMap[selectedEmployee];
                            const selectedManagerId = employeeIdMap[selectedManager];
                            orm.updateEmployeesManager(selectedEmployeeId, selectedManagerId, (err, results) => {
                                promptMainMenu()
                            })
                        })
                    })
                })
            })
        }
        })
}

function main() {
    promptMainMenu()
}

main()