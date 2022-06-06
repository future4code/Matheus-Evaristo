
enum generoFilme {
        	ACAO="ação",
        	DRAMA="drama",
        	COMEDIA="comédia",
        	ROMANCE="romance",
        	TERROR="terror"
        }

type filme = {
    titulo:string,
    ano:number,
    genero:generoFilme
    nota?:number
}

let filme1 = {
    titulo:"Titanic",
    ano:1997,
    genero:generoFilme.DRAMA,
    nota:7.9
}

let filme2 = {
    titulo:"O Quinto Elemento",
    ano:1997,
    genero:generoFilme.ACAO,
}

console.log(filme1)
console.log(filme2)