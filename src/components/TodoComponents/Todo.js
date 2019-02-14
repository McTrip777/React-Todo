// - `<Todo />` is a component that takes in the 
// `todo` data and displays the task to the screen.

import React from 'react';

function Todo(props) {
  return (
        <p className={props.items.completed ? 'completed' : null} 
        onClick={() => props.toggleCompleted(props.id)}>
            {props.items.task}
        </p>
  );
};
export default Todo;