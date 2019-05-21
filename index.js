'use strict';

// load configuration
const configuration = require('dotenv').config({path: 'config.env'})
console.log(configuration)

// get environment variables
const env = process.env.NODE_ENV || 'development'
const port = process.env.NODE_PORT || '3000'
const src = env === 'production' ? './build' : './src'

const app = require(src + '/app.js')

app.listen(port)

console.log(`app is listening on ${port}`)
console.log(`visit http://localhost:3000`)
