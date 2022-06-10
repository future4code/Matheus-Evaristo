import express from "express";
import cors from "cors"
import { Request, Response } from "express";
import { cliente, contas, extratoData } from "./data";

const app = express()
app.use (express.json())
app.use(cors())

app.get('/contas/all', (req:Request, res: Response) => { 

    res.status(200).send(contas)
})

app.post('/contas', (req: Request, res: Response) => {
    let errorCode = 500
    try {
      const { nome, cpf, dataNascimento } = req.body

      let anoDeNascimento = Number(dataNascimento[6] + dataNascimento[7] + dataNascimento[8] + dataNascimento[9])

      if(2022 - anoDeNascimento < 18) {
        errorCode = 422
        throw new Error("É necessário ter mais de 18 anos de idade para criar uma conta.")
      }
  
      if(cpf === req.body.cpf){

      }

        const conta = contas.find((conta) => {
        if(conta.cpf === cpf) {
            throw new Error("Este CPF já está vinculado a uma conta.")
        }
      })

  
      const novaConta: cliente = {
        nome: nome,
        cpf: cpf,
        dataNascimento:dataNascimento,
        saldo:0,
        extrato:[
            {
                valor:0,
                data:"",
                descr:""
            }
        ]
      }
  
      contas.push(novaConta)
      res.status(201).send(contas)
  
    } catch (error: any) {
      res.status(errorCode).send(error.message)
    }
  })
  



app.listen(3003, ()=> {
    console.log("Servidor de pé")
   
})