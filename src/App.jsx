import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);

  function addTask() {
    if (task.trim() !== '') {
      setTodo([...todo, { text: task }]);
      setTask('');
    }
  }

  function deleteTask(indexToDelete) {
    const newTodo = todo.filter((_, index) => index !== indexToDelete);
    setTodo(newTodo);
  }

  return (
    <div className="app-container">
      <h1>Todo List</h1>

      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="todo-list">
        {todo.map((item, index) => (
          <li key={index} className="todo-item">
            <span>{item.text}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
