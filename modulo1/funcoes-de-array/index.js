// Exercícios de interpretação de código

// 1.

// Cada elemento do array vai ser impresso seguido do index e o array usuarios completo

// 2.

// Um novo array feito a partir do atributo 'nome' do array de objetos.

// 3.

// Retorna somente os objetos que cotem no atributo 'apelido' um valor diferente de "Chijo"

// Exercícios de escrita de código

// 1.

// a)

// const pets = [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Polly", raca: "Lhasa Apso"},
//    { nome: "Madame", raca: "Poodle"},
//    { nome: "Quentinho", raca: "Salsicha"},
//    { nome: "Fluffy", raca: "Poodle"},
//    { nome: "Caramelo", raca: "Vira-lata"},
// ]

// let nomesPets = pets.map((item, index, array) => {
//    return item.nome
// })

// console.log(nomesPets)

// b)

// const pets = [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Polly", raca: "Lhasa Apso"},
//    { nome: "Madame", raca: "Poodle"},
//    { nome: "Quentinho", raca: "Salsicha"},
//    { nome: "Fluffy", raca: "Poodle"},
//    { nome: "Caramelo", raca: "Vira-lata"},
// ]

// let racaSalsicha = pets.filter((item, index, array) => {
//    return item.raca === "Salsicha"
// })

// console.log(racaSalsicha)

// c) 

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

let isolaPoodles = pets.filter((item, index, array) => {
  return item.raca === "Poodle"

  
})

function customMsg (objeto) {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${objeto.nome}!`
}

const mensagens = isolaPoodles.map(customMsg)

console.log(mensagens)