const Usuario = require('../model/usuarios')
const jwt = require('jsonwebtoken')
const bcryptjs = require("bcryptjs")
const bcryptSalt = 8;

//POST
exports.post = (req, res) => {
    const { nome, email, password } = req.body;
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcryptjs.hashSync(password, salt)
    const token = jwt.sign(hashPass, "207d79f369ab79d4d7f3b7c6d15cb183")
    const usuario = new Usuario ({
        nome,
        email,
        hashPass,
    });
    usuario.save()
    .then (() => {
        return res.status(201).send('Este usuario está ok.')
    })
    .catch ((e) => {
        return res.status(400).send({erro: "Este usuário não foi inserido, erro:" +e})
    })
}

//GET.
exports.get = (req, res) => {
    const usuario = Usuario.find()
    .then((usuario) => {
        return res.status(201).send(usuario)
    })
    .catch ((e) => {
        return res.status(400).send({ erro: "Usuário não encontrado ou não cadastrado."+e})
    })
}

//GET ByID
exports.getById = (req, res) => {
    const id = req.params.id
    const usuario = Usuario.findById(id)
    .then(() => {
        return res.status(200).send(usuario)
    })
    .catch((e) => {
        return res.status(400).send({ erro: "Este(a) usuario nao existe, erro: "+e})
    })
  }



