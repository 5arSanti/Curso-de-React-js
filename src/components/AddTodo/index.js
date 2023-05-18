import "./AddTodo.css"

import {AddIcon} from "../TodoIcons/AddIcon"
import {DeleteIcon} from "../TodoIcons/DeleteIcon.js"

function AddTodo(props) {
    return(
        <form className="addTodoForm">
            <AddIcon/>
            {/* <span className="icon addTodo">X</span> */}
            
            <input className="addTodoInput" type="text" placeholder="Añadir Todo"></input>
            
            {/* <span className=" icon discardTodo">V</span> */}
        
            <DeleteIcon
                onDelete={props.onDelete}    
            />
        </form>            
    );
}

export {AddTodo};