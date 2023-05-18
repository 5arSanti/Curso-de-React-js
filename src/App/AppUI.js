import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItems } from '../components/TodoItems';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoLoading } from "../components/ChargeComponents/TodoLoading";
import { TodoError } from "../components/ChargeComponents/TodoError";
import { EmptyTodos } from "../components/ChargeComponents/EmptyTodos";

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
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
                        {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}


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
                    <CreateTodoButton/> 
                </div>
                
            </div>
        </>
    );
}
export { AppUI };