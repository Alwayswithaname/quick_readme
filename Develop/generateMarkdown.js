const generateMarkdown = require("../../UCB-VIRT-FSF-PT-07-2022-U-LOLC/09-NodeJS/02-Challenge/Main/utils/generateMarkdown");

function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![Github license]`
    }
    return " ";
}

function renderLicenseLink(license){
    if (license !== "None") {
        return `\n* [license](#license)\n`
    }
    return ' ';
}

function renderLicenseSection(license) {
    if (license !== 'None') {
        return ` ## license
        
    this project is licensed under the ${license} license.`;
    }
    return '';
}

 function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    
    ## Description
    
    ${data.description} 
    
    ## Table of Contents
    * [Instalation](#instalation)
    
    * [Usage](#usage)
    ${renderLicenseLink(data.license)}
    * [Contributing](#contributing)
    
    * [Test](#tests)
    
    * [Questions](#questions)
    
    
    ## Installation
    
    To install necessary dependencies, run the following command:
    
    \`\`\`
    ${data.installtion}
    \`\`\`
    
    ## Usage
    
    ${data.usage}
    
    ${renderLicenseSection(data.license)}
    
    ## Contributing
    
    ${data.contributing}
    
    ## Test 
    
    to run test, run the following command: 
    
    \`\`\`
    ${data.test}
    \`\`\`
    
    #Qestions
    
    If you have any questions aboput the repo, open an issue or contact mme at ${
        data.email
    }. you can find more of my work at [${data.github}](https://github.com/${
        data.github
    }/).
    
`;

 }

 module.exports = generateMarkdown;