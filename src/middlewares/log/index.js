const logger = require('./init')

module.exports = async (ctx, next) => {
  await next()
  const info = `[${new Date()}] ${ctx.method} ${ctx.url} ${ctx.status}`
  logger.info(info)
}
