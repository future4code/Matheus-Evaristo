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

  var cartasUsuario = [comprarCarta(), comprarCarta()] 
  var cartasComputador = [comprarCarta(), comprarCarta()]

  switch (cartasUsuario) {
    case (cartasUsuario.valor[0] + cartasUsuario.valor[1]) === 22:
    const cartasUsuario = [comprarCarta(), comprarCarta()]
    break
  }


console.log(`Usuário - cartas: ${cartasUsuario[0].texto}️ ${cartasUsuario[1].texto}  - pontuação: ${cartasUsuario[0].valor + cartasUsuario[1].valor}`)

console.log(`Computador - cartas: ${cartasComputador[0].texto}️ ${cartasComputador[1].texto}  - pontuação: ${cartasComputador[0].valor + cartasComputador[1].valor}`)


totalUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor

totalComputador = cartasComputador[0].valor + cartasComputador[1].valor

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


