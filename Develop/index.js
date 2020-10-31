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
        message: "Please enter contribution guidelines",
        name: "contributions"
    },
    {
        type: "input",
        message: "Please enter examples on how to test your application.",
        name: "tests"
    },
    {
        type: "checkbox",
        message: "Choose a license for your application",
        name: "license",
        choices:["MIT", ]
    }

])




// const mdTemplate = `
// # { Project Title Here }



// ## Description
// { Description }



// ## Installation of Repo
// { Instructions here in list format }



// ## Table of Contents
// { Table of Contents here }



// ## Usage
// { how to use here }




// ## Credits:



// ## Tests 



// ## Contributing 



// ## Questions
// { Github Profile }
// { Email here }


// ## Deployed Site Link
// (Safe Music Lovers) https://ayannaaziz.github.io/Project-1/



// ## Sneak Peak
// ![Home Page](sml.png)



// ## License 
// { License information here }
// `;

// fs.writeFile("README.md", mdTemplate, "utf8", (err) => {
//     if (err) throw err;
//     console.log("Successfully wrote markdown file");
// })

// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
