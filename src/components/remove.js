import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const RemoveButton = (props) => {
  const { id } = props;
  console.log(id);
  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    if (id) {
      dispatch(removeBook(id));
    }
  };

  return (
    <button type="button" id={id} onClick={removeBookFromStore}>Remove</button>
  );
};

RemoveButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveButton;
