const inquirer = require('inquirer');
const { builtinModules } = require('module');
const Manager = require('./manager.js');
const Intern = require('./intern.js');
const Engineer = require('./engineer.js');

class Application {
    constructor(employees) {
        this.employees = employees;
    }

    manager() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "Enter the name of your team manager.",
                },
                {
                    type: "input",
                    name: "managerID",
                    message: "Enter the ID for your team manager.",
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "Enter the email address for your team manager.",
                },
                {
                    type: "input",
                    name: "managerOfficeNumber",
                    message: "Enter the office number for your team manager.",
                },
            ])
            .then(val => {
                const manager = new Manager(val.managerName, val.managerID, val.managerEmail, val.managerOfficeNumber);
                this.employees.push(manager);
                this.newEmployee();
            })
    }

    newEmployee() {
        return inquirer
          .prompt([
            {
                type: "list",
                name: "newEmployee",
                message: "Would you like to add another employee?",
                choices: ["Engineer", "Intern", "No"]
            }
          ])
          .then(val => {
            if (val.newEmployee === "Engineer") {
                this.newEngineer();
            }
            if (val.newEmployee === "Intern") {
                this.newIntern();
            }
        })
    }

    newEngineer() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "Enter the name of your engineer.",
                },
                {
                    type: "input",
                    name: "engineerID",
                    message: "Enter the ID for your engineer.",
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "Enter the email address for your engineer.",
                },
                {
                    type: "input",
                    name: "github",
                    message: "Enter the engineer's GitHub username."
                }
            ]).then(val => {
                let engineer = new Engineer(val.engineerName, val.engineerID, val.engineerEmail, val.github);
                employees.push(engineer);
                this.newEmployee;
            })
    }

    newIntern() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "Enter the name of your intern.",
                },
                {
                    type: "input",
                    name: "internID",
                    message: "Enter the ID for your intern.",
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "Enter the email address for your intern.",
                },
                {
                    type: "input",
                    name: "school",
                    message: "Enter the intern's school."
                }
            ]).then(val => {
                let intern = new Intern(val.internName, val.internID, val.internEmail, val.school);
                employees.push(intern);
                this.newEmployee;
            })
    }
}

module.exports = Application;