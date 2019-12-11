const express = require('express')
const router = express.Router()
const controller = require('../controller/cadastroController')
const authMiddleware = require('../middleware/auth')

router.get("/", controller.get)
router.post("/", controller.postUsuario)
router.get('/ping', (req, res) => {
    res.send('pong');
  })

router.use('authMiddleware')
app.get('/ping', (req, res) => {
    res.send('pong');
  })

module.exports = router