const Usuario = require('../model/usuario')
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
        return res.status(201).send(usuario);
    })
    .catch ((e) =>{
        return res.status(401).json({ erro: " erro "})
    });
}

//GET
exports.getUsuario = (req, res) => {
const novoUsuario = new usuariosModel(usuario);
    return novoUsuario.save();
    

    Usuarios.find(function (err, usuario) {
        if (err) res.status(500).send(err);
        res.status(200).send(clientes);
    });
};