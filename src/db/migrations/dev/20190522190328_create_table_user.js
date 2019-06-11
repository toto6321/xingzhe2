exports.up = function (knex, Promise) {
  return knex.schema.raw('CREATE TABLE IF NOT EXISTS `user` (\n' +
    '\t`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT \'id\',\n' +
    '\t`nickname` VARCHAR(50) NOT NULL DEFAULT \'\' COMMENT \'nickname\',\n' +
    '\t`email` VARCHAR(100) NOT NULL DEFAULT \'\' COMMENT \'email\',\n' +
    '\t`code` VARCHAR(10) NOT NULL DEFAULT \'86\' COMMENT \'telephone code\',\n' +
    '\t`telephone` VARCHAR(20) NOT NULL DEFAULT \'\' COMMENT \'telephone number\',\n' +
    '\t`password` VARCHAR(100) NOT NULL DEFAULT \'\' COMMENT \'encrypted password\',\n' +
    '\t`created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,\n' +
    '\t`updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n' +
    '\tPRIMARY KEY(`id`)\n' +
    ') ENGINE = InnoDB COMMENT \'table for user info\' CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;')
}

exports.down = function (knex, Promise) {
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    return knex.schema.dropTableIfExists('user')
  }
}
