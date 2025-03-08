// src/components/Home.jsx
import { useNavigate } from 'react-router-dom';
import React from "react";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Book Library</h1>

      {/* Add Book Button */}
      <button 
        className="add-book-btn"
        onClick={() => navigate('/add-book')}
      >
        Add Book
      </button>

      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;