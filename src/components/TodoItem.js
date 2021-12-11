import PropTypes from 'prop-types';

const TodoItem = ({ completed, hello }) => (
  <li>
    <input type="checkbox" checked={completed} readOnly />
    {hello}
  </li>
);

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  hello: PropTypes.string.isRequired,
};

export default TodoItem;
