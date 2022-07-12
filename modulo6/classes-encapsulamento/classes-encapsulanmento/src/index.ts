import express from "express";
import cors from "cors"
import { Request, Response } from "express";

// const app = express()
// app.use (express.json())
// app.use(cors())


// Ex 1
// a) Serve para estanciar novos objetos derivados da classe.
// b) Apenas uma vez.
// c) Apenas dentro da propria classe usando 'this'.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
       transactions:Transaction[]
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.transactions = transactions;
    }

    public pegarCPF = () :string => {
        return this.cpf
    }
    
    public pegarNome = () :string => {
        return this.name
    }

    public pegarIdade = () :number => {
        return this.age
    }

    public pegarTrans = () :Transaction[] => {
        return this.transactions
    }
  
  }

// Ex 2   

  class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }

    public pegarData = () :string => {
        return this.date
    }
    
    public pegarValor = () :number => {
        return this.value
    }

    public pegarDescricao = () :string => {
        return this.description
    }
  }
  const transClaudio = new Transaction("02-08-2021", 2000, "iphone")

  const novoUsuario = new UserAccount("56413495125", "Cláudio Silveira", 27, transClaudio)

  console.log(novoUsuario.pegarNome())








// app.listen(3003, ()=> {
//     console.log("Servidor de pé")
// })