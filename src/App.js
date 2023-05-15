import React from "react" 
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoItems } from './TodoItems/TodoItems';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';

import "./App.css"

const defaultTodos = [
    { text: "Cortar Cebolla", completed: true },
    { text: "Tomar el curso de Platzi de React", completed: false},
    { text: "Llorar con la Llorona", completed: false},
    { text: "Salir de Compras", completed: false},
    { text: "Ir al banco", completed: false},
];

function App() {
    return( //Es lenguaje JSX
        //React.Fragment
        <> 
            <div className="container">
                <div className="todoContainer">
                    <h1 className="title">TODO Machine</h1>
                    <TodoCounter completed = {16} total = {25}/>

                    <TodoSearch/>
                    
                    <TodoList>
                        {defaultTodos.map(todo => (
                            <TodoItems 
                                key={todo.text} 
                                text={todo.text}
                                completed={todo.completed}
                            />
                        ))}
                    </TodoList>
                    <CreateTodoButton/> 
                </div>
                
            </div>
        </>
    );
}

export default App;