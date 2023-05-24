import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
//import logo from './logo.svg';
//import './App.css';

const todos = [
    {text: 'Cantar en Foro Sol', completed: true},
    {text: 'Pintar con Frida', completed: false},
    {text: 'Nadar con Brownlee', completed: false},
]

// como empieza con mayuscula sabemos que es un componentes, el codigo entre llaves {} es codigo java script

// const url = 'https://imagnes?/chistosas.jpg'

//aqui no se descomentaron el apps.cc porque se tiene react fragment, no tiene eteiquetas que se vayan a transformar en html, sino que son componentes.

function App() {
  return (

    <React.Fragment>

      {/* Para comentar en react, le haces asi. En este caso, comentamos porque los elementos no están definidos */}

      <TodoCounter />

      <TodoSearch />

      {/*
      <input placeholder='Agregar Tareas' />
      */}
      
      <TodoList>

        {/* Cada vez que llamamos a todo item, no solo mandaremos la propiedad item para optimizar, sino que mandaremos una nueva propiedad llamada completed*/ }

        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}

            />
        ))}
        
      </TodoList>

      <CreateTodoButton />
      

    </React.Fragment>

  );
}

export default App;
