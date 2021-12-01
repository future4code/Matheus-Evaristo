// Exercícios de interpretação de código
// 1.
// a) Testa se o número é divisível por 2
// b) Qualquer número que quando divido por 2 tem como resto 0
// c) Para todos os outros casos onde o resto da divisão é diferente de 0

// 2.
// a) O código retorna ao usuário o preço da fruta escolhida.
// b) O preço da fruta maçã é  R$ 2.25
// c) O código continuará rodando até o default.

// 3.

// a) Está criand uma variável que recebe um valor do usuário por meio do prompt, esse valor também já vem transformado em número.

// b) Se for 10 - Esse número passou no teste
//    Se for -10 - nada acontecerá

// c) sim pois o console.log no final do código não poderá imprimir a mensagem secreta já que ela está dentro do if.

// Exercícios de Escrita de Código
// 1.
// var idade = Number(prompt("Qual é a sua idade?"))

// if (idade >= 18) {
//    console.log("Você pode dirigir!")
// }

// else {
//   console.log("Você naõ pode dirigir ainda!")
// }

// 2.

// var turno = prompt("Qual seu turno de estudo? Digite 'M' para Matutino, 'V' para vespertino e 'N' para noturno:")

// if (turno === "M") {
//   console.log("Bom dia!")
// }

// else if (turno === "V") {
//   console.log("Boa tarde!")
// }

// else if (turno === "N") {
//   console.log("Boa noite!")
// }

// 3.

// var turno = prompt("Qual seu turno de estudo? Digite 'M' para Matutino, 'V' para vespertino e 'N' para noturno:")

// switch (turno) {
//   case 'M':
//   console.log("Bom dia!")
//   break

//    case 'V':
//   console.log("Boa tarde!")
//   break

//    case 'N':
//   console.log("Boa noite!")
//   break
// }

// 4.

// var filme = prompt("Qual gênero de filme você quer assistir?")

// var preco = prompt("Quanto vai custar o ingresso?")
// preco = Number(preco)
// filme = filme.toUpperCase()

// if (filme === "FANTASIA" && preco < 15) {
//   console.log("Bom filme!")

// }

// else {
//   console.log("Escolha outro filme :(")
// }

// DESAFIOS
// 1. 

//  var filme = prompt("Qual gênero de filme você quer assistir?")

// var preco = prompt("Quanto vai custar o ingresso?")
// preco = Number(preco)
// filme = filme.toUpperCase()

// if (filme === "FANTASIA" && preco < 15) {
//   var lanchinho = prompt("Qual vai ser o seu lanchinho?")


//   console.log("Bom filme!")
//   console.log(`Aproveite o seu ${lanchinho}!`)

// }

// else {
//   console.log("Escolha outro filme :(")
// }

// 2.

nomeCompleto = prompt("Qual seu nome completo?")

tipoDejogo = prompt("Jogo internacional ou doméstico: responda 'IN' para internacional e 'DO' para doméstico.")

etapaDoJogo = prompt("Etapa do jogo: responda 'SF' para semi-final, 'DT' para decisão de terceiro lugar e 'FI' para final.")

categoria = prompt("Categoria 1, 2, 3 ou 4?")

quantidadeIngressos = prompt("Quantos ingressos você deseja?")

tipoDejogo = tipoDejogo.toUpperCase()
etapaDoJogo = etapaDoJogo.toUpperCase()
categoria = Number(categoria)
quantidadeIngressos = Number(quantidadeIngressos)

console.log("---Dados da Compra---")
console.log(`Nome do cliente: ${nomeCompleto}`)

if (tipoDejogo === "IN") {
  console.log(`Tipo de jogo: Internacional`)
}
else if (tipoDejogo === "DO") {
  console.log(`Tipo de jogo: Nacional`)
}

switch (etapaDoJogo) {
  case "SF": 
  console.log("Etapa do jogo: Semi-final")
  break

   case "DT": 
  console.log("Etapa do jogo: Decisão do 3º lugar")
  break

   case "FI": 
  console.log("Etapa do jogo: Final")
  break
}

console.log(`Categoria: ${categoria}`)

console.log(`Quantidade de ingressos: ${quantidadeIngressos}`)

var precoIngresso

if (etapaDoJogo === "SF" && categoria === 1) {
  precoIngresso = 1320.00
}
else if (etapaDoJogo === "SF" && categoria === 2) {
  precoIngresso = 880.00
}
else if (etapaDoJogo === "SF" && categoria === 3) {
  precoIngresso = 550.00
}
else if (etapaDoJogo === "SF" && categoria === 5) {
  precoIngresso = 220.00
}

else if (etapaDoJogo === "DT" && categoria === 1) {
  precoIngresso = 660.00
}
else if (etapaDoJogo === "DT" && categoria === 2) {
  precoIngresso = 440.00
}
else if (etapaDoJogo === "DT" && categoria === 3) {
  precoIngresso = 330.00
}
else if (etapaDoJogo === "DT" && categoria === 5) {
  precoIngresso = 170.00
}

else if (etapaDoJogo === "FI" && categoria === 1) {
  precoIngresso = 1680.00
}
else if (etapaDoJogo === "FI" && categoria === 2) {
  precoIngresso = 1320.00
}
else if (etapaDoJogo === "FI" && categoria === 3) {
  precoIngresso = 880.00
}
else if (etapaDoJogo === "FI" && categoria === 5) {
  precoIngresso = 330.00
}

if (tipoDejogo === "IN") {
  precoIngresso = precoIngresso * 4.10
  precoIngresso = precoIngresso.toFixed(2)
}

var total = 1 * quantidadeIngressos 
console.log("---Valores---")
console.log(`Valor do ingresso: R$ ${precoIngresso}`)
console.log(`Valor total: R$ ${precoIngresso * total}`)