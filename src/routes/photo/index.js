'use strict'
const _ = require('lodash')
const validator = require('./validator')
const controller = require('../../controllers/photo')

let routes = [
  {
    path: '/',
    method: 'get',
    validate: validator.get,
    handler: controller.get_photos
  }, {
    path: '/',
    method: 'post',
    validate: validator.post,
    handler: controller.post_photos
  }, {
    path: '/',
    method: 'delete',
    validate: validator.delete,
    handler: controller.delete_photos
  }, {
    path: '/upload',
    method: 'post',
    validate: validator.upload_photos,
    handler: controller.upload_photos
  }
]

// add prefix to route paths
const path_prefix = '/photo'
_.forEach(routes, element => { element.path = path_prefix + element.path })
module.exports = routes
