import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);
  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    const checked = todos.filter(todo => todo.checked);
    return checked.length
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
