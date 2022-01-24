const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tWY3c29a1dHLDQJJS36r/books';

const consumeApi = async (params) => {
  const {
    method, body, itemId, dispatch, type,
  } = params;
  const result = await fetch(`${baseUrl}/${itemId}`, {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((result) => result.json()).then((data) => dispatch({ type, payload: data }));
};

// todo: check param type

export default consumeApi;
