exports.up = function (knex, Promise) {
  return knex.schema.raw('CREATE TABLE IF NOT EXISTS `photo` (\n' +
    '\t`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT \'id\',\n' +
    '\t`owner_id` BIGINT UNSIGNED NOT NULL COMMENT \'id of the owner\',\n' +
    '\t`name` VARCHAR(100) NOT NULL DEFAULT \'\' COMMENT \'filename\',\n' +
    '\t`url` VARCHAR(200) NOT NULL DEFAULT \'\' COMMENT \'link of the photo\',\n' +
    '\t`deleted` tinyint NOT NULL DEFAULT 0 COMMENT \'if it is deleted. {1: true, 0: false} default 0\',\n' +
    '\t`image_created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT \'date when photo is taken\',\n' +
    '\t`coordinate_type` TINYINT NOT NULL DEFAULT 1 COMMENT \'type of coordinate: {1: GPS}, default 1\',\n' +
    '\t`latitude` DOUBLE NOT NULL DEFAULT 0.0 COMMENT \'latitude\',\n' +
    '\t`longitude` DOUBLE NOT NULL DEFAULT 0.0 COMMENT \'longitude\',\n' +
    '\t`created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,\n' +
    '\t`updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n' +
    '\tPRIMARY KEY(`id`)\n' +
    ') ENGINE = InnoDB COMMENT \'table for photos\' CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;')

}

exports.down = function (knex, Promise) {
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    return knex.schema.dropTableIfExists('photo')
  }
}
