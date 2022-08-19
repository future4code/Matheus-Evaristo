import express from "express";
import cors from "cors"
import { Request, Response } from "express";

const app = express()
app.use (express.json())
app.use(cors())














app.listen(3003, ()=> {
    console.log("Servidor de pé")
})