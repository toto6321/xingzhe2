'use strict'

const photoService = require('../../services/photo/photoSerivce')

const get_photos = async (ctx, next) => {
  const { user_id } = ctx.request.query
  const photos = await photoService.get_many_by_user_id(user_id)
  const data = { data: photos }
  ctx.status = 200
  ctx.body = data
}

const post_photos = async (ctx, next) => {
  ctx.status = 201
}

const save_files = async (ctx, next) => {
  // todo save photos
}

const delete_photos = async (ctx, next) => {
  const { ids } = ctx.request.body
  await photoService.delete_photos(ids)
  ctx.status = 202
}

const upload_photos = async (ctx, next) => {
  ctx.body = { data: [] }
}

module.exports = {
  get_photos,
  post_photos,
  delete_photos,
  upload_photos,
}
