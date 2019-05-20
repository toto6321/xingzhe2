'use strict';

const Router = require('koa-router')
const router = new Router()
const userController = require('../controllers/index')

router.get('/api/v1/', userController.login)


module.exports = router