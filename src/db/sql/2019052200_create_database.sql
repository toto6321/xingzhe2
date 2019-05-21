CREATE DATABASE IF NOT EXISTS `XINGZHE_dev`;

USE `XINGZHE_dev`;

CREATE TABLE IF NOT EXISTS `user` (
	`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
	`nickname` VARCHAR(50) NOT NULL DEFAULT '',
	`email` VARCHAR(100) NOT NULL DEFAULT '',
	`tel_code` VARCHAR(10) NOT NULL DEFAULT '86',
	`telephone` VARCHAR(20) NOT NULL DEFAULT '',
	`password` VARCHAR(100) NOT NULL DEFAULT '',
	`token` VARCHAR(100) NOT NULL DEFAULT '',
	`created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY(`id`)
) ENGINE = InnoDB COMMENT 'table for user info';
