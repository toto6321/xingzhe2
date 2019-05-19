'use strict';

const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
	ctx.body = 'hello';
});

const port = 3000
app.listen(port)

console.log(`app is listening on ${port}`)
console.log(`visit http://localhost:3000`)
