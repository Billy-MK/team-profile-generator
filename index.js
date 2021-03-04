// Inquirer and Jest packages

// const inquirer = require('inquirer');
// const jest = require('jest');

// Classes

const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Application = require('./lib/application');

var employees = [];
const application = new Application(employees);

application.manager();