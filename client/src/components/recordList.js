import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RecordList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/record/`);
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllBooks();
  }, []);

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:5050/record/${_id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h1>Book store</h1>

      <div className="books">
        {books.map((book) => (
          <div className="book" key={book._id}>
            <Link to={`./${book._id}`}>
              <img src={book.cover} alt="" />
            </Link>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <span>Price: {book.price} PLN</span>
            <span>
              <button className="delete" onClick={() => handleDelete(book._id)}>
                Delete
              </button>
              <button className="update">
                <Link className="link" to={`./edit/${book._id}`}>
                  Update
                </Link>
              </button>
            </span>
          </div>
        ))}
      </div>
      <button className="addBook">
        <Link className="link" to="/create">
          Add new book
        </Link>
      </button>
    </div>
  );
}
