import React from 'react';
import { TodoCounter } from '../TodoCounter';
// vamos a importar a nuestro contexto
import { TodoContext } from '../TodoContext'
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {
    //podemos usar react hooks

    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>

        {/* Para comentar en react, le haces asi. En este caso, comentamos porque los elementos no están definidos */}

            <TodoCounter />

            {/* 
            <TodoCounter 
                total={totalTodos}
                completed={completedTodos}
            />
            Tampoco estas son necesarias ya que las recibiremos de cada uno de los componentes */}

            <TodoSearch />

            {/* <TodoSearch 
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
            /> */}

            {/*
            <input placeholder='Agregar Tareas' />
            */}

            <TodoList>

                {error && <TodosError error={error} />}
                {loading && <TodosLoading/>}  {/* mientras nuestra app llama los datos de la app, es como se comportaria una de verdad */}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}


                {/* Cada vez que llamamos a todo item, no solo mandaremos la propiedad item para optimizar, sino que mandaremos una nueva propiedad llamada completed*/ }

                {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
    
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}

            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
            

        </React.Fragment>

    );
}

export { AppUI };