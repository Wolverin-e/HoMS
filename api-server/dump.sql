SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `homdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int NOT NULL,
  `name` varchar(250) NOT NULL,
  `phone` bigint DEFAULT NULL,
  `address` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `phone`, `address`) VALUES
(1, 'Charles Jennings', 5807376762, '1007 Late Avenue, Enid, Oklahoma'),
(2, 'Ms. Eldora Murazik', 9265309360, '86675 Carter Alley, North Maymie, Bilzen'),
(3, 'Prof. Jovani Rippin V', 7573917542, '65966 Brody Alley, South Ernieview, Bilzen'),
(4, 'Adell Keeling Sr.', 3705056501, '6849 Heller Bypass Apt. 535, West Percyton, Bilzen');

-- --------------------------------------------------------

--
-- Table structure for table `occupies`
--

CREATE TABLE `occupies` (
  `id` int NOT NULL,
  `customer_id` int NOT NULL,
  `room_no` int NOT NULL,
  `arrival` date NOT NULL,
  `departure` date NOT NULL,
  `checked_out` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `occupies`
--

INSERT INTO `occupies` (`id`, `customer_id`, `room_no`, `arrival`, `departure`, `checked_out`) VALUES
(1, 1, 415, '2021-01-29', '2021-01-31', 0),
(2, 3, 785, '2021-01-15', '2021-01-30', 0);

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `room_no` int NOT NULL,
  `type` varchar(250) NOT NULL,
  `status` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`room_no`, `type`, `status`) VALUES
(116, 'Classic', 1),
(214, 'Suite', 0),
(248, 'Delux Suite', 1),
(415, 'SeaView', 1),
(785, 'Duplex', 1),
(817, 'TopView', 0);

-- --------------------------------------------------------

--
-- Table structure for table `roomservice`
--

CREATE TABLE `roomservice` (
  `id` int NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `status` int DEFAULT '0',
  `lastUpdated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `room_no` int NOT NULL,
  `customer_id` int DEFAULT NULL,
  `additional_notes` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `roomservice`
--

INSERT INTO `roomservice` (`id`, `type`, `status`, `lastUpdated`, `room_no`, `customer_id`, `additional_notes`) VALUES
(1, 'Food', 0, '2021-01-28 18:44:50', 279, NULL, 'None'),
(2, 'Cleaning', 1, '2021-01-28 18:44:27', 279, NULL, 'None'),
(3, 'Emergency', 1, '2021-01-28 18:44:28', 279, NULL, 'None');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `occupies`
--
ALTER TABLE `occupies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`,`room_no`),
  ADD KEY `room_no` (`room_no`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`room_no`);

--
-- Indexes for table `roomservice`
--
ALTER TABLE `roomservice`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `occupies`
--
ALTER TABLE `occupies`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roomservice`
--
ALTER TABLE `roomservice`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `occupies`
--
ALTER TABLE `occupies`
  ADD CONSTRAINT `occupies_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `occupies_ibfk_2` FOREIGN KEY (`room_no`) REFERENCES `rooms` (`room_no`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
