#USE `guimaraes-4211408-matheus-evaristo`

#SELECT * FROM Movie

#SET SQL_SAFE_UPDATES = 0;

#1-A - Irá apagar A coluna Salário

#1-B - Modificará o limite de caractéres para registros na coluna 'gender' para '6'

#1-C - ALTER TABLE Actor MODIFY gender VARCHAR(100);

SELECT * FROM Actor;

UPDATE Actor 
SET name = "Claudia Raia", birth_date ='1966-12-23'
WHERE id = 003;

UPDATE Actor 
SET name = "Dira Paes", salary = 80000, birth_date = '1969-06-30'
WHERE id = 005;

DELETE FROM Actor WHERE name = "Claudia Raia";

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;