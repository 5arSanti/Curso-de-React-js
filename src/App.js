import React from "react" 
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoItems } from './TodoItems/TodoItems';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';

import "./App.css"

const defaultTodos = [
    { text: "Cortar Cebolla", completed: true },
    { text: "Tomar el curso de Platzi de React", completed: true},
    { text: "Llorar con la Llorona", completed: false},
    { text: "Salir de Compras", completed: false},
    { text: "Ir al banco", completed: true},
    { text: "Hacer la cena", completed: false},
];

function App() {
    const [todos, setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState("");

    //TodoCounter
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    //TodoSearch
    const searchedTodos = todos.filter(
        (todo) => { 
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();

            return todoText.includes(searchText); 
        } 
    );
    
    //Complete and Delete
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        setTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1); 
        setTodos(newTodos);
    }

    
    //Aplicacion
    return( //Es lenguaje JSX
        //React.Fragment
        <> 
            <div className="container">
                <div className="todoContainer">
                    <h1 className="title">TODO Machine</h1>
                    <TodoCounter 
                        completed = {completedTodos} 
                        total = {totalTodos}
                    />
                    <TodoSearch
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />

                    <TodoList>
                        {searchedTodos.map(todo => (
                            <TodoItems 
                                key={todo.text} 
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo() }
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