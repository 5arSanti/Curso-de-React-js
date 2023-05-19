import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItems } from '../components/TodoItems';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoLoading } from "../components/ChargeComponents/TodoLoading";
import { TodoError } from "../components/ChargeComponents/TodoError";
import { EmptyTodos } from "../components/ChargeComponents/EmptyTodos";
import { TodoContext } from '../components/TodoContext';
import { NotFoundTodos } from '../components/ChargeComponents/notFoundTodos';
import {Modal} from "../components/Modal"
import { AddTodo } from '../components/AddTodo';


function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        totalTodos,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)
    //Aplicacion
    return( //Es lenguaje JSX
    //React.Fragment
    <>
        <div className="container">
            <div className="todoContainer">
                <h1 className="title">TODO Machine</h1>
                
                <TodoCounter/>
                <TodoSearch/>

                <TodoList>
                    {loading && (
                        <>
                            <TodoLoading/>
                            <TodoLoading/>
                            <TodoLoading/>
                            <TodoLoading/>
                            <TodoLoading/>
                            <TodoLoading/>
                        </>
                        )}
                    {error && <TodoError/>}
                    {(!loading && totalTodos === 0) && <EmptyTodos/>}
                    {(!loading && searchedTodos.length === 0 && totalTodos !== 0) && <NotFoundTodos/>}


                    {searchedTodos.map(todo => (
                        <TodoItems
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text) }
                        />
                    ))}
                </TodoList>

                <CreateTodoButton
                    setOpenModal={setOpenModal}
                />
                
                {openModal && (
                    <Modal>
                        <AddTodo/>
                    </Modal>
                )}

            </div>
        </div>
    </>
    );
}
export { AppUI };