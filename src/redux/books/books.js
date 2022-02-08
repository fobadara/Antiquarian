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
  const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tWY3c29a1dHLDQJJS36r/books';
  // show loading text
  dispatch(consumeApiBegin());
  // fetch based on parameters
  fetch(`${baseUrl}/${itemId}`, {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
    },
    // Necessary because get returns json.
    // Absence of condition causes the json.parse error line 1 column 1
  }).then((response) => ((method === 'GET') ? response.json() : response.text()))
    .then((response) => {
      const data = response;
      // Either getBooks, addBooks or deleteBooks
      dispatch(actionCreator(data));
    }).catch((error) => {
      const errorMessage = error.message;
      dispatch(getError(errorMessage));
    });
}
);

const initialState = {
  data: [],
  status: false,
  loading: false,
  error: null,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSUME_API_BEGIN:
      return { ...state, status: false, loading: true };
    case ADD_BOOK:
      return { ...state, loading: false, status: 'Upload successful' };
    case GET_BOOK:
      return { ...state, loading: false, data: Object.entries(action.payload) };

    case REMOVE_BOOK:
      return ({
        ...state,
        data: state.data.filter((book) => book.id !== action.payload),
        status: action.payload,
      });
    case GET_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default booksReducer;
