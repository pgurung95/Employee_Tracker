use employeesDB;

INSERT INTO department (name)
VALUES ("Sales"),("Engineering"),("Finance"),("Operations"),("Legal"),("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 75000, 1), ("Engineer", 120000, 2), ("Accountant", 125000, 3), ("Assistant Director", 80000, 4), ("Complaince Officer", 90000, 5), ("Director", 130000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 1, 6), ("Sam", "Smith", 2, 1), ("Robbie", "Roberts", 3, 6), ("Michael", "Smith", 4, 6), ("Matt", "Brown", 5, 6), ("Sean", "Gurung", 6, 0);
