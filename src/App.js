import React from 'react';

import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.

const items = [
  {
  task: '',
  id: `Date.now()`,
  completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items:items,
      task: '',
      id: `Date.now()`,
      completed: false
    }
  };

  newTask = tasking => {
    tasking.preventDefault();
    console.log(tasking.target);
   
    const newItem = {
      task: this.state.task,
    };
    this.setState({
      items: [...this.state.items, newItem],
      task: '',
    });
  };

  handleChanges = btnClick =>{
    console.log(btnClick.target.value)
    this.setState({
      [btnClick.target.task]: btnClick.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Todo List MVP!</h2>
            {this.state.items.map((i) => (
            <Todo key={this.state.id} student={i} />
          ))}
      <TodoForm
        newTask={this.newTask}
        task={this.state.task}
        handleChanges={this.handleChanges}
      />
      </div>
    );
  }
}

export default App;
