-- CreateTable
CREATE TABLE `markets` (
    `market_id` INTEGER NOT NULL,
    `market` VARCHAR(128) NOT NULL,

    UNIQUE INDEX `markets_market_key`(`market`),
    PRIMARY KEY (`market_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stocks` (
    `code` INTEGER NOT NULL,
    `stockname` VARCHAR(128) NOT NULL,
    `market_id` INTEGER NOT NULL,

    UNIQUE INDEX `stocks_stockname_key`(`stockname`),
    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `stocks` ADD CONSTRAINT `stocks_market_id_fkey` FOREIGN KEY (`market_id`) REFERENCES `markets`(`market_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
