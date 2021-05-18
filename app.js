// Requirement variables
const fs= require('fs');
const inquire = require('inquirer');
// const generateInnerHTM = require("./output/index");

//Answer validation
function validateAnswer(answer) {
    if (answer != "") {
        return true;
    } else {
        return "Please answer the question with some kind on input.";
    }
};

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        message: 'What is name of the person you would like to add to the roster?',
        name: 'personName',
        validate: validateAnswer
    },
    {
        type: 'input', 
        message: "What is this person's role?",
        name: 'personRole',
        validate: validateAnswer
    },
    {
        type: 'input', 
        message: 'What is the ID# of the person you would like to add to the roster?',
        name: 'personID',
        validate: validateAnswer 
    },
    {
        type: 'input',
        message: 'If this person is a'
    }
    ];


    // function for inquirer/prompts
    function init() {
        inquire.prompt(questions).then (function (data) {
            createFile("displayhmtl", generateInnerHTM(data));
          });
    }
    
    // // Function call to initialize app
    init();
    function init() {
        inquire.prompt(questions).then (function (data) {
            createFile("README.md", generateMarkdown(data));
          });
    }
    
    // // Function call to initialize app
    init();



