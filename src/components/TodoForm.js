import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }

    //Tried moving 'updateEntry' and 'submitForm' to App.js, but since they both use targetted events, I got errors doing so
    //Even tried changing this file from a class to a const and removing the render(), but I gave up after a while
    updateEntry = evt => {
        this.setState({item: evt.target.value});
    };

    submitForm = submitEvent => {
        submitEvent.preventDefault();
        //Wrapped this in an if-statement to prevent empty tasks from being added to the list
        if(this.state.item.length > 0) {
            this.props.addTodo(this.state.item);
        }
        //Clears out input field after submitting form
        this.setState({item: ''});
    };

    //The 'Clear Completed' button was pressed, calling a function found in App.js to do the work
    clearCompletes = () => {
        this.props.clearEntries();
    };

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input type='text' name='item' placeholder='Add item being nagged about' value={this.state.item} onChange={this.updateEntry} style={{width: '200px'}} /><br />
                <button>Add Todo</button><br />
                <input type='button' value='Clear Completed' onClick={this.clearCompletes}></input><br />
            </form>
        );
    }
}

export default TodoForm;