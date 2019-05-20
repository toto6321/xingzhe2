'use strict';

const login = (ctx, next) => {
  next()
  ctx.body = 'success!'
}


module.exports = {
  login
}

