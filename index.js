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
                viewDepartment();
                break;

            case 'Add department': 
                addDepartment();
                break;

            case 'Add role': 
                addRole();
                break;

            case 'Add employee': 
                addEmployee();
                break;

            case 'Update employee role': 
                updateEmployeeRole();
                break;

            case "Exit Application":
                db.connection.end();
                break;

        }
    });
};


async function viewEmployees () {
    let employees = await db.findAllEmployees();
    console.table(employees);
    startMenu();
};

async function viewDepartment () {
    let departments = await db.findAllDepartments();
    console.table(departments);
    startMenu();
  }

async function viewRoles () {
    let roles = await db.findAllRoles();
    console.table(roles);
    startMenu();
};

async function addEmployee() {
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

    .then((answer) => {
        db.updateEmployee(answer);
        startMenu();
    });
}

async function addDepartment() {
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
        .then((answer) => {
            db.updateDepartment(answer);
            startMenu();
        });
}

async function addRole() {
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
        .then((answer) => {
            db.updateRole(answer);
            startMenu();
        });
}

async function updateEmployeeRole() {
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
        .then((answer) => {
            db.updateEmployeeRole(answer);
            startMenu();
        });
}

startMenu();