// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");

const questions = () =>
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the project title?",
        name: "title",
        // validates whether user provided a value
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please provide an input to continue!";
          }
        },
      },

      {
        type: "input",
        message: "Please provide a description of the project.",
        name: "description",
        // validates whether user provided a value
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please provide an input to continue!";
          }
        },
      },

      {
        type: "input",
        message: "How do you install your app?",
        name: "installation",
        // validates whether user provided value
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please provide an input to continue!";
          }
        },
      },

      {
        type: "input",
        message: "How is it used?",
        name: "usage",
        // validates whether user provided value
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please provide an input to continue!";
          }
        },
      },

      {
        // list of licenses
        type: "list",
        message: "What license did you use?",
        name: "license",
        choices: [
          "The MIT License",
          "The GPL License",
          "Apache License",
          "GNU License",
          "N/A",
        ],
        // validates whether user provided value
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please provide an input to continue!";
          }
        },
      },

      {
        type: "input",
        message: "Do you have contribution guidelines?",
        name: "contributing",
        // validates whether user provided value
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please provide an input to continue!";
          }
        },
      },

      {
        type: "input",
        message: "Do you have test instructions?",
        name: "tests",
        // validates whether user provided value
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please provide an input to continue!";
          }
        },
      },

      {
        type: "input",
        message: "GitHub username: ",
        name: "questions",
        // validates whether user provided value
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please provide an input to continue!";
          }
        },
      },

      {
        type: "input",
        message: "E-mail: ",
        name: "email",
      },
    ])
    .then((answers) => {
      console.log(JSON.stringify(answers, null, " "));
      return answers;
    });

const init = async () => {
  answers = await questions();
  var markdown = `# ${answers.title}
      
    ### Description
    ${answers.description}

    ### Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ### Installation
    ${answers.install}

    ### Usage
    ${answers.usage}

    ### License
    ${answers.license}

    ### Contributing
    ${answers.contributing}

    ### Tests
    ${answers.tests}

    ### Questions
    GitHub: https://github.com/${answers.questions}

    E-mail: ${answers.email}


    `;
  console.log(markdown);

  fs.writeFile("README.md", markdown, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("ReadMe successful!");
  });
};

// function to write README file
// function writeToFile(fileName, data) {}

// function to initialize program
// function init() {
//   inquirer.prompt(questions).then(function (response) {
//     console.log(response.status);
//     fs.writeFile("README.md", `${response.status}`, (err) => {
//       if (err) throw err;
//     });
//   });
// }

// function call to initialize program
init();
