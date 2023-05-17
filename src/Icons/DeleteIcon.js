import {TodoIcons} from "./TodoIcons.js"

function DeleteIcon({onDelete}) {
    return (
        <TodoIcons
            type="delete"
            color="gray"
            onClick={onDelete}
        />
    );
}

export {DeleteIcon};