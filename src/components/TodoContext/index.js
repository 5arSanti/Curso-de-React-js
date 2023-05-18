import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
        //Estados
        const {
            item: todos, 
            saveItem: saveTodos,
            loading,
            error,
        } = useLocalStorage("TODOS_v1", []);
        const [searchValue, setSearchValue] = React.useState("");
        const [openModal, setOpenModal] = React.useState(false);

    
    
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

        //Abrir y cerrar Modal


    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>

    );
}



export {TodoContext, TodoProvider};

            // loading={loading}
            // error={error}
            // completedTodos={completedTodos}
            // totalTodos={totalTodos}
            // searchValue={searchValue}
            // setSearchValue={setSearchValue}
            // searchedTodos={searchedTodos}
            // completeTodo={completeTodo}
            // deleteTodo={deleteTodo}