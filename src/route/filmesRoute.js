const express = require('express')
const router = express.Router()
const controller = require('../controllers/filmesController')

router.get("/", controller.get)
router.post("/", controller.postFilmes)

module.exports = router