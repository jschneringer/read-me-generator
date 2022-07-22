// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project name",
    validation: (titleInput) => (titleInput ? true : false),
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description",
    validation: (descriptionInput) => (descriptionInput ? true : false),
  },
  {
    type: "input",
    name: "installInstructions",
    message: "How do you install project",
    validation: (descriptionInput) => (descriptionInput ? true : false),
  },
  {
    type: "input",
    name: "usageInformation",
    message: "How do you use project?",
    validation: (descriptionInput) => (descriptionInput ? true : false),
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "How can someone contribute to your project?",
    validation: (descriptionInput) => (descriptionInput ? true : false),
  },
  {
    type: "input",
    name: "tests",
    message: "Are there tests for project",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Done!");
  });
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions).then((answers) => {
      console.log(answers);
      const returnedString  = generateMarkdown(answers);
      writeToFile("readme.md", returnedString);
   })

}

// Function call to initialize app
init();
