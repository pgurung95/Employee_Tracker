const connection = require("./connection");

class DB {

    constructor(connection){
        this.connection = connection;
    }

    viewEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

    viewDepartments() {
        return this.connection.query(
            "SELECT department.name FROM department"
        );
    }

    viewRoles() {
        return this.connection.query(
            "SELECT role.title, role.salary, role.department_id FROM role"
        );
    }

    addEmployee(employee) {
        return this.connection.query(
            "Would you like to add into employee set?", employee
        );
    }

    addDepartment(department) {
        return this.connection.query(
            "Would you like to add department set?", department
        );
    }

    addRole(role) {
        return this.connection.query(
            "Would you like to add role set?", role
        );
    }
    
    updateEmployee() {
        return this.connection.query(

        );

    }


}

module.exports = new DB(connection);