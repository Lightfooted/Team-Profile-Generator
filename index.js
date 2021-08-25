const inquirer = require('inquirer');
const generatePage = require('./src/template');
const writeFile = require('./src/generate-site');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//Start with Manager

const enterManager = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the Managers NAME? (Required!)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('The Manager must have a NAME!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Managers ID? (Required!)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('The Manager must have an ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Managers EMAIL? (Required!)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('The Manager must have an EMAIL!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Managers OFFICE NUMBER? (Required!)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('The Manager must have an OFFICE NUMBER!');
                return false;
            }
        }
    }
 ])
};

//Employee Section

const addEmployee = (teamData) => {
    console.log(`
  -----------------
  Add Employees
  -----------------
  `);
    if (!teamData.teamArr) {
        teamData.teamArr = [];
    }
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'role',
          message: 'Please select the role of this Employee.',
          choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the Employees NAME? (Required!)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('The Employee must have a NAME!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Employees ID? (Required!)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('The Employee must have an ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Employees EMAIL? (Required!)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('The Employee must have an EMAIL!');
                    return false;
                }
            }
        },
        {
            //Engineer ONLY
            type: 'input',
            name: 'github',
            message: 'What is the Employees GITHUB USERNAME? (Required!)',
            when: (engineerInput) => engineerInput.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('The Employee must have a GITHUB USERNAME!');
                    return false;
                }
            }
        },
        {
            //Intern ONLY
            type: 'input',
            name: 'school',
            message: 'What is the name of the Interns Educational Institution? (Required!)',
            when: (internInput) => internInput.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('You must enter the name of the Interns school!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to ADD another Employee?',
            default: false
          }
      ])
      //Note to self: Found through portfolio generator lesson
      .then(employeeData => {
        teamData.teamArr.push(employeeData);
        if (employeeData.confirmAddEmployee) {
          return addEmployee(teamData);
        } else {
          return teamData;
        }
      });
  };

enterManager()
    .then(addEmployee)
    .then(teamArr => {
    return generatePage(teamArr);
    })
    .then(pageHTML => {
    return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
      });