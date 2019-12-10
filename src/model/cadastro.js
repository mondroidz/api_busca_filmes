const mongoose = require('mongoose')

const cadastroSchema = new mongoose.Schema ({
    nome: { type: String },
    email: { type: String, required: true },
    password: { type: String },
})

module.exports = clientesBD;