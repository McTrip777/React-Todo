import React from 'react';

// import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
// `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.
import './components/TodoComponents/Todo.css'


let items = [{
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
},
{
  task: 'Mow Lawn',
  id: 1528817084359,
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
    }
  };

  newTask = (ev,task) => {
    ev.preventDefault();
    // console.log(tasking.target);
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
      };
    this.setState({
      items: [...this.state.items, newItem],
    });
  };


  toggleCompleted = itemId => {
    this.setState({
      items: this.state.items.map(item => {
        if (itemId === item.id){
        return {
          ...item,
          completed: !item.completed
        }
       }
       else{
        return item;
       }
      })
    })
  };

  clearCompleted = e =>{
    e.preventDefault();
    this.setState({
    items: this.state.items.filter(item => !item.completed)
    })
  }

  render(){
    return (
      <div className='container'>
        <div className='style'>
          <h1>Todo List:</h1>
          <TodoForm
            newTask={this.newTask}
            task={this.state.task}
            handleChanges={this.handleChanges}
          />
        <div>
          <TodoList toggleCompleted={this.toggleCompleted} 
          items = {this.state.items} />
        </div>
          
        <button className='buttonClear' 
        onClick={this.clearCompleted} 
        > Clear completed</button>
        <p className='instruction'><strong>NOTE:</strong> Choose item then click <strong>'Clear Complete'</strong> to remove.</p>
        </div>
      </div>
    );
  }
}

export default App;
