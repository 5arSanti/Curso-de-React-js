import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";
import React from "react";

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)

    return(
        <>  
            {/* SI completa todas las tareas */}
            {totalTodos === completedTodos && (
                <h1 className="completedTasks">Haz completado todas tus tareas</h1>
            )}

            {/* SI hay tareas sin completar */}
            {totalTodos !== completedTodos && (
                <h1 className="completedTasks">Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS</h1>
            )}
        </>
    );
}

export {TodoCounter};