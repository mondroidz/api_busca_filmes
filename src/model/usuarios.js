const mongoose = require('mongoose')

const usuariosSchema = new mongoose.Schema ({
    nome: { type: String },
    email: { type: String, required: true },
    password: { type: String },
})

const user = mongoose.model('usuarios', usuariosSchema)

module.exports = user