import PropTypes from 'prop-types';
import RemoveButton from './remove';
import Comments from './comments';
import Edit from './edit';

const Section1 = (props) => {
  const { id } = props;
  return (
    <div style={{ margin: '1em 0' }}>
      <Comments />
      <RemoveButton id={id} />
      <Edit />
    </div>
  );
};

Section1.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Section1;
