const intro = (nome:string, dataNascimento:string) => {
    
    let dateImput = dataNascimento.split("/")

    let dia = dateImput[0]
    let mes = dateImput[1]
    let ano = dateImput[2]


    console.log(`Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`)


}

let nome:string = "Matheus"
let dataNascimento:string = "06/08/1990"

intro(nome, dataNascimento)

