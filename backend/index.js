const express = require('express');
const app = express();

const mysql = require('mysql2');
const cors = require('cors');


// *****************
// Add MYSQL DATABASE CONNECTION
// *****************
// below values should be same as 
// environment variables for 'backend'
// defined in file 'docker-compose.yml'
// ****************
const db = mysql.createPool(
  {
    host: 'db',  // your MySQL host
    user: 'MYSQL_USER', // your MySQL username
    password: 'MYSQL_PASSWORD', // your MySQL password
    database: process.env.MYSQL_DATABASE  // the database you want to connect
//  database: 'test_db'
 })

console.log("connected to mysql database");


// *********************
// Enable cors security headers
// *********************
//app.use(cors())


// ***********************
// Enable cors security header and
// add an express method 
// to parse the POST method
// ***********************
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ****************
// HOME PAGE
// ****************
// http method: GET
// API url: /
// ****************
app.get('/', (req, res) => {
  res.send('Hi There')
});


// *****************
// GET all of the books 
// in the database
// *****************
// http method: GET
// API url: /book
// *****************
app.get('/book', (req, res) => {
  const SelectQuery = " SELECT * FROM  tbl_books";
  db.query(SelectQuery, (err, result) => {
    res.send(result)
  })
})


// ****************
// ADD a book 
// to the database
// ****************
// http method: POST
// API url: /insert
// ****************
app.post("/insert", (req, res) => {
  const bookName = req.body.setBookName;
  const bookReview = req.body.setReview;
  const InsertQuery = "INSERT INTO tbl_books (book_name, book_review) VALUES (?, ?)";
  db.query(InsertQuery, [bookName, bookReview], (err, result) => {
    console.log(result)
  })
})


// *****************
// DELETE a book 
// from the database
// *****************
// http method: DELETE 
// API url: /delete
// *****************
app.delete("/delete/:bookId", (req, res) => {
  const bookId = req.params.bookId;
  const DeleteQuery = "DELETE FROM tbl_books WHERE id = ?";
  db.query(DeleteQuery, bookId, (err, result) => {
    if (err) console.log(err);
  })
})


// *********************
// UPDATE a book review
// *********************
// http method: PUT
// API url: /update
// *********************
app.put("/update/:bookId", (req, res) => {
  const bookReview = req.body.reviewUpdate;
  const bookId = req.params.bookId;
  const UpdateQuery = "UPDATE tbl_books SET book_review = ? WHERE id = ?";
  db.query(UpdateQuery, [bookReview, bookId], (err, result) => {
    if (err) console.log(err)
  })
})





// *******************
// run backend server 
// at defined port
// *******************

//app.listen('3001', () => { })

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`backend server is running at port: ${PORT}`);
  });
