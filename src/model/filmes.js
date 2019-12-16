const mongoose = require('mongoose')

const filmesSchema = new mongoose.Schema ({
    titulo: { type: String },
    produtor: { type: String },
    ano: { type: Number },
    //tipo: { type: String }, ->arrays de tipos de filmes: terror, comédia, etc
    // assistido: { type: Boolean }
})

const user = mongoose.model('filmes', filmesSchema)

module.exports = user