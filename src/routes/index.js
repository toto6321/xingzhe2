'use strict'

const _ = require('lodash')
let routes = []

const home_routes = [
  {
    path: '/',
    method: 'get',
    handler: async ctx => {
      ctx.body = 'home'
    }
  }
]
routes = _.concat(routes, home_routes)

const public_routes = [
  {
    path: '/public',
    method: 'get',
    handler: async (ctx, next) => {
      ctx.body = 'hello'
    }
  }
]
routes = _.concat(routes, public_routes)

const user_routes = require('./user/index')
routes = _.concat(routes, user_routes)

module.exports = routes
