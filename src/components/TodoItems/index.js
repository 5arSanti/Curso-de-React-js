import "./TodoItems.css"

import {CompleteIcon} from "../TodoIcons/CompleteIcon.js"
import {DeleteIcon} from "../TodoIcons/DeleteIcon.js"
function TodoItems(props) {
    return(
        <li className={`todoItems ${props.completed && "itemsCheckActive"}`}>
            
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />
            {/* <span 
                className={`icon icon-check ${props.completed && "iconCheckActive"}`}
                onClick={props.onComplete}>
               <img src={done} alt={"Done"}/>
            </span> */}
            
            <p className={`todoText ${props.completed && "todoCompleted"}`}>{props.text}</p>
            
            <DeleteIcon
                onDelete={props.onDelete}    
            />
            {/* <span className="icon icon-delete"
            onClick={props.onDelete}>
                <img src={close} alt={"Close"}/>
            </span> */}
        </li>
    );
}

export {TodoItems};