import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

    return(
        <li className='TodoItem'>
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete} // si tuviera que mandar los atributos de la funcion. tendria que utilizar una arrow function
            >
             ✓ 
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}> {props.text} </p>
            <span 
                className='Icon Icon-delete'
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };
