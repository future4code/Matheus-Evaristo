// # EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO #
//  1. a. FALSE
//     b. FALSE
//     c. TRUE
//     d. BOOLEAN

//  2. Quando se usa o comando prompt a variável guarda a entrada do usuário como string.
//  A soma feita dessa forma irá apenas concatenar as duas strings em somar os números.

//  3. Para que a soma funcione é preciso alterar o tipo de dado dentro da variável usando o comando Number() 

// const soma = Number(primeiroNumero) + Number(segundoNumero)

// # EXERCÍCIOS DE ESCRITA DE CÓDIGO # "Sua Idade é maior do que a do seu amigo? -" 

/*1.

var idadeUser = prompt("Qual a sua idade?")
var idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo(a)?")

idadeUser = Number(idadeUser)
idadeMelhorAmigo = Number(idadeMelhorAmigo)

console.log("Sua Idade é maior do que a do seu amigo? -" + (idadeUser > idadeMelhorAmigo))
console.log("A diferença de idade entre você e seu amigo é de " + (idadeUser - idadeMelhorAmigo) + " anos")*/

//2.
//var numeroPar = Number(prompt("Insira um número par: "))
//console.log(numeroPar % 2)

//Se for número par o resultado do resto é sempre 0.
//Se for número ímpar o resultado do resto é sempre 1.

// 3. 
//suaIdade = Number(prompt("Qual a sua idade?"))
//console.log("Sua idade em meses é: " + suaIdade * 12)
//console.log("Sua idade em dias é: " + suaIdade * 365)
//console.log("Sua idade em horas é: " + (suaIdade * 365) * 12)

/* var num1 = Number(prompt("Insira um número"))
var num2 = Number(prompt("Insira mais um número"))

console.log(num1 + " é maior que " + num2 + "? -" + (num1 > num2))
console.log(num1 + " é igual a " + num2 + "? -" + (num1 === num2))
console.log(num1 + " é divisível por " + num2 + "? -" + (num1 % num2 === 0))
console.log(num2 + " é divisível por " + num1 + "? -" + (num2 % num1 === 0))
 */

// --------------- DESAFIOS --------------------

// 1.
/* b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter */

/* var kelvin1 = 77
var celsius1 = 80
var celsius2 = 30

kelvin1 = (kelvin1 - 32)*(5/9) + 273.15
celsius1 = (celsius1)*(9/5) + 32

console.log ("77°F é igual a " + kelvin1 + "°K.")
console.log ("80°C é igual a " + celsius1 + "°F.")
console.log ("30°C é igual a " + (celsius2 = (celsius2)*(9/5) + 32) + "°F e " + (celsius2 = (celsius2 - 32)*(5/9) + 273.15) + "°K.") */

/* var casa1 = 280 * 0.05
var valorComDesconto = casa1 - (casa1 * 0.15)
console.log("Uma casa que consome 280 quilowatt-hora irá pagar " + casa1 + " reais.")
console.log("Com 15% de desconto o valor a se pagar é de " + valorComDesconto + " reais.") */

pesoLb = 20
pesoOz = 10.5
distanciaMi = 100
distanciaPe = 50
volumeGal = 103.56
volumeXic = 450

console.log("20lb equivalem a " + (pesoLb / 2.2046) + "kg.")
console.log("10.5oz equivalem a "+(pesoOz / 35.274)) + "kg."
console.log("100 milhas equivalem a " + (distanciaMi * 1609.34) + " metros.")
console.log("50ft equivalem a " + (distanciaPe / 3.281) + " metros.")    
console.log("103.56gal equivalem a " + (volumeGal * 3.785) + " litros.")
console.log("450 xícaras equivalem a " + (volumeXic * 6) / 25 + " litros.")

var conversao = Number(prompt("Digite um valor em libras para ser convertido em Kg"))
console.log(conversao + "lb é igual a " + (conversao / 2.2046) + "kg.")