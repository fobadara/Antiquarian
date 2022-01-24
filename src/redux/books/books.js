import { useDispatch } from 'react-redux';
// import consumeApi from '../../components/api';

const CONSUME_API_BEGIN = 'antiquarian/books/CONSUME_API_BEGIN';
const GET_ERROR = 'antiquarian/books/GET_ERROR';
const ADD_BOOK = 'antiquarian/books/ADD_BOOK';
const GET_BOOK = 'antiquarian/books/GET_BOOK';
const REMOVE_BOOK = 'antiquarian/books/REMOVE_BOOK';

// Loading action creator
const consumeApiBegin = () => ({
  type: CONSUME_API_BEGIN,
  payload: { loading: false },
});

// Error action creator
const getError = (payload) => ({
  type: GET_ERROR,
  payload,
});
// Make API call to add a new book to database
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

// Make API call to get books from database
export const getBook = (payload) => ({
  type: GET_BOOK,
  payload,
});

// Make API call to remove book from database
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// Create action that returns function to handle API calls
export const consumeApi = (params) => ((dispatch) => {
  const {
    method, body, itemId, actionCreator,
  } = params;
  console.log(body)
  const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tWY3c29a1dHLDQJJS36r/books';
  // dispatch(consumeApiBegin());
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tWY3c29a1dHLDQJJS36r/books', {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((response) => {
      const data = response;
      console.log(data)
      // Either getBooks addBooks or deleteBooks
      dispatch(actionCreator(data));
    })
    // .catch((error) => {
    //   const errorMessage = error.message;
    //   dispatch(getError(errorMessage));
    // });
}
);

const initialState = {
  data: [],
  status: false,
  loading: false,
  error: null,
};

const booksReducer = (state = initialState, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case CONSUME_API_BEGIN:
      return { ...state, status: false, loading: true };
    case ADD_BOOK:
      return { ...state, loading: false, status: 'Upload successful' };
    case GET_BOOK:
      return { ...state, loading: false, data: Object.entries(action.payload) };

    case REMOVE_BOOK:
      return state.data.filter((book) => book.id !== action.payload);
    case GET_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
  console.log(action.payload)
};

export default booksReducer;
