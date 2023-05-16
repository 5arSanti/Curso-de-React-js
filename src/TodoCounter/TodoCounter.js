import "./TodoCounter.css";
import React from "react";

function TodoCounter({total, completed}) {
    return(
        <>  
            {/* SI completa todas las teras */}
            {total === completed && (
                <h1 className="completedTasks">Haz completado todas tus tareas</h1>
            )}

            {/* SI hay teras sin completar */}
            {total !== completed && (
                <h1 className="completedTasks">Has completado <span>{completed}</span> de <span>{total}</span> TODOS</h1>
            )}
        </>
    );
}

export {TodoCounter};