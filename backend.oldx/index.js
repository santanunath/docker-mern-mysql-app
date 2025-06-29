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
    host: 'db', 
    user: 'MYSQL_USER', 
    password: 'MYSQL_PASSWORD', 
    database: 'test_db'
 })


// *********************
// Enable cors security headers
// *********************
app.use(cors())


// ***********************
// add an express method 
// to parse the POST method
// ***********************
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.json("Hello World")
})

app.get("/book",(req,res)=>{
    const q="SELECT * FROM tbl_books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.post("/book",(req,res)=>{
    const q ="INSERT INTO tbl_books (`title`,`desc`,`price`,`cover`) VALUES (?)";
    // const values=["title from backend","desc from backend","cover pic from backend"];
    const values=[
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]
   db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been added.")
    })

})



app.delete("/book/:id", (req,res)=>{
    const bookId=req.params.id;
    const q="DELETE FROM tbl_books WHERE id=?"

    db.query(q,[bookId],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been deleted.")
    })
})




app.put("/book/:id", (req,res)=>{
    const bookId=req.params.id;
    const q="UPDATE tbl_books SET `title`=?,`desc`=?,`price`=?,`cover`=? WHERE id=?"
    const values=[
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]
    db.query(q,[...values, bookId],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been updated.")
    })
})



//app.listen(8800,()=>{
//    console.log("Connect to backend.")
//})


// *******************
// run backend server 
// at defined port
// *******************

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`backend server is running at port: ${PORT}`);
  });
