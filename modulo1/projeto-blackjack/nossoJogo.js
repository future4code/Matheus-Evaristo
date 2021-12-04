/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {

  const cartaUsuario1 = comprarCarta(); 
  const cartaUsuario2 = comprarCarta(); 

  const cartaComputador1 = comprarCarta(); 
  const cartaComputador2 = comprarCarta(); 

console.log(`Usuário - cartas: ${cartaUsuario1.texto}️ ${cartaUsuario2.texto}  - pontuação: ${cartaUsuario1.valor + cartaUsuario2.valor}`)

console.log(`Computador - cartas: ${cartaComputador1.texto}️ ${cartaComputador2.texto}  - pontuação: ${cartaComputador1.valor + cartaComputador2.valor}`)

totalUsuario = cartaUsuario1.valor + cartaUsuario2.valor

totalComputador = cartaComputador1.valor + cartaComputador2.valor
 if (totalUsuario > totalComputador) {
    console.log("O Usuário ganhou!")
 }

 else if (totalUsuario === totalComputador){
    console.log("Empate")
 }

 else if (totalUsuario < totalComputador){
    console.log("O Computador ganhou!")
 }

} else {
  console.log("O jogo acabou")
	// o que fazer se o usuário clicar "cancelar"
}