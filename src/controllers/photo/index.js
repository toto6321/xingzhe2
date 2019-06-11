'use strict'

const get_photos = async (ctx, next) => {
  ctx.status = 200
}

const post_photos = async (ctx, next) => {
  ctx.status = 201
}

const delete_photos = async (ctx, next) => {
  ctx.status = 202
}

module.exports = {
  get_photos,
  post_photos,
  delete_photos,
}
