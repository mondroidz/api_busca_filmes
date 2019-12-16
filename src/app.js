const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//CONEXAO MONGO
mongoose.connect("mongodb://localhost:27017/searchFilmes", {useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => {
    console.log("Esse banco está conectado.")
})
.catch((e) => {
    console.log('Algo não deu certo, erro: '+ e)
})

//ROTAS
const usuarios = require('../src/route/usuariosRoute')
const filmes = require('../src/route/filmesRoute')

//COMPLEMENTO DA ROTA
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })

app.use('/', usuarios)
app.use("/filmes", filmes)

//APIDOC
app.use(express.static('doc'))
app.get('/api-doc', (req, res) =>{
    res.sendFile(__dirname + '/doc/index.html');
})

module.exports = app