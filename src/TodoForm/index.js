import React from'react';
import { TodoContext } from '../TodoContext';
import './Form.css';

function TodoForm() {

    //crearemos un mismo estado local chico, no dentro de nuestro provider

    const[newTodoValue, setNewTodoValue] = React.useState('');

    // consumiremos el estado con todo context para evitar que corra de forma automatica el refresh de form
    
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        }
    
    return (

        <form class='TodoForm' onSubmit={onSubmit}>
            
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Add To Do'
            />

            <label>...</label>

            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>

                <button 
                    type='submit'
                >
                    Add
                </button>
            </div>

        </form>
    );
}

export { TodoForm }