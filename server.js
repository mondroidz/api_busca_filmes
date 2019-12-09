
const express = require('express');
const app = require("./src/app");

// app.use ('/', (req, res) => {
//     res.send("testando");
// })

app.listen(3002, (err) => {
  if (err) {
    return console.log('Servidor não encontrado.');
  } 
    console.log('iniciou em http://localhost:3002')
});