import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

// ahora no se reaccionara con el click, se reaccionara con el cambio de texto de un imput

/* tambien se podria trabajar con clases como

class Componente extends React.Component {
    constructor() {
        this.state = {
            ejemplo: 'Saludos'
        }
    }
}

render() {
    return(
        <div onClick={()=. this.setState('Adios')}>{this.state.patito}</div> //Seria Adios, porque se manda con el onClick
    )
}

*/

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

/*

    const [] = React.useState('');

    [
        'Saluds' // el array cero va a tener nuestro estado. la segunda poscion tien un estado function seState para editar estado
        setState('Adios')
    ]

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    }

*/


//    const [searchValue, setSearchValue] = React.useState(''); // le mando string vacio para conectar con string de busqueda, para que sea igual al estado que acbamos de crear, para que cada que se actualice, se actualice con el nuevo valor que escribieron las usuarias

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    //cuando mandemos el estado se reenderizara el componente

    return(
        <input 
            className='TodoSearch' 
            placeholder='Search To Do'
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );

    // no se pueden reenderizar varias etiquetas en un solo componente
    // ahora tenemos
}

export { TodoSearch };
