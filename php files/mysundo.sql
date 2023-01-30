-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2023 at 02:42 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mysundo`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `booking_id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL,
  `booking_type` varchar(100) NOT NULL,
  `pickup_location` varchar(100) NOT NULL,
  `dropoff_location` varchar(100) NOT NULL,
  `someone_fullname` varchar(100) NOT NULL,
  `someone_contact_no` int(100) NOT NULL,
  `type_vehicle` varchar(100) NOT NULL,
  `payment_method` varchar(100) NOT NULL,
  `note` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `date_created` varchar(100) NOT NULL,
  `pickup_date` varchar(100) NOT NULL,
  `pickup_time` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`booking_id`, `user_id`, `booking_type`, `pickup_location`, `dropoff_location`, `someone_fullname`, `someone_contact_no`, `type_vehicle`, `payment_method`, `note`, `price`, `date_created`, `pickup_date`, `pickup_time`, `status`) VALUES
(1023, 364100, 'Book a ride', 'n/a', 'n/a', 'n/a', 0, 'motorcycle', 'gcash', 'make sure na humot imong helmet sir salamat!', 0, '2023-01-30T12:09:32.028Z', 'now', 'now', 'pending'),
(1024, 364100, 'Book for later', 'n/a', 'n/a', 'n/a', 0, 'motorcycle', 'paymaya', 'hatagan taka og tip if ma hatod ko nimo og dali.', 0, '2023-01-30T12:10:17.813Z', '7/1/2023', '20:10', 'pending'),
(1025, 364100, 'Book for someone', 'n/a', 'n/a', 'pedro penduko', 0, 'motorcycle', 'gcash', 'naa sya sa gawas nag hulat sa imo boss or tawagi lng sya naka red yahang sanina salamat!', 0, '2023-01-30T12:11:10.516Z', '30/1/2023', '20:11', 'pending'),
(1026, 364100, 'Book a ride', 'n/a', 'n/a', 'n/a', 0, 'motorcycle', 'gcash', '', 0, '2023-01-30T12:12:14.661Z', 'now', 'now', 'pending'),
(1027, 364100, 'Book a ride', 'n/a', 'n/a', 'n/a', 0, 'motorcycle', 'cash', 'before nimo eh accept make sure na dako na imong raincoat para dili ko mabasa kay naa koy dala impor', 0, '2023-01-30T12:13:49.331Z', 'now', 'now', 'pending'),
(1028, 364100, 'Book for later', 'n/a', 'n/a', 'n/a', 0, 'motorcycle', 'cash', 'tawagi lng ko later sir! thank you kong kinsa man maka accept sa akong booking!🥰🥰', 0, '2023-01-30T12:15:00.130Z', '30/1/2023', '10:15', 'pending'),
(1029, 364107, 'Book for later', 'n/a', 'n/a', 'n/a', 0, 'motorcycle', 'gcash', 'if ang maka accept akong booking tawagi!🥰', 0, '2023-01-30T12:22:54.618Z', '30/1/2023', '23:22', 'pending'),
(1030, 364107, 'Book a ride', 'n/a', 'n/a', 'n/a', 0, 'motorcycle', 'cash', '', 0, '2023-01-30T12:25:02.863Z', 'now', 'now', 'pending'),
(1031, 364107, 'Book for someone', 'n/a', 'n/a', 'juan dela cruz', 0, 'car', 'cash', 'naa sya sa gawas nag hulat naka red or call nalang yahang number.😄', 0, '2023-01-30T12:27:04.522Z', '30/1/2023', '20:27', 'pending'),
(1032, 364108, 'Book a ride', 'n/a', 'n/a', 'n/a', 0, 'motorcycle', 'cash', 'make sure na dako imong raincoat para dili ta ma basa salamat!🥰', 0, '2023-01-30T12:42:02.325Z', 'now', 'now', 'pending'),
(1033, 364108, 'Book for later', 'n/a', 'n/a', 'n/a', 0, 'car', 'gcash', 'tawagi ko unya sa time sa pickup 😄', 0, '2023-01-30T12:45:21.234Z', '30/1/2023', '23:45', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `home_address` varchar(100) NOT NULL,
  `province` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `birthdate` varchar(100) NOT NULL,
  `age` int(100) NOT NULL,
  `weight` int(100) NOT NULL,
  `cellphone_no` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `email`, `password`, `first_name`, `last_name`, `home_address`, `province`, `city`, `gender`, `birthdate`, `age`, `weight`, `cellphone_no`) VALUES
(364100, 'robante@sample.com', 'admin123', 'peter francis', 'robante', '123 tokyo agora', 'Misamis Oriental', 'Cagayan de Oro', 'male', '3/4/2002', 20, 150, 965234441),
(364102, 'bon@admin.com', 'bon123123', 'bon', 'magdugo', 'USA agora', 'Misamis Oriental', 'Cagayan de Oro', 'male', '1/1/2023', 20, 120, 965214751),
(364105, 'trazona@gmail.com', 'trazona123', 'louren', 'trazona', 'balay japon', 'Misamis Oriental', 'Cagayan de Oro', 'female', '3/1/2023', 20, 120, 912312345),
(364107, 'pedropenduko@gmail.com', 'pedro123', 'pedro', 'penduko', '123 gubat silingan', 'Misamis Oriental', 'Cagayan de Oro', 'male', '30/1/1997', 20, 75, 2147483647),
(364108, 'cardodalisay@gmail.com', 'cardo123', 'cardo', 'dalisay', '123 pair macabalan', 'Misamis Oriental', 'Cagayan de Oro', 'male', '30/1/2002', 20, 120, 964521745);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `booking_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1034;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=364109;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
