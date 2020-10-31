const fs = require("fs");
const inquirer = require("inquirer");


const mdTemplate = `
// # { Project Title Here }



// ## Description
// { Description }



// ## Installation of Repo
// { Instructions here in list format }



// ## Table of Contents
// { Table of Contents here }



// ## How to Use { Project title here }
// { how to use here }



// ## Upon closer viewing this application, you will notice: 



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
`;

fs.writeFile("README.md")

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
