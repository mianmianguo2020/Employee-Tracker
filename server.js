const inquirer = require('inquirer');
const orm = require('./orm');

const mainMenuChoices = [
    'View All Employees',
    'View All Employees By Department',
    'View All Employees By Manager',
    'Update Employee Manager',
    'Update Employee Role',
    'Add Employee'
]

const mainMenuConfig = [
    {
        type: 'list',
        name: 'selection',
        message: 'What would you like to do?',
        choices: mainMenuChoices
    }
]

const newEmployeeQ = [
    {
        type: 'input',
        name: 'firstName',
        message: 'what is the employee\' s first name?',
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'what is the employee\' s last name?',
    },
]



function promptMainMenu() {
    return inquirer.prompt(mainMenuConfig).then((result) => {
        const selection = result.selection;
        if (selection == mainMenuChoices[0]) {
            orm.viewAll(function (err, result) {
                if (err) throw err;
                console.table("\n");
                console.table(result);
                promptMainMenu()
            })
        }
        if (selection == mainMenuChoices[1]) {
            orm.getDepartments((err, results) => {
                if (err) throw err;
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
            orm.getManagers((err, results) => {
                if (err) throw err;
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
                    orm.getManagers((err, results) => {
                        if (err) throw err;
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

        if (selection == mainMenuChoices[4]) {
            orm.getEmployees((err, results) => {
                const employeeIdMap = {}
                const employees = results.map(element => {
                    employeeIdMap[element.name] = element.id;
                    return element.name
                });
                // console.log(employees);
                // console.log(employeeIdMap);
                const employeeConfig = [{
                    type: 'list',
                    name: 'selection',
                    message: 'Which employee?',
                    choices: employees
                }]
                inquirer.prompt(employeeConfig).then((results) => {
                    // console.log(results) 
                    const selectedEmployee = results.selection
                    console.log(selectedEmployee)
                    orm.getRoles((err, results) => {
                        if (err) throw err;
                        console.log(results)
                        const roleIdMap = {}
                        const roles = results.map(element => {
                            roleIdMap[element.title] = element.id;
                            return element.title
                        });

                        const roleConfig = [{
                            type: 'list',
                            name: 'selection',
                            message: 'Which role?',
                            choices: roles
                        }]
                        inquirer.prompt(roleConfig).then((result) => {
                            const selectedRole = result.selection;
                            const selectedRoleId = roleIdMap[selectedRole];
                            const selectedEmployeeId = employeeIdMap[selectedEmployee];

                            console.log(selectedRole)

                            orm.updateEmployeesRole(selectedRoleId, selectedEmployeeId, (err, results) => {
                                promptMainMenu()
                            })
                        })
                    })
                })
            })
        }

        if (selection == mainMenuChoices[5]) {

            inquirer.prompt(newEmployeeQ).then((results) => {
                console.log(results)
                const newEFirstName = results.firstName
                const newELastName = results.firstName
                orm.getRoles((err, results) => {
                    if (err) throw err;
                    console.log(results)
                    const roleIdMap = {}
                    const roles = results.map(element => {
                        roleIdMap[element.title] = element.id;
                        return element.title
                    });

                    const roleConfig = [{
                        type: 'list',
                        name: 'selection',
                        message: 'Which role?',
                        choices: roles
                    }]
                    inquirer.prompt(roleConfig).then((result) => {
                        const selectedRole = result.selection;
                        const selectedRoleId = roleIdMap[selectedRole];
                        console.log(selectedRole)
                        console.log(selectedRoleId)
                        const employeeIdMap = {}

                        orm.getEmployees((err, results) => {
                           
                            const employees = results.map(element => {
                                employeeIdMap[element.name] = element.id;
                                return element.name
                            })
                        });
                    
                        orm.getManagers((err, results) => {
                            if (err) throw err;
                            const managers = results.map(element => element.manager);
                            const managerConfig = [{
                                type: 'list',
                                name: 'selection',
                                message: 'Which manager?',
                                choices: managers
                            }]
                            inquirer.prompt(managerConfig).then((result) => {
                                const selectedManager = result.selection;
                                const selectedManagerId = employeeIdMap[selectedManager];
                                console.log(selectedManager)
                                console.log(selectedManagerId)
                                orm.addEmployee([newEFirstName, newELastName,selectedRoleId,selectedManagerId],(err, results) => {
                                    promptMainMenu()
                                })
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