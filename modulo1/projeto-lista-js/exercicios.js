// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A

function soma(num1, num2) {
  // implemente sua lógica aqui
 
  return num1 + num2
}


// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01



function calculaAreaRetangulo(altura,largura) {

altura = Number(prompt("qual a altura do retangulo?"))
largura = Number(prompt("qual a largura do retangulo?"))
  
  console.log(altura * largura)
}


// EXERCÍCIO 02
function imprimeIdade() {
  anoAtual = Number(prompt("Qual é o ano atual?"))
  anoNascimento = Number(prompt("Qual seu ano de nascimento?"))

console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  var imc = peso / (altura * altura)

  return imc


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  nome = prompt("Qual o seu nome?")
  idade = prompt("Qual a sua idade?")
  email = prompt("Qual o seu email?")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  cor1 = prompt("Qual sua cor favorita?")
  cor2 = prompt("Qual outra cor favorita?")
  cor3 = prompt("Mais uma cor favorita")

  corFavorita = [cor1, cor2, cor3]

  console.log(corFavorita)
  

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  caixaAlta = string.toUpperCase()

  return caixaAlta

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  var pagaEspetaculo = custo / valorIngresso
  
  return pagaEspetaculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  var compara = (string1.length === string2.length)

  return compara

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  var ultimoElemento = array [array.length - 1]
  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  var compara = string1.toUpperCase() === string2.toUpperCase()

  return compara


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  anoAtual = Number(prompt("Qual é o ano atual?"))
  anoNascimento = Number(prompt("Qual seu ano de nascimento?"))
  anoIdentidade = Number(prompt("Qual seu ano sua carteira de identidade foi emitida?"))

  var idade = anoAtual - anoNascimento
  var idadeCarteira = anoAtual - anoIdentidade

  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}