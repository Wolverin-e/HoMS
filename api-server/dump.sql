/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: roomservice
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `roomservice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `status` int DEFAULT '0',
  `lastUpdated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `room_no` int DEFAULT NULL,
  `additional_notes` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: roomservice
# ------------------------------------------------------------

INSERT INTO
  `roomservice` (
    `id`,
    `type`,
    `status`,
    `lastUpdated`,
    `room_no`,
    `additional_notes`
  )
VALUES
  (1, 'Food', 0, '2021-01-22 21:43:07', 279, 'None');
INSERT INTO
  `roomservice` (
    `id`,
    `type`,
    `status`,
    `lastUpdated`,
    `room_no`,
    `additional_notes`
  )
VALUES
  (2, 'Cleaning', 0, '2021-01-22 21:43:07', 279, 'None');
INSERT INTO
  `roomservice` (
    `id`,
    `type`,
    `status`,
    `lastUpdated`,
    `room_no`,
    `additional_notes`
  )
VALUES
  (3, 'Emergency', 0, '2021-01-22 21:58:26', 279, 'None');

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
