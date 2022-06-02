import express from "express";
import cors from "cors"
import { Request, Response } from "express";
import { users } from "./data";

const app = express()
app.use (express.json())
app.use(cors())

app.get('/ping', (req:Request, res: Response) => {
    res.status(200).send("Pong")
})

// app.get('/users', (req:Request, res: Response) => {
//     const getUsers = users.map(u => u)
    
//     console.log(getUsers)
    
    
//     res.status(200).send(getUsers)

// })

// app.get('/users/:id', (req:Request, res: Response) => {

//     const id = Number(req.params.id)
//     const usersFilter = users.filter((u) => {
//         if(id === u.id) {
//             return u
//         }
//     })

//     res.status(200).send(usersFilter)

// })














app.listen(3003, ()=> {
    console.log("Servidor de pé")
})

 