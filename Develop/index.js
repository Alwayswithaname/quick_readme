// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./");
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.createPromptModule([
        {
            type: "input",
            message: "Enter the title of this project: ",
            name: "project_title"
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
            message: "Describe this project: ",
            name: "description",
        },{
            type: "input",
            message: "what is required for installing this project? ",
            name: "npm i",
        },{
            type: "input",
            message: "what will the app do? ",
            name: "ussage",
        },{
            type:"input",
            message:"How can a usser contribute to this repo, if not put N/A: ",
            name:"contribting",
        },{
            type: "input",
            message: "what is your Github accounts URL?: ",
            name: "github"
        },{
            type: "input",
            message: "email: ",
            name: "email"
        },{
            type:"input",
            message:"What are the test commands?: ",
            name:"npm test",
        },{
            type:"input",
            message:"copyright data: ",
            name:"copyright_date"
        },{
            type:"input",
            message:"Name: ",
            name:"author",
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFile(path.join(process.cwd(), fileName), data);
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
