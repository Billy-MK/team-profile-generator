const inquirer = require('inquirer');
const { builtinModules } = require('module');
const Manager = require('./manager.js');
const Intern = require('./intern.js');
const Engineer = require('./engineer.js');
const fs = require('fs');
var cards = [];

class Application {
    constructor(managers, engineers, interns) {
        this.managers = managers;
        this.engineers = engineers;
        this.interns = interns;
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
                this.managers.push(manager);
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
            if (val.newEmployee === "No") {
                this.end();
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
                this.engineers.push(engineer);
                this.newEmployee();
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
                this.interns.push(intern);
                this.newEmployee();
            })
    }

    end() {
        this.managers.forEach(manager => {
            const card = 
            `<div class="card text-white bg-primary col-sm-6">
                <div class="card-header" id="card-header">Manager
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="id">ID: ${manager.id}</li>
                    <li class="list-group-item" id="email">Email: ${manager.email}</li>
                    <li class="list-group-item" id="variable">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>`
            cards.push(card);
        })
        this.engineers.forEach(engineer => {
            const card = 
            `<div class="card text-white bg-primary col-sm-6">
                <div class="card-header" id="card-header">Engineer
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="id">ID: ${engineer.id}</li>
                    <li class="list-group-item" id="email">Email: ${engineer.email}</li>
                    <li class="list-group-item" id="variable">Github: ${engineer.github}</li>
                </ul>
            </div>`
            cards.push(card);
        })
        this.interns.forEach(intern => {
            const card = 
            `<div class="card text-white bg-primary col-sm-6">
                <div class="card-header" id="card-header">Intern
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="id">ID: ${intern.id}</li>
                    <li class="list-group-item" id="email">Email: ${intern.email}</li>
                    <li class="list-group-item" id="variable">School: ${intern.school}</li>
                </ul>
            </div>`
            cards.push(card);
        })
        cards = cards.join('');
        this.generatePage();
    }

    generatePage() {
        const htmlPage = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
        
            <!-- Bootstrap CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        
            <!-- Custom CSS -->
            <link href="style.css" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-md-12 text-center">
                        <h1>Team Profile Generator</h1>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12 text-center">
                        <h2>My team:</h2>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row mt-3" id="cards">
                    ${cards}
                </div>
            </div>
        </body>
        </html>`
        fs.writeFile('./dist/index.html', htmlPage, (err) => console.error(err));
    }
}

module.exports = Application;