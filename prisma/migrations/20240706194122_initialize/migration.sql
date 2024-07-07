-- CreateTable
CREATE TABLE `refferalSchema` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Referrer_name` VARCHAR(191) NOT NULL,
    `Referrer_email` VARCHAR(191) NOT NULL,
    `Referee_name` VARCHAR(191) NOT NULL,
    `Referee_email` VARCHAR(191) NOT NULL,
    `refercode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
