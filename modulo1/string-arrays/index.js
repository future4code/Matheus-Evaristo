// Exercícios de interpretação de código
// 1.
// a. undefined
// b. null
// c. 11
// d. 3
// e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

/* 2. SUBI NUM ÔNIBUS EM MIRROCOS 27 */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1.

/* var emailDoUsuario = prompt("Qual o Seu Email?")
var nomeDoUsuario = prompt("Qual o Seu nome?")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso! Seja bem vinda(o), ${nomeDoUsuario}!`) */

//2.

//var comidas = ["pizza", "hamburger", "pastel", "farofa", "batata frita"]
//console.log(`Estas são minhas comidas favoritas: ${comidas}`)

//3. 

var listaDeTarefa = []



listaDeTarefa.push(prompt("Qual as sua tarefa 1?"))
listaDeTarefa.push(prompt("Qual as sua tarefa 2?"))
listaDeTarefa.push(prompt("Qual as sua tarefa 3?"))

console.log(listaDeTarefa)

listaDeTarefa.splice(Number(prompt("Digite o número da tarefa que concluiu: 0(tarefa 1), 1(tarefa 2), 2(tarefa 3)")))

console.log(`Ainda faltam as tarefas: ${listaDeTarefa}`)