const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");



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
                value: returnMIT()
            }
        ]
    }
    // "MIT", "The Unlicense", "Mozilla Public License 2.0", "Apache License 2.0"

]).then(response =>{
    console.log(response);

const mdTemplate = `
# ${response.title}


## Table of Contents



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



## Sneak Peak Image
{Enter an image file of the application}



## License 
${response.license}
`;

fs.writeFile("README.md", mdTemplate, "utf8", (err) => {
    if (err) throw err;
    console.log("Successfully wrote markdown file");
})

})

function returnMIT (){
    const theMIT = `
    MIT License

    Copyright (c) 2020 
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    `;
    return theMIT;
}