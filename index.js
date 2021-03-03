// Inquirer and Jest packages

const inquirer = require('inquirer');
const jest = require('jest');

// Classes

const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

// Inquirer questions

const managerQuestions = [
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
]

const newEmployeeQuestion = [
    {
        type: "list",
        name: "newEmployee",
        message: "Would you like to add another employee?",
        choices: ["Engineer", "Intern", "No"]
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub username."
    }
]

const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "Enter the intern's school."
    }
]