import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

// Tenemos una funcion que envuelve el alert

/*
function CreateTodoButton(props) {

    const onClickButton = () => {
        alert('Aqui se deberia abrir el modal');
    };


    return(
        <button 
            className='CreateTodoButton'
            onClick={onClickButton} // si no lo encerramos en funcion, se ejecutara sin haber antes una accion.
        >
            +
        </button>
    );
}

export { CreateTodoButton };
*/

// Si quisieramos reutilizar las funciones de este boton, suponiendo que hay muchos botones, hariamos lo siguiente.

function CreateTodoButton() {

    const { openModal, setOpenModal} = React.useContext(TodoContext);

    const onClickButton = () => {
        setOpenModal(!openModal);
    };

    /*

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };
        
    */


    return(
        <button 
            className='CreateTodoButton'
            onClick={onClickButton} // si no lo encerramos en funcion, se ejecutara sin haber antes una accion.
        >
            +
        </button>
    );
}

export { CreateTodoButton };

// Opciones B para mandar la funcion, aqui se ejecuta automaticamente

/*
function CreateTodoButton(props) {
    return(
        <button 
            className='CreateTodoButton'
            onClick={console.log('click')} // si no lo encerramos en funcion, se ejecutara sin haber antes una accion.
        >
            +
        </button>
    );
}

export { CreateTodoButton };
*/

// Opcion C para mandar la funcion, aqui espera a una accion.

/*
function CreateTodoButton(props) {
    return(
        <button 
            className='CreateTodoButton'
            onClick={() => console.log('click')}
        >
            +
        </button>
    );
}

export { CreateTodoButton };
*/