// - `<Todo />` is a component that takes in the 
// `todo` data and displays the task to the screen.

import React from 'react';

function Todo(props) {
  return (
        <p className={`item${props.items.completed ? ' completed' : ''}`}
        onClick={() => props.toggleCompleted(props.items.id)}>
            {props.items.task}
        </p>
  );
};
export default Todo;