'use strict'

const dbService = require('./photoDBService')
const logger = require('../../middlewares/log')
const get_many_by_user_id = async id => {
  return dbService.get_many_by_user_id(id)
}

const save_photos = async photos => {
  // todo save photos to disk
  //
}

const delete_photos = async ids => {
  if (!ids || ids.length === 0) {
    logger.warn('Ids is empty while it is trying to delete photos.')
    return new Promise(() => {
      return true
    })
  } else {
    return dbService.delete_many_by_ids(ids)
  }
}

module.exports = {
  get_many_by_user_id,
  save_photos,
  delete_photos,
}
