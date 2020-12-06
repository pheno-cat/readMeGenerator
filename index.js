// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "What is the project title?",
    name: "title",
    // validates whether user provided a value
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please provide a title to continue!";
      }
    },
  },

  {
    type: "input",
    message: "Please provide a description of the project.",
    name: "project description",
    // validates whether user provided a value
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please provide a project description to continue!";
      }
    }
  }

  {



    
  }
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    console.log(response.status);
    fs.writeFile(
      "README.md",
      `this is how I am feeling right now, it was the best of times... It was the worst of times. A tale of two cities ${response.status}`,
      (err) => {
        if (err) throw err;
      }
    );
  });
}

// function call to initialize program
init();
