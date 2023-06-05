import React from 'react';
import { TodoContext } from '../TodoContext';

import './TodoCounter.css'; //importar archivo de css, de acuerdo con el curso de frameworks y librerias

/* 
Una opcion para escribir CSS en react:

const styles = {
    color: '#E37222',
    backgroundColor: '#07889B', //en vez de guiones, aplicac cammel case.
};

function TodoCounter() {
    return(
        < h2 style={styles}> Has completado 2 de 3 TODOs </h2>
    );
}

// Otra opcion es:

function TodoCounter() {
    return(
        < h2 style={const styles = {
            color: '#E37222',
            backgroundColor: '#07889B', //en vez de guiones, aplicac cammel case.
        }}> Has completado 2 de 3 TODOs </h2>
    );
}

*/

function TodoCounter() {

    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return(
        < h2 className='TodoCounter'> Completaste {completedTodos} de {totalTodos} TODOs </h2>
    );
}

// cuando queremos enviar un objeto a una propiedad o atributo o react, tenemos que usar llaves. en este caso se necesitan 2 llaves.

export { TodoCounter };
