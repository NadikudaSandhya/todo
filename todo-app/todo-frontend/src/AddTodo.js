import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const addTodo = () => {
    axios.post('http://localhost:5000/todos', { title })
      .then(response => {
        onAdd(response.data);
        setTitle('');
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
