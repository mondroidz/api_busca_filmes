const Filmes = require('../model/filmes')

//POST
exports.postFilmes = (req, res) => {
    const filmes = new Filmes(req.body);
    filmes.save()
    .then (() => {
        return res.status(201).send('Este filme foi salvo com sucesso!')
    })
    .catch ((e) => {
        return res.status(400).send({erro: "Este filme não foi inserido, erro:" +e})
    })
};
    
//GET
exports.getFilmes = (req, res) => {
    const filme = Filmes.find()
    .then(() => {
        return res.status(201).send(filme)
    })
    .catch ((e) => {
        return res.status(400).send({ erro: "Este filme não foi encontrado, erro: "+e})
    })
}

