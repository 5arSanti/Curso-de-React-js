import React from "react";
import "./TodoLoading.css";

function TodoLoading(){
    return(
        <li className="todoLoadingContainer todoItems">
            <span className="icon loadingIcon"></span>
                
            <div className="loadingText"></div>
            
            <span className="icon "></span>
        </li>
    );
}

export {TodoLoading};