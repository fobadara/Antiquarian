import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title: 'I need API. I am ready.',
      author: 'human',
    };

    dispatch(addBook(newBook));
  };

  return (
    <>
      <h2>Add New Book</h2>
      <form action="#">
        <input type="text" required />
        <button type="submit" onClick={submitBookToStore}>Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
