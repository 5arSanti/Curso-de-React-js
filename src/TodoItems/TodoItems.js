import "./TodoItems.css"
// import done from "../Icons/Done.png"
// import close from "../Icons/Close.png"

import {CompleteIcon} from "../Icons/CompleteIcon.js"
import {DeleteIcon} from "../Icons/DeleteIcon.js"
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