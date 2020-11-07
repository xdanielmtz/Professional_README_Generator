// modules required
const fs = require("fs");
const inquirer = require("inquirer");
const licenses = require("./licenses.js");

// using inquirer to prompt the user with series of questions 
inquirer.prompt([
    {
        type: "input",
        message: "What is your project title?",
        name: "title"

    },
    {
        type: "input",
        message: "Please enter your project description.",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter installation instructions.",
        name: "instructions"
    },
    {
        type: "input",
        message: "Please provide examples and or instructions for usage.",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter credits for this project",
        name: "credits"
    },
    {
        type: "input",
        message: "Please enter contribution guidelines",
        name: "contributions"
    },
    {
        type: "input",
        message: "Please enter examples on how to test your application.",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email so people can contact you for questions?",
        name: "questions"
    },
    {
        type: "checkbox",
        message: "Choose a license for your application",
        name: "license",
        choices:[
            {
                name: "MIT",
                value: licenses.returnMIT()
            },
            {
                name: "The Unlicense",
                value: licenses.returnUnlicense()
            },
            {
                name: "Mozilla Public License 2.0",
                value: licenses.theMozilla()

            },
            {
                name: "Apache License 2.0",
                value: licenses.returnApache()
            }
        ]
    }
    // After the questions are complete, this is the code that will execute:
]).then(response =>{
    // Used template literals to make the html template 
    const mdTemplate = `
# ${response.title}



## Table of Contents
* [Description](#description)
* [Installation](#installation-of-repo)
* [Usage](#usage)
* [Credits](#credits)
* [Tests](#tests)
* [Contributing](#contributing)
* [Questions](#questions)
* [Deployed Site Link](#deployed-site-link)
* [Walk-through Vid](#walk-through-vid)
* [License](#license)



## Description
${response.description}



## Installation of Repo
${response.instructions}



## Usage
${response.usage}



## Credits:
${response.credits}



## Tests 
${response.tests}



## Contributing 
${response.contributions}



## Questions
https://github.com/${response.github}
${response.questions}



## Deployed Site Link
{Enter your deployed site link}



## Walk-through Vid
{Enter a gif of the application}



## License 
${response.license}
`;

// Used fs to write the actual readME file. It takes in the 'mdTemplate' 
fs.writeFile("README.md",mdTemplate, "utf8", (err) => {
    if (err) throw err;
    console.log("Successfully wrote markdown file");
})

})