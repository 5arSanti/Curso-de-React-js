import React from "react";
import "./notFoundTodos.css";

function NotFoundTodos(){
    return(
        <div className="primaryNotFoundContainer">
            <div className="notFoundContainer">
                <img src="https://cdn-icons-png.flaticon.com/512/2748/2748724.png" alt="EmptyTodos"/>
                <h1>Todo no encontrado</h1>
                <p>Prueba buscado otro Todo</p>
            </div>
        </div>
    );
}

export {NotFoundTodos};