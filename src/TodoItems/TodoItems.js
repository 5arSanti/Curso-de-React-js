import "./TodoItems.css"
import done from "../Icons/Done.png"
import close from "../Icons/Close.png"
function TodoItems(props) {
    return(
        <li className="todoItems">
            <span className={`icon iconCheckActive ${props.completed && "iconCheckActive"}`}> {props.completed}
               <img src={done} alt={"Done"}/>
            </span>
            <p className={`todoText ${props.completed && "todoCompleted"}`}>{props.text}</p>
            <span className="icon"><img src={close} alt={"Close"}/></span>
        </li>
    );
}
export {TodoItems};