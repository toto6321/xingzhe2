'use strict'
const _ = require('lodash')
const validator = require('./validator')
const userController = require('../../controllers/user')

let routes = [
  {
    path: '/signup',
    method: 'post',
    validate: validator.user_signup,
    handler: userController.signup
  }, {
    path: '/login',
    method: 'post',
    validate: validator.user_login,
    handler: userController.login
  }, {
    path: '/info',
    method: 'get',
    validate: validator.user_info,
    handler: userController.info,
  }
]

// add prefix to route paths
const path_prefix = '/user'
_.forEach(routes, element => { element.path = path_prefix + element.path })
module.exports = routes
