import "./AddTodo.css"

import {AddIcon} from "../TodoIcons/AddIcon"
import { TodoContext } from "../TodoContext";
import React from "react";
import { DeleteIcon } from "../TodoIcons/DeleteIcon";

function AddTodo(props) {
    const {
        addNewTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const onSubmit = (event) => {
        addNewTodo(newTodoValue)
        event.preventDefault();
    };

    const onCancel = (event) => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };


    return(
        <form onSubmit={onSubmit} className="addTodoForm">
            <button type="submit" 
                className="addButton"
                onClick={onSubmit}
            >
                <AddIcon/>
            </button>

            {/* <span className="icon addTodo">X</span> */}
            
            <input 
                className="addTodoInput" 
                type="text" 
                placeholder="Añadir Todo"
                value={newTodoValue}
                onChange={onChange}
            ></input>
            
            {/* <span className=" icon discardTodo">V</span> */}

            <button type="button" 
                className="addButton"
                onClick={onCancel}
            >
                <DeleteIcon/>
            </button>

        </form>            
    );
}

export {AddTodo};