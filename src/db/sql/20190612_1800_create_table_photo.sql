CREATE TABLE IF NOT EXISTS `photo` (
	`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'id',
    `owner_id` BIGINT UNSIGNED NOT NULL COMMENT 'id of the owner',
	`name` VARCHAR(100) NOT NULL DEFAULT '' COMMENT 'filename',
	`url` VARCHAR(200) NOT NULL DEFAULT '' COMMENT 'link of the photo',
    `deleted` tinyint NOT NULL DEFAULT 0 COMMENT 'if it is deleted. {1: true, 0: false} default 0',
	`image_created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'date when photo is taken',
	`coordinate_type` TINYINT NOT NULL DEFAULT 1 COMMENT 'type of coordinate: {1: GPS}, default 1',
    `latitude` DOUBLE NOT NULL DEFAULT 0.0 COMMENT 'latitude',
    `longitude` DOUBLE NOT NULL DEFAULT 0.0 COMMENT 'longitude',
	`created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY(`id`)
) ENGINE = InnoDB COMMENT 'table for user info' CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;