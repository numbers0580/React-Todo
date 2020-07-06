// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

//Ummm... In the interest of notating my work, here's a note! But really, nothing of note is needed for this file. It maps out the items in the list! There, happy?
const TodoList = props => {
    return (
        <div>
            {props.theList.map(eachItem => (
                <Todo checkComplete={props.checkComplete} key={eachItem.id} inputted={eachItem} />
            ))}
        </div>
    );
};

export default TodoList;