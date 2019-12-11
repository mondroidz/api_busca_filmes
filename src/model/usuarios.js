const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema ({
    nome: { type: String },
    email: { type: String, required: true },
    password: { type: String },
})

module.exports = clientesBD;