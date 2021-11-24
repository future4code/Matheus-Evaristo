// Exercícios de interpretação de código
// 1. Matheus Nachtergaele, Virginia Cavendish, Globo
// 2.
// a) { nome: 'Juca', idade: 3, raca: 'SRD' }
//    { nome: 'Juba', idade: 3, raca: 'SRD' }
//    { nome: 'Jubo', idade: 3, raca: 'SRD' }
// b) Copia um objeto e possibilita a ediçao de atributos

// 3.
// a) false, undefined
// b) false pois esse era o valor do atributo 'backender' e undefined pois 'altura' não tinha sido declarado como atributo.

// Exercícios de escrita de código

// 1.

// a)

/* var colega = {
  nome: "Cleitonilson",
  apelido: ["Cleitim"," Clei", " Son"]
}

function imprimeObjeto(objeto) {
  console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido}.`)

}

imprimeObjeto(colega) */

// b)

/* var colega = {
  nome: "Cleitonilson",
  apelido: ["Cleitim"," Clei", " Son"]
}

function imprimeObjeto(objeto) {
  console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido}.`)

var novosApelidos = {
  ...colega,
  apelido: ["Tinho", " Marajá", " Capitão"]
}

imprimeObjeto(novosApelidos) */

// 2.

// a)

/* var pessoa1 = {
  nome: 'Valbert',
  idade: 34,
  profissao: 'Agente Administrativo'
}

var pessoa2 = {
  nome: 'William',
  idade: 33,
  profissao: 'Chefe de Design'
}

var nome = pessoa1.nome
console.log(nome) */

// // b) 

/* function retornaArray (objeto1, objeto2) {
  
  var array1 = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length]

  var array2 = [objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length]

  console.log(array1)
  console.log(array2)
}

retornaArray(pessoa1,pessoa2) */

// 3.

/* var carrinho = []
var fruta1 = {
  nome: "maçã",
  disponibilidade: true
}

var fruta2 = {
  nome: "laranja",
  disponibilidade: true
}

var fruta3 = {
  nome: "melão",
  disponibilidade: true
}

function adicionarCarrinho(fruta) {
  carrinho.push(fruta)
  fruta.disponibilidade = false

}

adicionarCarrinho(fruta1)
adicionarCarrinho(fruta2)
adicionarCarrinho(fruta3)

console.log(carrinho) */

// DESAFIOS
// 1.

/* function cadastro() {
  var nomep = prompt("Qual o seu nome?")
  var idadep = Number(prompt("Qual a sua idade?"))
  var profissaop = prompt("Qual sua profissão?")
  var pessoa = {
    nome: nomep,
    idade: idadep,
    profissao: profissaop
  }

  console.log(pessoa)
  console.log(typeof pessoa)
}
cadastro() */

// 2.

// var filme1 = {
//   ano: 1996,
//   nome:"Marte Ataca"

// }
// var filme2 = {
//   ano: 2014,
//   nome: "Interestelar"
// }

// function comparaFilme (f1, f2) {
//   console.log("O primeiro filme foi lançado antes do segundo? " + (f1.ano > f2.ano))
//   console.log("O primeiro filme foi lançado no mesmo ano do segundo? " + (f1.ano === f2.ano))
// }

// comparaFilme(filme1,filme2)


// 3.

/* 
/* var fruta1 = {
  nome: "maçã",
  disponibilidade: true
}

var fruta2 = {
  nome: "laranja",
  disponibilidade: true
}

var fruta3 = {
  nome: "melão",
  disponibilidade: true
}

function disponibilidade(fruta) {
  fruta.disponibilidade = false
  return fruta

} 

disponibilidade(fruta1)
console.log(fruta1) */