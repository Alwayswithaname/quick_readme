// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.createPromptModule([
        {
            type: "input",
            message: "Enter the title of this project: ",
            name: "project_title"
        },{
            typle: "list",
            name: "license",
            message: "what kind of license will this project have? ",
            choices: ["MIT", "ISC", "Apache2.0" ],
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Must select a license...");
                    return false;
                }
            },
        },

    ])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
