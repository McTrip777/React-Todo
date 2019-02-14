// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo.


import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      task:''
    }
  }
  handleChanges = event =>{
    // console.log(event.target.value)
    this.setState({[event.target.name]: event.target.value
    });
  };

  submitItem = e =>{
    this.setState({task: ''});
    this.props.newTask(e, this.state.task)
  }

  render(){
  return (
    <form className='form' onSubmit={this.submitItem}>
      <input
        className='input'
        type="text"
        value={this.state.task}
        name="task"
        onChange={this.handleChanges}
        placeholder="insert task"
      />
      <button className='button' type="submit">Add Task</button>
    </form>
  );
  }
};

export default TodoForm;