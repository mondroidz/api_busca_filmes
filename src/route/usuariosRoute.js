const express = require('express')
const router = express.Router()
const controller = require('../controller/usuariosController')
const authMiddleware = require('../middleware/auth')

/**
 * @api {post} /  Salva novos usuários cadastrados
 * @apiName post
 * @apiGroup POST
 *
 * @apiSuccess {String} "Este usuário está ok"
 * 
 * @apiSuccessExample  Success-Response: 
 * {
 * HTTP/1.1 201 
 * Este usuário está ok.
 * }  
 * @apiError 404  HTTP/1.1 500 Not Found
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 */
router.post('/', controller.post)

/**
 * @api {get} Retorna todos os usuários cadastrados
 * @apiName get
 * @apiGroup GET
 *
 * @apiSuccess {String} {* HTTP/1.1 200
 * }
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5df7c16e81665e17b071014a",
 *       "nome": "Dian",
 *       "email": "dianas@mail.com",
 *       "__v": 0
 *   }
 *
 * @apiError UserNotFound "Usuário não encontrado ou não cadastrado".
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Usuário não encontrado ou não cadastrado
 *     }
 */
router.get('/', controller.get)

/**
 * @api {get} Retorna os usuários por Id.
 * @apiName get
 * @apiGroup GET
 *
 * @apiSuccess {String} {* HTTP/1.1 200
 * }
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5df7c16e81665e17b071014a",
 *       "nome": "Dian",
 *       "email": "dianas@mail.com",
 *       "__v": 0
 *   }
 *
 * @apiError UserNotFound "Usuário não encontrado ou não cadastrado".
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Usuário não encontrado ou não cadastrado
 *     }
 */
router.get("/:id", controller.getById)
router.use(authMiddleware)

module.exports = router

