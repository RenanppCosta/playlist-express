require("dotenv").config();
const express = require('express');
const app = express();
const path = require("path");
const Music = require("./model/Music");

// importando banco de dados
const connectToDb = require("./database/db");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

connectToDb();

const port = process.env.PORT || 4000;

app.get('/', (req, res)=> {
  res.render("index");
});

app.get("/admin", (req,res)=>{
  res.render("admin");
});

app.post("/create", async (req,res)=>{
  const music = req.body;
  await Music.create(music);
  res.redirect("/");
})

app.listen(port, ()=>{console.log("Servidor rodando em http://localhost:${port")});