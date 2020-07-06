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

  //This method toggles the strike-through for completed items in the list. The ternary for the actual strike-through is in Todo.js file 
  checkComplete = taskID => {
    this.setState({
      //Go through each item in the list to find the one clicked = taskID
      todoItems: this.state.todoItems.map(clickedItem => {
        if(clickedItem.id === taskID) {
          return {
            ...clickedItem,
            //Found clicked item, toggling true/false status below
            completed: !clickedItem.completed
          };
        } else {
          //Not the clicked item, return current object unchanged
          return clickedItem;
        }
      })
    });
  };

  //This method clears any entries on the list marked as 'Completed' via strike-through when the 'Clear Completed' button is pressed
  clearEntries = () => {
    this.setState({
      todoItems: this.state.todoItems.filter(itemCompleted => {
        return itemCompleted.completed === false;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList checkComplete={this.checkComplete} theList={this.state.todoItems} />
        <TodoForm addTodo={this.addTodo} clearEntries={this.clearEntries} />
      </div>
    );
  }
}

export default App;
