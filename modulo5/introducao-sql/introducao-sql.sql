#USE `guimaraes-4211408-matheus-evaristo`

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"001",
"Tony Ramos",
40000,
"1948-08-25",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Camila Pitanga",
  400000,
  "1949-04-18", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
 "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"006",
"Marcos Palmeira",
140000,
"1963-08-13",
"male"
);

#SELECT * FROM Actor

#SELECT id, salary from Actor

#SELECT id, name FROM Actor WHERE gender = "male"

#SELECT * FROM Actor WHERE gender = "female"

#SELECT salary FROM Actor where name = "Tony Ramos"

#SELECT * FROM Actor WHERE gender = "invalid"

#SELECT id, name, salary FROM Actor WHERE  salary <= 500000

#SELECT id, name FROM Actor WHERE id = "002"

SELECT * FROM Actor WHERE (name LIKE 'A%' OR name LIKE 'J%') AND salary > 300000