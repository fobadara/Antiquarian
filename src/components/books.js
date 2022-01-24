import { useEffect, useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { consumeApi, getBook } from '../redux/books/books';
import AddBook from './addbook';
import RemoveButton from './remove';

const Books = ({ bookData, consumeApi }) => {
  const get = {
    method: 'GET', itemId: '', actionCreator: getBook,
  };

  const booksReducer = useSelector((state) => state.booksReducer);
  // const [state, setState] = useState();
  // const dispatch = useDispatch();
  console.log(booksReducer)

  useEffect(() => {
    setTimeout(() => {
      // setState({ ...state, state: '' })
      consumeApi();
    }, 800);
  }, []);
  // [booksReducer.status]);

  const { loading } = booksReducer;
  const { error } = booksReducer;
  const { status } = booksReducer;
  // Array of books
  const books = booksReducer.data.map((value) => (
    // {console.log(booksReducer)}
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

  return (
    <div className="Home">
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {status && !loading && !error && <h2>{status}</h2>}
      {books && (
        <>
          {books}
          <AddBook />
        </>
      )}
      ;
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

export default connect(mapStateToProps, mapDispatchToProps)(Books);
