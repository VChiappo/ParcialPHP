-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-09-2024 a las 22:17:03
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `students`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `students`
--

CREATE TABLE `students` (
  `Id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Image` varchar(500) NOT NULL,
  `Active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `students`
--

INSERT INTO `students` (`Id`, `Name`, `Phone`, `Email`, `Image`, `Active`) VALUES
(3, 'Victoria Chiappo', '03573-15459137', 'victoriachiappo@gmail.com', './uploads/png-clipart-child-care-computer-icons-avatar-user-profile-child-child-face.png', 1),
(4, 'Victoria Chiappo', '03573-15459137', 'victoriachiappo@gmail.com', './uploads/png-clipart-child-care-computer-icons-avatar-user-profile-child-child-face.png', 1),
(5, 'Victoria Chiappo', '03573-15459137', 'victoriachiappo@gmail.com', './uploads/png-clipart-child-care-computer-icons-avatar-user-profile-child-child-face.png', 1),
(6, 'Juan Perez', '03573-15459138', 'juan@gmail.com', './uploads/sticker-png-green-circle-child-avatar-user-profile-smile-boy-cartoon-face.png', 1),
(7, 'Victoria Chiappo', '03573-15459137', 'victoriachiappo@gmail.com', './uploads/pngtree-student-cartoon-character-illustration-commercial-element-cartoon-character-illustrationprimary-png-image_565710.jpg', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `students`
--
ALTER TABLE `students`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
