import React from "react" 
import { TodoCounter } from './TodoCounter';
import './App.css';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItems } from './TodoItems';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
    { text: "Cortar Cebolla", completed: true },
    { text: "Tomar el curso de Platzi de React", completed: false},
    { text: "Llorar con la Llorona", completed: false},
    { text: "LA Bebesuki", completed: false},
];

function App() {
    return( //Es lenguaje JSX
        <React.Fragment>

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

        </React.Fragment>
    );
}

export default App;