const express = require('express')
const router = express.Router()
const controller = require('../controller/usuariosController')
const authMiddleware = require('../middleware/auth')

router.get("/", controller.getUsuario)
router.post("/", controller.postUsuario)
router.get('/ping', (req, res) => {res.send('pong');})
router.use('authMiddleware')

module.exports = router