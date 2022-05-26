let minhaString:string = "Oir"

let meuNumero:number | string = 8

enum CorFavorita {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    ROSA = "rosa",
    AZUL = "azul",
    ROXO = "roxo"
}

type pessoa = {
    nome:string,
    idade:number,
    corFavorita:CorFavorita
}

let pessoa1:pessoa = {
    nome: "Pedro",
    idade: 25,
    corFavorita: CorFavorita.VERMELHO


}

let pessoa2:pessoa = {
    nome: "Carla",
    idade: 31,
    corFavorita: CorFavorita.ROXO


}

let pessoa3:pessoa = {
    nome: "Rudra",
    idade: 26,
    corFavorita: CorFavorita.LARANJA


}
console.log(pessoa1, pessoa2, pessoa3)