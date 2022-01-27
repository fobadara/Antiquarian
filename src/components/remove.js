import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { consumeApi, removeBook } from '../redux/books/books';

const RemoveButton = (props) => {
  const { id } = props;
  const remove = {
    method: 'DELETE', itemId: id, body: JSON.stringify({ item_id: id }), actionCreator: removeBook,
  };
  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    dispatch(consumeApi(remove));
  };

  return (
    <button type="button" id={id} onClick={removeBookFromStore}>Remove</button>
  );
};

RemoveButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveButton;
