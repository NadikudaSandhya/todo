import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList />
    </div>
  );
};

export default App;
