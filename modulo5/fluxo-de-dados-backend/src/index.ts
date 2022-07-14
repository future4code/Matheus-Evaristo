import express from "express";
import cors from "cors"
import { Request, Response } from "express";
import { produtos, product } from "./data";

const app = express()

app.use (express.json())
app.use(cors())

// 401 - 'name' e 'price' faltando
// 404 - 'name' precisa ser uma string
// 409 - 'price' precisa ser um number
// 422 - 'price' não pode ter um valor menor ou igual a 0
// 500 - Algo deu Errado

const Errors: { [key: string]: { status: number, message: string } } = {
    MISSING_ATRIBUTE: { status: 401, message: "'name' e 'price' faltando" },
    NAME_MUST_BE_A_STRING: { status: 404, message: "'name' precisa ser uma string" },
    PRICE_MUST_BE_A_NUMBER: { status: 409, message: "'price' precisa ser um number" },
    PRICE_VALUE_NOT_ACCEPTABLE: { status: 422, message: "'price' não pode ter um valor menor ou igual a 0" },
    SOMETHING_WENT_WRONG: { status: 500, message: "Algo deu errado" }
}



app.get('/teste', (req:Request, res: Response) => {

    res.status(200).send("Deu Certo")
})

app.get('/produtos', (req:Request, res: Response) => { //Lista de Produtos

    res.status(200).send(produtos)
})

app.post('/adicionar', (req:Request, res: Response) => { //Adiciona Produto
    try{
   
        const name = req.body.name
        const price = req.body.price
        
        
        if (!name) {
            throw new Error(Errors.MISSING_ATRIBUTE.message)
        }

        if(!price){
            throw new Error(Errors.MISSING_ATRIBUTE.message)
        }

        if(!name || !price){
            throw new Error(Errors.MISSING_PARAMETERS.message)
        } 

        const novoProduto: product = {
            id:Date.now(),
            name, 
            price
        }

        produtos.push(novoProduto)

        res.send(produtos)
    }
    
    catch (error) {
        res.status(400).end("'name' e/ou 'price' faltando")
    }
    
})

app.put("/produtos/:id/mudarpreco", (req:Request, res: Response) => {
    const id = Number(req.params.id)
    const newPrice = req.body.price

    for (let produto of produtos) {
        if(produto.id === id) {
            produto.price = newPrice
        }
    }

    res.send(produtos)


})

app.delete("/produtos/:id", (req, res) => {

    const id = Number(req.params.id)
  
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].id === id) {
        produtos.splice(i, 1)
      }
    }
  
    res.send(produtos)
  })








app.listen(3003, ()=> {
    console.log("Servidor de pé")
})