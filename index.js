const inquirer = require("inquirer");
const db = require("./db/queries");
const connection = require("./db/connection");


const startMenu = () => {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all employees',
            'View all roles',
            'View all departments',
            'Add department',
            'Add role',
            'Add employee',
            'Update employee role',
        ],
    })

        .then((answer) => {
            switch (answer.action) {
                case 'View all employees':
                    viewEmployees();
                    break;

                case 'View all roles':
                    viewRoles();
                    break;

                case 'View all departments':
                    viewDepartments();
                    break;

                case 'Add employee':
                    addEmployee();
                    break;

                case 'Add department':
                    addDepartment();
                    break;

                case 'Add role':
                    addRole();
                    break;

                case 'Update employee role':
                    updateEmployeeRole();
                    break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;

            }
        });
};


async function viewEmployees () {
    let employees = await db.viewEmployees();
    console.table(employees);
    startMenu();
};

async function viewDepartments () {
    let departments = await db.viewDepartments();
    console.table(departments);
    startMenu();
  }

async function viewRoles () {
    let roles = await db.viewRoles();
    console.table(roles);
    startMenu();
};




async function addEmployee() {
    let employee = await
    inquirer.prompt([
        {
            name: 'first name',
            type: 'input',
            message: "What is the employee's first name?"
        },

        {
            name: 'last name',
            type: 'input',
            message: "What is the employee's last name?"
        },

        {
            name: 'role_id',
            type: 'input',
            message: "What is the employee's role id?"
        },

        {
            name: 'manager_id',
            type: 'input',
            message: "What is the employee's manager id?"
        }
    ])
    let employees = await db.addEmployee(employee);
    console.log(employees.affectedRows + " employee added.");
    startMenu();
};

async function addDepartment() {
    let department = await
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the department you would like to add?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the department's id?",
        }
    ])
    let employees = await db.addDepartment(department);
    console.log(employees.affectedRows + " department added.");
    startMenu();
};

async function addRole() {
    let role = await inquirer
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the role you would like to add?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the id of this role?",
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary for this role?",
        },
        {
            type: "input",
            name: "departmentId",
            message: "What is the department id for this role?",
        },
    ])

    let employees = await db.addRole(role);
    console.log(employees.affectedRows + " role added.");
    startMenu();

};

async function updateEmployeeRole() {
    let employee = await inquirer
    inquirer
        .prompt([
            {
                type: "input",
                name: "id",
                message: "What is the employee's id you would like to udpate?",
            },
            {
                type: "input",
                name: "role",
                message: "What is the new role of the employee?",
            },
        ])
        let employees = await db.updateEmployeeRole(employee);
        console.log(employees.affectedRows + " employee updated.");
        startMenu();
};

startMenu();