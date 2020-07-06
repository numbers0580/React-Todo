import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }

    updateEntry = evt => {
        this.setState({item: evt.target.value});
    };

    submitForm = submitEvent => {
        submitEvent.preventDefault();
        if(this.state.item.length > 0) {
            this.props.addTodo(this.state.item);
        }
        this.setState({item: ''});
    };

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input type='text' name='item' placeholder='Add item being nagged about' value={this.state.item} onChange={this.updateEntry} style={{width: '200px'}} /><br />
                <button>Add Todo</button><br />
                <input type='button' value='Clear Completed'></input><br />
            </form>
        );
    }
}

export default TodoForm;