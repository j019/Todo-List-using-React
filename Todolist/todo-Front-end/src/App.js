import React, { useState, useEffect } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/todos')
      .then(response => response.json())
      .then(todos => setTodos(todos));
  }, []);

  const createNewTodo = newTodoText => {
    fetch('/todos',{
      method: 'post',
      body: JSON.stringify({ newTodoText }),
      headers: {
        'Content-Type':'application/json',
      }
    })
    .then(response => response.json())
    .then(updatedTools => setTodos(updatedTools));
  }

  const deleteTodo = todoText => {
    fetch('/todos/delete',{
      method: 'post',
      body: JSON.stringify({ text: todoText }),
      headers: {
        'Content-Type':'application/json',
      }
    })
    .then(response => response.json())
    .then(updatedTools => setTodos(updatedTools));
  }

  const completeTodo = todoText =>{
    fetch('/todos/complete',{
      method: 'post',
      body: JSON.stringify({ text: todoText }),
      headers: {
        'Content-Type':'application/json',
      }
    })
    .then(response => response.json())
    .then(updatedTools => setTodos(updatedTools));
  }

  return (
    <div className="App">
    <h1>My Todos App</h1>
    <NewTodoForm onClickCreate={createNewTodo} />
    <TodoList
      todos={todos}
      onCompleteTodo={completeTodo}
      onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
