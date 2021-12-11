import { useState } from 'react';
import TodoList from './TodoList';
import Header from './Header';

const TodoContainer = () => {
  const [todos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  return (
    <div>
      <Header />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoContainer;
