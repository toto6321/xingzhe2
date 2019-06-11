'use strict'

const Koa = require('koa')
const jwt = require('koa-jwt')
const app = new Koa()

if (!process.env.JWT_SECRET) {
  throw new Error('JWT SECRET hasn\'t been set!')
}

const logger = require('./middlewares/log/index.js')
app.use(logger)

const errorHandler = require('./middlewares/error')
app.use(errorHandler)

// Custom 401 handling if you don't want to expose koa-jwt errors to users
/*
app.use((ctx, next) => {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.body = err
      // const message = 'Protected resource, use Authorization header to get access\n'
      // ctx.body = err.originalError ? err.originalError.message
      //   : err.message ? err.message : message
    } else {
      throw err
    }
  })
})
*/

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

const router = require('./routes/index')
app.use(router.middleware())

module.exports = app
