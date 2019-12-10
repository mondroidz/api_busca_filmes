const Usuario = require('../model/cadastro')
const fs = require('fs')
const bcrypt = require("bcryptjs");
const bcryptSalt = 8;

//POST
exports.postUsuario = (req, res) => {
    const { nome, email, password } = req.body;
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt)
    const usuario = new Usuario ({
        nome,
        email,
        hashPass,
    });

usuario.save()
    .then(() => {
        return res.status(201).send(clientes);
    })
    .catch ((e) =>{
        return res.status(401).json({ erro: " erro "})
    });
}

//GET
