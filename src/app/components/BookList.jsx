import React from 'react';
import './BookList.css';

const BookList = ({ books }) => {
  return (
    <div className='book-c'>
      <div className="book-list-container">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-details">
              <h2 className="book-title">{book.title}</h2>
              <p className="book-description">{book.description}</p>
              <a href={book.link} target="_blank" rel="noopener noreferrer" className="book-button">
                Leer en línea
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
