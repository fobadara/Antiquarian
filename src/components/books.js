import { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { consumeApi, getBook } from '../redux/books/books';
import AddBook from './addbook';
import RemoveButton from './remove';

const Books = ({ consumeApi }) => {
  const booksReducer = useSelector((state) => state.booksReducer);
  const [state, setState] = useState();

  useEffect(() => {
    setTimeout(() => {
      setState({ ...state, state: '' });
      consumeApi();
    }, 300);
  }, [booksReducer.status]);

  const { loading } = booksReducer;
  const { error } = booksReducer;
  const { status } = booksReducer;
  let books;
  // Array of books
  if (booksReducer.data) {
    books = booksReducer.data.map((value) => (
      <div key={value[0]}>
        <span>
          {value[1][0].category}
          {' '}
        </span>
        <span>
          {value[1][0].title}
          {' '}
        </span>
        <span>
          {value[1][0].author}
          {' '}
        </span>
        <RemoveButton id={value[0]} />
      </div>
    ));
  }

  return (
    <div className="Home">
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {status && !error && <h2>{status}</h2>}
      {books.length === 0 && !error && <h2>The store is currently empty. Please add a book.</h2>}
      {books && (
        <>
          {books}
          <AddBook />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookData: state.booksReducer,
});

const mapDispatchToProps = (dispatch) => {
  const get = {
    method: 'GET', itemId: '', actionCreator: getBook,
  };

  return {
    consumeApi: () => dispatch(consumeApi(get)),
  };
};

Books.propTypes = {
  consumeApi: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
