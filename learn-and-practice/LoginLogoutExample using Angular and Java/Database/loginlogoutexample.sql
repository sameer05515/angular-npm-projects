-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 12, 2019 at 07:29 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loginlogoutexample`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_detail`
--

DROP TABLE IF EXISTS `admin_detail`;
CREATE TABLE IF NOT EXISTS `admin_detail` (
  `admin_id` int(11) NOT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  UNIQUE KEY `UK_r87c070prwgv1behut9j2m4ae` (`email_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_detail`
--

INSERT INTO `admin_detail` (`admin_id`, `email_id`, `name`, `password`, `role`) VALUES
(1, 'abc@abc.com', 'ABC', '12345', 'Admin'),
(3, 'xyz@xyz.com', 'XYZ', '12345', 'Manager');

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(5),
(5);

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
CREATE TABLE IF NOT EXISTS `token` (
  `token_id` int(11) NOT NULL,
  `authenticationToken` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `secretKey` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`token_id`),
  UNIQUE KEY `UK_c56184j4djjqx16jwprg167qp` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `token`
--

INSERT INTO `token` (`token_id`, `authenticationToken`, `email_id`, `secretKey`, `user_id`) VALUES
(2, 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhYmNAYWJjLmNvbSIsImlhdCI6MTU2MDMyNDE2Mywic3ViIjoiSldUIFRva2VuIiwiaXNzIjoiSmF2YVRwb2ludCIsImV4cCI6MTU2MDM2NzM2M30.Oxef9hpGgs4sSB6-bHhUJ0IdWeRKjKIOmt8dPoJlZuI', 'abc@abc.com', 'abc@abc.com579', 1),
(4, 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4eXpAeHl6LmNvbSIsImlhdCI6MTU2MDMyMzkxNCwic3ViIjoiSldUIFRva2VuIiwiaXNzIjoiSmF2YVRwb2ludCIsImV4cCI6MTU2MDM2NzExNH0.DcZ65za4ji1UM5kgOVE0IN7E0mXRo_cbvj3MRxlsoRo', 'xyz@xyz.com', 'xyz@xyz.com546', 3);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
