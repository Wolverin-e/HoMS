/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: customers
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `phone` bigint DEFAULT NULL,
  `address` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: occupies
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `occupies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `room_no` int NOT NULL,
  `arrival` date NOT NULL,
  `departure` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: rooms
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `rooms` (
  `room_no` int NOT NULL,
  `type` varchar(250) NOT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`room_no`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: roomservice
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `roomservice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `status` int DEFAULT '0',
  `lastUpdated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `room_no` int NOT NULL,
  `customer_id` int DEFAULT NULL,
  `additional_notes` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: customers
# ------------------------------------------------------------

INSERT INTO
  `customers` (`id`, `name`, `phone`, `address`)
VALUES
  (
    1,
    'Charles Jennings',
    5807376762,
    '1007 Late Avenue, Enid, Oklahoma'
  );
INSERT INTO
  `customers` (`id`, `name`, `phone`, `address`)
VALUES
  (
    2,
    'Ms. Eldora Murazik',
    9265309360,
    '86675 Carter Alley, North Maymie, Bilzen'
  );
INSERT INTO
  `customers` (`id`, `name`, `phone`, `address`)
VALUES
  (
    3,
    'Prof. Jovani Rippin V',
    7573917542,
    '65966 Brody Alley, South Ernieview, Bilzen'
  );
INSERT INTO
  `customers` (`id`, `name`, `phone`, `address`)
VALUES
  (
    4,
    'Adell Keeling Sr.',
    3705056501,
    '6849 Heller Bypass Apt. 535, West Percyton, Bilzen'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: occupies
# ------------------------------------------------------------

INSERT INTO
  `occupies` (
    `id`,
    `customer_id`,
    `room_no`,
    `arrival`,
    `departure`
  )
VALUES
  (1, 1, 415, '2021-01-29', '2021-01-31');
INSERT INTO
  `occupies` (
    `id`,
    `customer_id`,
    `room_no`,
    `arrival`,
    `departure`
  )
VALUES
  (2, 3, 785, '2021-01-15', '2021-01-30');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: rooms
# ------------------------------------------------------------

INSERT INTO
  `rooms` (`room_no`, `type`, `status`)
VALUES
  (116, 'Classic', 1);
INSERT INTO
  `rooms` (`room_no`, `type`, `status`)
VALUES
  (214, 'Suite', 0);
INSERT INTO
  `rooms` (`room_no`, `type`, `status`)
VALUES
  (248, 'Delux Suite', 1);
INSERT INTO
  `rooms` (`room_no`, `type`, `status`)
VALUES
  (415, 'SeaView', 1);
INSERT INTO
  `rooms` (`room_no`, `type`, `status`)
VALUES
  (785, 'Duplex', 1);
INSERT INTO
  `rooms` (`room_no`, `type`, `status`)
VALUES
  (817, 'TopView', 0);

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
    `customer_id`,
    `additional_notes`
  )
VALUES
  (1, 'Food', 0, '2021-01-28 18:44:50', 279, NULL, 'None');
INSERT INTO
  `roomservice` (
    `id`,
    `type`,
    `status`,
    `lastUpdated`,
    `room_no`,
    `customer_id`,
    `additional_notes`
  )
VALUES
  (
    2,
    'Cleaning',
    1,
    '2021-01-28 18:44:27',
    279,
    NULL,
    'None'
  );
INSERT INTO
  `roomservice` (
    `id`,
    `type`,
    `status`,
    `lastUpdated`,
    `room_no`,
    `customer_id`,
    `additional_notes`
  )
VALUES
  (
    3,
    'Emergency',
    1,
    '2021-01-28 18:44:28',
    279,
    NULL,
    'None'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
