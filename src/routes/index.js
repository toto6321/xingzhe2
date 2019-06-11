'use strict'

const Router = require('koa-joi-router')
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
    handler: async ctx => {
      ctx.body = 'hello'
    }
  }
]
routes = _.concat(routes, public_routes)

const user_routes = require('./user/index')
routes = _.concat(routes, user_routes)

const router = new Router()
router.route(routes)

const route_prefix = '/api/v1'
router.prefix(route_prefix)

module.exports = router
