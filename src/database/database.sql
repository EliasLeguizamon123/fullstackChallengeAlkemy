CREATE TABLE `heroku_1bb0b666e959c6e`.`form` (
    ID NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    `concept` VARCHAR(255) NOT NULL,
    `amount` DECIMAL(10,2) NOT NULL,
    `creationDate` DATETIME NOT NULL,
    `isType` INT NOT NULL,
    `category` VARCHAR(40) NOT NULL
);
COMMENT = 'Testing for fullstack proyect';