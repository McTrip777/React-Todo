import React from 'react';

// import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.

const itemsArr = [{}];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change 
  // handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: itemsArr,
      inputTask: '',
      // id: '',
      // completed: ''
    }
  };

  newTask = tasking => {
    tasking.preventDefault();
    // console.log(tasking.target);
    const newItem = {
      inputTask: this.state.inputTask,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState({
      items: [...this.state.items, newItem],
      inputTask: '',
      id: Date.now(),
      completed: false
    });
  };

  handleChanges = event =>{
    // console.log(event.target.value)
    this.setState({[event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Todo List MVP!</h2>
          <div>
      <TodoList list = {this.state.items}/>
          </div>
      <TodoForm
        newTask={this.newTask}
        inputTask={this.state.inputTask}
        handleChanges={this.handleChanges}
        id={this.state.id}
        completed={this.state.completed}
      />
      </div>
    );
  }
}

export default App;
