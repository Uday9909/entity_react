import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    description: '',
    coverImage: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Book Added:', bookDetails);
    navigate('/');
  };

  return (
    <div>
      <h1>Add a New Book</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={bookDetails.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={bookDetails.author}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={bookDetails.description}
          onChange={handleChange}
          rows={4}
          required
        />

        <input
          type="url"
          name="coverImage"
          placeholder="Cover Image URL"
          value={bookDetails.coverImage}
          onChange={handleChange}
          required
        />

        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
