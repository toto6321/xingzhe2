'use strict'

const Router = require('koa-router')
const router = new Router()
const userController = require('../controllers/index')

router.post('/api/v1/user/login', userController.login)
router.post('/api/v1/user/signup', userController.signup)
router.get('/api/v1/user/info', userController.info)

module.exports = router
