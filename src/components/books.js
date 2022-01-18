import React from 'react';
import PropTypes from 'prop-types';
import AddBook from './addbook';

const Books = (props) => {
  const elements = [];
  const { books } = props;
  books.forEach((element) => {
    elements.push(
      <div key={element.id}>
        {element.title}
        <span> Remove</span>
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

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default Books;
