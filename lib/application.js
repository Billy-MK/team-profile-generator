const inquirer = require('inquirer');
const { builtinModules } = require('module');
const Manager = require('./manager.js');
const Intern = require('./intern.js');
const Engineer = require('./engineer.js');
const employees = [];

class Application {
    constructor(blah) {
        this.blah = blah;
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
                    name: "github",
                    message: "Enter the engineer's GitHub username."
                }
            ]).then(val => {
                employees.push(new Engineer())
            })
    }

    newIntern() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "school",
                    message: "Enter the intern's school."
                }
            ])
    }
}

module.exports = Application;