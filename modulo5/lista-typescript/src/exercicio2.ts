//Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.

const pegaTipo = (variavel:string | number | boolean) => {

    if (typeof variavel === "string") {
        console.log("O tipo da variável é string")
    }
    
    else if (typeof variavel === "number") {
        console.log("O tipo da variável é número")
    }

    else if (typeof variavel === "boolean") {
        console.log("O tipo da variável é booleana")
    }
}

let texto:string = "Olá, como vai?"
let ano:number = 2022
let verdade = true

pegaTipo(texto)
pegaTipo(ano)
pegaTipo(verdade)