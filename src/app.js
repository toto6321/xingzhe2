'use strict'

const Koa = require('koa')
const jwt = require('koa-jwt')
const router = require('./routes/index')

const app = new Koa()

if (!process.env.JWT_SECRET) {
  throw new Error('JWT SECRET hasn\'t been set!')
}

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use((ctx, next) => {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401
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
    /^\/api\/.*\/user\/signup/
  ]
}))

app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app
