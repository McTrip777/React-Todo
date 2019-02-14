import React from 'react';

// import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.

let items = [{
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
}
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change 
  // handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: items,
      task: '',
      id: '',
      completed: ''
    }
  };

  newTask = ev => {
    ev.preventDefault();
    // console.log(tasking.target);
    const newItem = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState({
      items: [...this.state.items, newItem],
      task: '',
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
      <TodoList items = {this.state.items} />
          </div>
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
