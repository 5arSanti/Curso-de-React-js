function TodoItems(props) {
    return(
        <li>
            <span>V {props.completed}</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}
export {TodoItems};