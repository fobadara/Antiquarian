import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './addbook';
import RemoveButton from './remove';

const Books = () => {
  const booksReducer = useSelector((state) => state.booksReducer);
  const elements = [];
  booksReducer.forEach((book) => {
    elements.push(
      <div key={book.id}>
        {book.title}
        <RemoveButton id={book.id} key={book.id} />
      </div>,
    );
  });

  return (
    <div className="Home">
      <div className="books">{[...elements]}</div>
      <AddBook />
    </div>
  );
};

export default Books;
