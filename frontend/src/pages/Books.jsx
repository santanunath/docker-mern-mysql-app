import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const BACKEND_API_URL = "http://backend:4000"; // defined in docker-compose.yml



const Books=()=> {

  // ------------
  // all retrieved records are stored in 'books' variable 
  // ------------
  const [books, setBooks]= useState([]);

  
  // ---------
  // function defined inside
  // useEffect()
  // executes once when the page loads
  // ---------
  useEffect(() => {
    
    fetchAllBooks()
    
  },[]); // Empty dependency array means it runs once on page load


    
    // ****************
    // GET all books
    // ****************
    const fetchAllBooks= async ()=> {
        try
        {
        //  const res = await axios.get("http://localhost:8800/book");
           alert("backend api url = " + BACKEND_API_URL);
            const res = await axios.get(BACKEND_API_URL + "/book");
           console.log(res)
          setBooks(res.data); // all records are stored in 'books' variable
        }
        catch(err)
        {
          console.log(err);
        }
    }

  
  
  // ****************
  // DELETE a book
  // ****************
  const handleDelete= async (id)=>{
    
    try
    {
    //  await axios.delete("http://localhost:8800/book/"+id);
      await axios.delete(BACKEND_API_URL + "/book/" + id);
      window.location.reload()
    }
    catch(err)
    {
      console.log(err);
    }
    
  }

  return (
    <div>
      <h1>My Books</h1>
      <div className='books'>

        {books.map(book => (

          <div className="book" key={book.id}>
           
            <h2>{book.title}</h2>

            <p>{book.desc}</p>    

             <button className='delete' onClick={()=>handleDelete(book.id)}>Delete</button>
             <button className='update'>
             <Link to={`/update/${book.id}`}>
              Update
             </Link>
             </button>
          </div>
        ))}

      <button>
        <Link to="/add" >
         Add new book
        </Link>
      </button>

      </div>
      
    </div>
  );
}

export default Books
