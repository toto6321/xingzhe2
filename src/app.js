'use strict';

const Koa = require('koa')
const router = require('./routes/index')

const app = new Koa()

app.use(router.routes())
app.use(router.allowedMethods())


app.use(ctx => {
  ctx.body = 'hello';
});



module.exports = app