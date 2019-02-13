import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
// `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: '',
      id: `Date.now()`,
      completed: false
    }
  };



  render() {
    return (
      <div>
        <h2>Todo List MVP!</h2>
      
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
