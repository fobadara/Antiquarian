import { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { consumeApi, getBook } from '../redux/books/books';
import AddBook from './addbook';
import Section1 from './section1';
import Completed from './completed';
import Progress from './progress';

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
      <div className="container section" key={value[0]}>
        <div className="responsive-grid container-2">
          <div className="" id="book-info">
            <div style={{ color: 'rgba(12, 12, 12, 0.5)', fontWeight: 'bold', fontSize: '0.8em' }}>
              {value[1][0].category}
              {' '}
            </div>
            <div>
              {value[1][0].title}
              {' '}
            </div>
            <div className="med-font" style={{ color: '#4386bf' }}>
              unknown
              {' '}
            </div>
            <Section1 id={value[0]} />
          </div>
          <div className="grow-2" id="completed">
            <Completed />
          </div>
          <div id="progress">
            <Progress />
          </div>
        </div>
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
