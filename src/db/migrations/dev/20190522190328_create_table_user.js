exports.up = function (knex, Promise) {
  return knex.schema.raw("CREATE TABLE IF NOT EXISTS `user` (\n" +
    "\t`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,\n" +
    "\t`nickname` VARCHAR(50) NOT NULL DEFAULT '',\n" +
    "\t`email` VARCHAR(100) NOT NULL DEFAULT '',\n" +
    "\t`tel_code` VARCHAR(10) NOT NULL DEFAULT '86',\n" +
    "\t`telephone` VARCHAR(20) NOT NULL DEFAULT '',\n" +
    "\t`password` VARCHAR(100) NOT NULL DEFAULT '',\n" +
    "\t`token` VARCHAR(100) NOT NULL DEFAULT '',\n" +
    "\t`created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,\n" +
    "\t`updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n" +
    "\tPRIMARY KEY(`id`)\n" +
    ") ENGINE = InnoDB COMMENT 'table for user info' CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;\n")
};

exports.down = function (knex, Promise) {
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    return knex.schema.dropTableIfExists('user')
  }
};
