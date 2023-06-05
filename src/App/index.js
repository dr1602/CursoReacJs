import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI'

//import './App.css';
//import logo from './logo.svg';
//import './App.css';

// const defaultTodos = [
//     {text: 'Cantar en Foro Sol', completed: true},
//     {text: 'Pintar con Frida', completed: true},
//     {text: 'Nadar con Brownlee', completed: false},
// ]

// como empieza con mayuscula sabemos que es un componentes, el codigo entre llaves {} es codigo java script

// const url = 'https://imagnes?/chistosas.jpg'

//aqui no se descomentaron el apps.cc porque se tiene react fragment, no tiene eteiquetas que se vayan a transformar en html, sino que son componentes.

// una de las reglas de las app hooks es que empiecen con 'use'

function App() {
// console.log('Render (luego del useeffect)');
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider> 

    // ahora cualquier componente dentro de nuestro AppUI, va a poder llamar a nuestro consumer para consumir nuestro estado.
    //Ya no le mandamos ninguna propiedad
    
  
  );
}

export default App;
