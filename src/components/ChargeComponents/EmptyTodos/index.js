import React from "react";
import "./EmptyTodos.css";

function EmptyTodos(){
    return(
        <div className="primaryEmptyContainer">
            <div className="emptyContainer">
                <img src="https://cdn1.iconfinder.com/data/icons/leto-ecommerce-shopping-2/64/list_shopping_todo_clipboard-256.png" alt="EmptyTodos"/>
                <h1>Crea tu primer todo!</h1>
                <p>Y concentrate en tu dia...</p>
            </div>
        </div>
    );
}

export {EmptyTodos};