const mongoose = require('mongoose')

const filmesSchema = new mongoose.Schema ({
    titulo: { type: String },
    produtor: { type: String },
    ano: { type: Date },
    //tipo: { type: String }, ->arrays de tipos de filmes: terror, comédia, etc
    assistido: { type: Boolean },
})

module.exports = clientesBD;
