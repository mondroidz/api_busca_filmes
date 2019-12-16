const express = require('express')
const router = express.Router()
const controller = require("../controller/filmesController")

router.post("/filmes", controller.postFilmes)
router.get("/filmes", controller.getFilmes)

module.exports = router