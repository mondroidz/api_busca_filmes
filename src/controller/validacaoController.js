const jwt = require('jsonwebtoken');
const authConfig = require ('../config/auth');
const Usuario = require('../model/usuarios');
const bcrypt = require("bcryptjs");

function checkPassword(passwordEntry, password) {    // <-- passwordEntry, 'aqui e o pwd do user') 
    return bcrypt.compareSync(passwordEntry, password) // <--- password, 'aqui e o pwd do BD')
}

exports.getToken = (req, res) => {
    const { nome, password: passwordEntry } = req.body;
    const user = Usuario.find(e => e.nome == nome)
    
    if(!user) {
        return res.status(401).json({ error: ' usuario nao encontrado '});
    }

    const {id, nome, hashPass} = user;

    try {
        checkPassword(passwordEntry, hashPass);
    } catch (e) {
        return res.status(401).json({ erro: 'pwd does not match'});
    }
    
    try {
        return res.json({
            user: {
                id,
                nome,
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    } catch (e) {
        return res.status(401).json({ error: "erro"});
    }
}