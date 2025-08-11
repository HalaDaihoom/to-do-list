'use client';

import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const handleTodo = () => {
    if (inputRef.current) {
      const text = inputRef.current.value.trim();

      if (text !== '') {
        setTodos((prevTodos) => [...prevTodos, text]);
        inputRef.current.value = '';
      }
    }
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <h2>Keep Shining</h2>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input ref={inputRef} placeholder="Enter Item..." />
      <button onClick={handleTodo}>Add</button>
    </div>
  );
}

export default App;
