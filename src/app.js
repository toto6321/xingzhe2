'use strict'

const Koa = require('koa')
const jwt = require('koa-jwt')
const Router = require('koa-joi-router')
let router = new Router()
const routes = require('./routes/index')

const app = new Koa()

if (!process.env.JWT_SECRET) {
  throw new Error('JWT SECRET hasn\'t been set!')
}

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use((ctx, next) => {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.body = 'Protected resource, use Authorization header to get access\n'
    } else {
      throw err
    }
  })
})

app.use(jwt({
  secret: process.env.JWT_SECRET
}).unless({
  path: [
    /^\/api\/[^/]*\/public.*/,
    /^\/api\/.*\/user\/signup/,
    /^\/api\/.*\/user\/login/,
    /^\/api\/.*\/user\/info/,
  ]
}))

router.route(routes)
const route_prefix = '/api/v1'
router.prefix(route_prefix)
app.use(router.middleware())

module.exports = app
