import React from 'react';

//This is the individually mapped item noted in TodoList.js Figuring out the style ternary was "fun"
const Todo = props => {
    return (
        <div onClick={() => props.checkComplete(props.inputted.id)} style={props.inputted.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>
            <p>{props.inputted.task}</p>
        </div>
    );
};

export default Todo;