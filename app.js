require("dotenv").config()
const express = require('express')
const app = express()

// importando banco de dados
const connectToDb = require("./database/db")

connectToDb()

const port = process.env.PORT || 4000
app.get('/', (req, res)=> {
  res.send('Hello World')
})

app.listen(port, ()=>{console.log("Servidor rodando em http://localhost:${port")})