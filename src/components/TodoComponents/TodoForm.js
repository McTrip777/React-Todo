// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo.


import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.addStudent}>
      <input
        type="text"
        value={props.task}
        task="task"
        onChange={props.handleChanges}
        placeholder="task"
      />
      <button type="submit">New Task</button>
    </form>
  );
};

export default TodoForm;