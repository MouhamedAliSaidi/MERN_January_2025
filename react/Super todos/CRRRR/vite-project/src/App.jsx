import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Form addTodo={addTodo} />
      <Display todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
