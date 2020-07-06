import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoItems: todos
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(), // ReadMe asked us to use Date.now(), but doing so returned an error. Changed instead to Date()
      completed: false
    };
    this.setState({todoItems: [...this.state.todoItems, newTask]});
  };

  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList theList={this.state.todoItems} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
