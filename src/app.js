const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()

// mongoose.connect("mongodb://localhost:27017/clientes", {useNewUrlParser: true}); // CONEXAO LOCAL 

// mongoose.connect(process.env.DATABASE, {
//     useNewUrlParser: true, useUnifiedTopology: true
//   });
//   const db = mongoose.connection
//   db.on("error", console.log.bind(console, "connection error:"))
//   db.once("open", function () {
//     console.log("Conectada!")
//   });
  
  //const index = require("./routes/index")
  //const filmes ??
  
  app.use(express.json());
  
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })
  
  app.use(express.static("public"));
  
  app.use(bodyParser.json());
  
  // app.use("/", index)
  // app.use("/clientes", clientes)
  // app.use("/sessions", sessions)
  
  module.exports = app