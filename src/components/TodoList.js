import PropTypes from 'prop-types';
import Item from './TodoItem';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <Item key={todo.id} completed={todo.completed} hello={todo.title} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default TodoList;
