import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { consumeApi, addBook } from '../redux/books/books';

const AddBook = () => {
  const [state, setState] = useState({
    item_id: '',
    title: '',
    category: '',
  });

  // save input to state on change
  const handleChange = (param) => {
    setState({ ...state, item_id: uuidv4(), [param.target.name]: param.target.value });
  };

  const dispatch = useDispatch();

  const post = {
    method: 'POST', itemId: '', body: JSON.stringify(state), actionCreator: addBook,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.title.trim() && state.category.trim()) {
      dispatch(consumeApi(post));
      const input = document.querySelectorAll('input');
      input.forEach((currentItem) => {
        const input = currentItem;
        if (input) {
          setState({ ...state, status: false });
          input.value = '';
        }
      });
    }
  };

  return (
    <div className="container section" style={{ marginBottom: '1em' }}>
      <h2 style={{ opacity: '0.5' }}>Add New Book</h2>
      <form style={{}} className="flex" action="#">
        <input type="text" name="title" id="title" style={{ flexGrow: 1 }} onChange={handleChange} placeholder="Book title" required />
        <select name="category" id="category" style={{ margin: '0 1em' }} defaultValue="Select genre" onChange={handleChange} required>
          <option value="default" hidden>Select genre</option>
          <option value="crime">Crime</option>
          <option value="fantasy">Fantasy</option>
          <option value="fiction">Fiction</option>
          <option value="romance">Romance</option>
          <option value="science-fiction">Science fiction</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
        </select>
        <button className="blue-btn" type="submit" onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
