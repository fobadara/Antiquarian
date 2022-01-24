import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { consumeApi, addBook } from '../redux/books/books';

const AddBook = () => {
  const [state, setState] = useState({
    item_id: uuidv4(),
    title: '',
    author: '',
    category: '',
  });

  const handleChange = (param) => {
    setState({ ...state, [param.target.name]: param.target.value });
    // console.log(state);
  };

  const dispatch = useDispatch();

  const post = {
    method: 'POST', itemId: '', body: JSON.stringify(state), actionCreator: addBook,
  };
  // const initialState = {
  //   data: [],
  //   status: false,
  //   loading: false,
  //   error: null,
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(consumeApi(post));
  };

  return (
    <>
      <h2>Add New Book</h2>
      <form action="#">
        <input type="text" name="title" id="title" onChange={handleChange} placeholder="Book title" required />
        <input type="text" name="author" id="author" onChange={handleChange} placeholder="Author" required />
        <select name="category" id="category" defaultValue="Select genre" onChange={handleChange} required>
          <option value="default" hidden>Select genre</option>
          <option value="crime">Crime</option>
          <option value="fantasy">Fantasy</option>
          <option value="fiction">Fiction</option>
          <option value="romance">Romance</option>
          <option value="science-fiction">Science fiction</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
        </select>
        <button type="submit" onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </>
  );
};

export default AddBook;
