import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    id: uuidv4(),
    title: '',
    author: '',
    category: '',
  });

  useEffect(() => {
    setState({ ...state, id: uuidv4() });
  }, [state.title]);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitBookToStore = (event) => {
    event.preventDefault();
    const input = document.querySelector('input');
    if (input) {
      dispatch(addBook(state));
      input.value = '';
    }
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
