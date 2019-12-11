
const express = require('express');
const app = require("./src/app");
const PORT = process.env.PORT || 3002

// app.use ('/', (req, res) => {
//     res.send("testando");
// })

app.listen(PORT, (err) => {
  if (err) {
    return console.log('Servidor não encontrado.');
  } 
    console.log('iniciou em http://localhost:3002')
})

// app.get('/ping', (req, res) => {
//   res.send('pong');
// }) 