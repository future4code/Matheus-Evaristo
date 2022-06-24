### Exercício 1

A - É uma chave primária de outra tabela que pode ser usadada como referência numa relação entre duas tabelas

B - SELECT * FROM Rating;

C - Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`guimaraes-4211408-matheus-evaristo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

D - ALTER TABLE Movies DROP COLUMN rate;

E. - Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`guimaraes-4211408-matheus-evaristo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
A linha não pôde ser apagada porque está relacionada à tabela Rating.

```
USE `guimaraes-4211408-matheus-evaristo`;
SELECT * FROM Movies;
SELECT * FROM Rating;
```