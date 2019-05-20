'use strict';

const app = require('./src/app.js')

const port = 3000
app.listen(port)

console.log(`app is listening on ${port}`)
console.log(`visit http://localhost:3000`)
