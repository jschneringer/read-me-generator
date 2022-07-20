// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
   
   { type: "input",
    name: "title",
    message: "What is the project name",
    validation: titleInput => titleInput ? true : false
   },
    { type: "input",
    name: "description",
    message: "What is your project description",
    validation: descriptionInput => descriptionInput ? true : false

      },
   {
      type: "input",
      name: "install instructions",
      message: "How do you install project",
      validation: descriptionInput => descriptionInput ? true : false
   }
   
   
   ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
