use employeesDB;

INSERT INTO department (name)
VALUES ("Sales"),("Engineering"),("Finance"),("Operations");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1), ("Salesperson", 70000, 2), ("Engineer", 120000, 3), ("Accountant", 125000, 4), ("Associate Director", 90000, 5), ("Director", 130000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 1, 6), ("Sam", "Smith", 2, 1), ("Robbie", "Roberts", 3, 6), ("Michael", "Smith", 4, 6) ("Matt", "Brown", 5, 6), ("Sean", "Gurung", 6, );
