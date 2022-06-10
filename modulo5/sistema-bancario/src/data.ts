
export type extratoData = {
    valor:number,
    data:string,
    descr:string
}

export type cliente = {
    nome: string,
    cpf: number,
    dataNascimento:string,
    saldo:number
    extrato:extratoData[]
}

export let contas:cliente[] = [
    {
        nome: "Claudio",
        cpf: 12345678978,
        dataNascimento:"26/11/1978",
        saldo:3000,
        extrato:[{
            valor: 1200,
            data: "12/04/2022",
            descr: "Celular"
        }]

    },

    {
        nome: "Marcelo",
        cpf: 35179462485,
        dataNascimento:"05/02/1995",
        saldo:12000,
        extrato:[{
            valor: 2000,
            data: "22/05/2022",
            descr: "Geladeira"
        }]

    },

    {
        nome: "Rogério",
        cpf: 95135765247,
        dataNascimento:"12/08/2001",
        saldo:8000,
        extrato:[{
            valor: 5000,
            data: "03/006/2022",
            descr: "Computador"
        }]

    }

]