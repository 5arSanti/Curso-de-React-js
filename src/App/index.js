import React from "react" 
import { AppUI } from "./AppUI"
import { useLocalStorage } from "./useLocalStorage";

import "./App.css"

// localStorage.removeItem("TODOS_v1");
// const defaultTodos = [
//     { text: "Cortar Cebolla", completed: true },
//     { text: "Tomar el curso de Platzi de React", completed: true},
//     { text: "Llorar con la Llorona", completed: false},
//     { text: "Salir de Compras", completed: false},
//     { text: "Ir al banco", completed: true},
//     { text: "Hacer la cena", completed: false},
// ];
// let stringifiedTodos = JSON.stringify(defaultTodos); 

// localStorage.setItem("TODOS_v1", stringifiedTodos);



//App
function App() {

    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_v1", []);
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
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1); 
        saveTodos(newTodos);
    }
    return(
        <AppUI
            loading={loading}
            error={error}
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={searchedTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
    )
}

export default App;