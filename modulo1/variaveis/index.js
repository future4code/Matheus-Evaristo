// 1. 10 5
// 2. 10 10 10
// 3. let horasPorDia = prompt("Quantas horas você trabalha por dia?") 
//    let pagamentoPorDia  = prompt("Quanto você recebe por dia?") 
//    alert(`Voce recebe ${pagamentoPorDia/horasPorDia} por hora`)


let nome
let idade

// console.log (typeof idade, typeof nome)

// Aparece escrito "undefined" para ambas pois nenhuma das váriaveis tiveram seus conteúdos declarados.

nome = prompt("Qual é o seu nome ?")
idade = prompt("Qual é a sua idade?")

// console.log (typeof idade, typeof nome)

// Ambas as variáveis são do tipo string

console.log("Olá " + nome + ", " + "você tem " + idade + " anos.")

var resposta1 = prompt("Você tomou café hoje?")
var resposta2 = prompt("Você bebeu água hoje?")
var resposta3 = prompt("Você precisou dirigir hoje?")

console.log ("Você tomou café hoje? " + "- " + resposta1)
console.log ("Você bebeu água hoje? " + "- " + resposta2)
console.log ("Você precisou dirigir hoje? " + "- " + resposta3)

let a = 10
let b = 25
let c = 10

a = b
b = c

console.log (a, b)

var numero1 = prompt("Primeiro número da soma")
var numero2 = prompt("Segundo número da soma")

a = Number(numero1)
b = Number(numero2)

var x = a + b

console.log("O valor da soma entre " + numero1 + " e " + numero2 + " é: " + x)

var multiplo1 = prompt("Primeiro número da multiplicação")
var multiplo2 = prompt("Segundo número da multiplicação")

c = Number(multiplo1)
d = Number(multiplo2)

var y = c * d

console.log("O valor da multiplicação entre " + multiplo1 + " e " + multiplo2 + " é: " + y)

