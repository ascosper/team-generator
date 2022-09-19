const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
//
const employee = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your managers name?'
      },
      {
        type:'input',
        name: 'employeeID',
        message: 'what is your managers employee ID?'
      },
      {
        type:'input',
        name: 'email',
        message: 'what is your managers email?'
      },
      {
        type:'input',
        name: 'number',
        message: 'what is your managers office number?'
      }
    ]);
  };
  
  employee().then(answers => console.log(answers));