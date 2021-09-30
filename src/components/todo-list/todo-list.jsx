import * as React from 'react';
import { Checkbox } from '../checkbox';
import { useTodos } from '../../todo-context';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos } = useTodos();

  const handleDelete = (id) => {
    // Fix an ability to delete task
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
    
  };

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
    const index = todos.findIndex(todo => todo.id === id);
    const todo = todos[index]
    const toggledTodo = {...todo, checked: !todo.checked };
    const updatedTodos = [...todos];
    updatedTodos[index] = toggledTodo
    setTodos(updatedTodos)
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
