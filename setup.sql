CREATE TABLE IF NOT EXISTS `tbl_books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `desc`  varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `tbl_books` (`title`, `desc`) 
VALUES ('Ramayan', 'about ram');

INSERT INTO `tbl_books` (`title`, `desc`) 
VALUES ('Mahabharat', 'about pandava');
