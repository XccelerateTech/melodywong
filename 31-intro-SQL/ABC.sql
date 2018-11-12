-- Exercise A

CREATE TABLE stock (
    id SERIAL primary key,
    name VARCHAR(255) not null,
    description VARCHAR(255),
    quantity integer,
    price decimal
    );


-- Exercise B

DROP TABLE stock;


-- Exercise C
EMPLOYEE_ID | FIRST_NAME | LAST_NAME | SALARY | CONTRACT_LENGTH
---------------------------------------------------------------
    1       | Steven     | King      | 10000  | 3
    2       | Neena      | Kochhar   | 8000   | 2
    3       | David      | Austin    | 12000  | 2
    4       | Nancy      | Greenberg | 3000   | 1

-- Write a query that returns the First and Last Name of every employee earning between 5-11k
SELECT first_name,last_name FROM employee WHERE salary>5000 AND salary<11000;

-- Which employees are employed for less than 2 years?
SELECT * FROM employee WHERE contract_length<2;

-- Add two more employees to the table, make up the data.
INSERT into employee (FIRST_NAME, LAST_NAME, SALARY, CONTRACT_LENGTH) VALUES ('Sam','Smith',30000,1);
INSERT into employee (FIRST_NAME, LAST_NAME, SALARY, CONTRACT_LENGTH) VALUES ('Katy','Kim',18000,3);

-- Nancy Greenberg got a new contract, 2 years, 8000 salary. Update the table.
UPDATE employee SET contract_length = 2 WHERE first_name = 'Nancy';

-- Sort the table by salary, from high to low. 
SELECT * FROM employee ORDER BY salary DESC;