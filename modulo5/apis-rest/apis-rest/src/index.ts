import express from "express";
import cors from "cors"
import { Request, Response } from "express";
import { users, user, userType } from "./data";

const app = express()
app.use (express.json())
app.use(cors())


app.get('/users/all', (req:Request, res: Response) => { //Lista de Produtos

    res.status(200).send(users)
})

app.get('/users/type', (req:Request, res: Response) => { //Lista de Produtos
    let errorCode = 500

    try {

        const type = req.query.type as string

        if (!type) {
            errorCode = 422
            throw new Error("Falta o parâmetro de busca!");
      
          }

          let typeCompara = type.toUpperCase()

        if (typeCompara !== userType.NORMAL && typeCompara !== userType.ADMIN) {
            errorCode = 422
            throw new Error("Inserir tipo de usuário válido: 'NORMAL' ou 'ADMIN'")
          }

          
        
          const selectedUsers = users.filter(u => u.type === typeCompara)

          res.status(200).send(selectedUsers)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

})

app.get('/users/selectbyname', (req: Request, res: Response) => {
    let errorCode = 500
    try {
      const name = req.query.name as string
  
      if (!name) {
        errorCode = 422
        throw new Error("Falta o parâmetro de busca!");
  
      }
  
      const user = users.filter(u => u.name.toLowerCase() === name.toLowerCase())
  
      if (!user.length) {
        errorCode = 404
        throw new Error("Usuário não encontrado")
  
  
       
      }

      res.status(200).send(user)
  
    } catch (error: any) {
      res.status(errorCode).send(error.message)
    }
  })

  app.post('/users', (req: Request, res: Response) => {
    let errorCode = 500
    try {
      const { name, email, type, age } = req.body
  
      if (!name || !email || !type || !age) {
        errorCode = 422
        throw new Error("Faltam parâmetros a serem paddos no body");
      }
  
      if (type != userType.NORMAL && type != userType.ADMIN) {
        errorCode = 422
        throw new Error("Inserir tipo de usuário válido: 'NORMAL' ou 'ADMIN'")
      }
  
      const newUser: user = {
        id: users.length + 1,
        name: name,
        email: email,
        type: type,
        age: age
      }
  
      users.push(newUser)
      res.status(201).send(users)
  
    } catch (error: any) {
      res.status(errorCode).send(error.message)
    }
  })
  






app.listen(3003, ()=> {
    console.log("Servidor de pé")
})