CREATE TABLE IF NOT EXISTS `tbl_books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cover` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `desc`  varchar(50) NOT NULL,
  `price` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `tbl_books` (`cover`, `title`, `desc`, `price`) 
VALUES ('ram ram', 'Ramayan', 'about ram janma bhoomi', 'rs200');

