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

 const generateMarkdown = data => {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    
    ## Description
    
    ${data.description} 
    
    ## Table of Contents
    * [installation](#installation)
    
    * [Usage](#usage)
    ${renderLicenseLink(data.license)}
    * [Contributing](#contributing)
    
    * [Test](#tests)
    
    * [Questions](#questions)
    
    
    ## Installation
    
    To install necessary dependencies, run the following command:
    
    \`\`\`
    ${data.installation}
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
    
    ##Qestions
    If you have any questions aboput the repo, open an issue or contact me at ${
        data.email
    }. you can find more of my work at [${data.github}](https://github.com/${
        data.github
    }/).
    
`;

 }

 module.exports = generateMarkdown;