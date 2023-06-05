import React from 'react';
import { useLocalStorage  } from './useLocalStorage';

const TodoContext = React.createContext();

// HAcemos funcion puente

function TodoProvider(props) {

    const {
        // ahora traemos un objeto
        item: todos, //renombramos con los dos puntos.
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []); // le mandamos donde guardar la informacion
    
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length; // vamos a contar los todos, !! es verdadeor el valor?
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if(!searchValue.length > 0) {
        searchedTodos = todos;
      } else {
          searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLocaleLowerCase();
            const searchText = searchValue.toLocaleLowerCase();
    
            return todoText.includes(searchText);
    
          });
      } 
    
      // cada vez que reciba un texto va a mostrart cual de todos los todos comple esa condicion, se clonan los todos y se marca a ese todo con nuestras condiciones de mismo texto la propiedad completed
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        });
        
        //tenemos que crear un nuevo objeto dentro de nuestra lista
    
        saveTodos(newTodos);
        
        // todos[todoIndex] = {
        //   text: todos[todoIndex].text,
        //   completed: true,
        // };
      }

      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1); //donde empezamos a cortar, y cuantas porciones cortamos
    
        saveTodos(newTodos);
      }
    
    // console.log('Render (antes de useeffect)');
    
    // React.useEffect(() => {
    //   console.log('use effect');
    // }, [totalTodos]); //este hook lo que va a hacer es ejecutar el codigo que le enviamos justo antes de reenderizar, cuando tiene todo listo
    
    // // el array nos ayuda a definir cuando ejecutar el useeffect
    
    // // si quisieramos hacerlo una vez que ya se renderizo, usuariamos React.userLayoutEffect, para etiquetas que normalmente no se pueden manipular
    

    return(
            // este componente envolvera a toda la aplicacion, ac cualquier componetne dentro de los compoentnes donde sea que llamemos el consumidor del contexto
        
            <TodoContext.Provider value = {{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                addTodo,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal,

                // objeto listo con todas las propeidades guardadas anteriormente
            }}>
                    {props.children}
            </TodoContext.Provider>
            //value va a ser un objeto
            // decirle a provider que informacion vamos a compartir con value
    );
}

// ahora exportemos contexto y todo provider
export { TodoContext, TodoProvider }; 



/* en el todo context tenemos dos elementos
    <TodoContext.Provider></TodoContext.Provider>
    <TodoContext.Consumer></TodoContext.Consumer>

    como compartimos mutuamente esa informacion
*/