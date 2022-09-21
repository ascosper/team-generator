const inquirer = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
//
const manager = () => {
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
      },
      {
        type:'confirm',
        name: 'Add Another',
        message: 'Would you like to add an engineer, employee, or intern',
        defaut: false
      }
      

    ])
  }

  

  const addEmployee = employeeData => {
    console.log(`
=================
Add a New Teammate
=================
`);
employeeData.addEmployee = []
    return inquirer.prompt([
      
        {
            type: 'input',
            name: 'name',
            message: 'What is your employees name?'
          },
          {
            type:'input',
            name: 'employeeID',
            message: 'what is your employees employee ID?'
          },
          {
            type:'input',
            name: 'email',
            message: 'what is your employee email?'
          },
          {
            type:'confirm',
            name: 'Add Another',
            message: 'Would you like to add an engineer, employee, or intern',
            defaut: false
          }
    ])
  }
  

  //   .then(employeeData => {
  //     employeeData.(employeeData);
  //     if (employeeData.confirmAddEmployee) {
  //       return promptProject(employeeData);
  //     } else {
  //       return employeeData;
  //     }
  //   });
  // }
  
  
 

  const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Engineers name?'
          },
          {
            type:'input',
            name: 'EngineerID',
            message: 'what is your Engineer employee ID?'
          },
          {
            type:'input',
            name: 'email',
            message: 'what is your Engineer email?'
          },
          {
            type:'input',
            name: 'Engineergithub',
            message: 'what is your Engineers Github?'
          },
          {
            type:'confirm',
            name: 'Add Another',
            message: 'Would you like to add an engineer, employee, or intern',
            defaut: false
          }
    ])
  }

  
  const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Interns name?'
          },
          {
            type:'input',
            name: 'InternID',
            message: 'what is your Interns employee ID?'
          },
          {
            type:'input',
            name: 'email',
            message: 'what is your Interns email?'
          },
          {
            type:'input',
            name: 'school',
            message: 'what is your Interns school?'
          },
          {
            type:'confirm',
            name: 'Add Another',
            message: 'Would you like to add an engineer, employee, or intern',
            defaut: false
          }
    ])
  }
  manager()
  .then(addEmployee)
  .then(employeeAnswers => {console.log(employeeAnswers)})
  .then(addEngineer)
  .then(engineerAnswers => {console.log(engineerAnswers)})
  .then(addIntern)
  .then(InternAnswers => {console.log(InternAnswers)})
