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
        setTodos([...todos, { text, done: false }]);
        inputRef.current.value = '';
      }
    }
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ul>
        {todos.map((item, index) => (
          <li
            key={index}
            style={{
              textDecoration: item.done ? 'line-through' : 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '250px'
            }}
          >
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => toggleTodo(index)}
            >
              {item.text}
            </span>
            <button
              onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <input ref={inputRef} placeholder="Enter Item..." />
      <button onClick={handleTodo} style={{background: 'green'}}>Add</button>
    </div>
  );
}

export default App;
