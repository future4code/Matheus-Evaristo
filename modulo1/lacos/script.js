// Exercícios de interpretação de código

// 1.
// O codigo acrescenta faz uma soma enquanto 'i' for menor que 5, somando let valor a i + valor toda vez que o laço executado.

// valor = (valor + i)
// valor = 0 + 0
// valor = 0 + 1
// valor = 1 + 2
// valor = 3 + 3
// valor = 6 + 4

// 2.
// a) Serão impressos do array apenas os números que são maiores que 19

// b) Sim, o 'for... of' é suficiente. Para imprimir um indice é necessário colocar o comando 'console.log(numero) dentro do bloco do for... of.

// 3. Será impresso na tela o os seguintes caracteres:
// *
// **
// ***
// ****
// Exercícios de escrita de código
// 1.

let pets = Number(prompt("Quantos bichinhos você tem?"))

if (pets === 0) {
  console.log("Que pena! Você pode adotar um pet!")
}
else if (pets > 0) {

  var nomesPets = []
for (i = 1; i <= pets; i++)
  
  nomesPets.push(prompt(`Qual o nome do seu pet número ${i}`))

  
}
console.log(nomesPets)

// 2.