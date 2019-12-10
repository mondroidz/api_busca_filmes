const express = require('express')
const router = express.Router()
const controller = require('../controller/cadastroController')
const authMiddleware = require('../middleware/auth')

router.get("/", controller.get)
router.post("/", controller.postUsuario)
router.use('authMiddleware')

module.exports = router