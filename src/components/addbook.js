import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    item_id: '',
    title: '',
    author: '',
    category: '',
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitBookToStore = (event) => {
    event.preventDefault();
    setState({ ...state, item_id: uuidv4() });
    console.log(state)
    dispatch(addBook(state));
    // const newBook = {    dispatch(addBook(newBook));

    //   id: uuidv4(),
    //   title: 'I need API. I am ready for data.',
    //   author: 'human',
    // };
  };

  return (
    <>
      <h2>Add New Book</h2>
      <form action="#">
        <input type="text" name="title" onChange={handleChange} required />
        <button type="submit" onClick={submitBookToStore}>Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
