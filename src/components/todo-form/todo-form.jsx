import React, {useState} from 'react';
import { useTodos } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = useTodos();
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    // Fin an ability to add new task
    let newId = 1 ;
    // To avoid duplicate id numbers
    todos.length !== 0 ? newId += todos[todos.length-1].id : newId = 0;
    const newTodo = {
      id: newId,
      label: task,
      checked: false
    }
    setTodos([...todos, newTodo])
    setTask('')
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
