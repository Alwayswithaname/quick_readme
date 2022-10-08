// TODO: Include packages needed for this application
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            message: "what is your Github accounts URL?",
            name: "github",
        },{
            type: "input",
            message: "email? ",
            name: "email",
        },{
            type: "input",
            message: "what is your project name?",
            name: "title",
        },{
            type: "input",
            message: "Describe this project",
            name: "description",
        },{
            type: "list",
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
        },{
            type: "input",
            message: "what is required for installing this project? ",
            name: "installation",
            default: 'npm i',
        },{
            type:"input",
            message:"What are the test commands?: ",
            name:"test",
        },{
            type: "input",
            message: "what will the app do? ",
            name: "usage",
        },{
            type:"input",
            message:"How can a user contribute to this repo, if not put N/A: ",
            name:"contributing",
        },{
            type: "input",
            message:"do you have any questions?",
            name:"questions",
        }
    
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating REAMDME...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses}));
    });
}
// Function call to initialize app
init();
