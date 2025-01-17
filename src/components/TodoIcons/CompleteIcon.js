import {TodoIcons} from "./index.js"
function CompleteIcon({completed, onComplete}) {
    return (
        <TodoIcons
            type="check"
            color={completed ? "green" : "gray"}
            completed={completed}
            onClick={onComplete}
        />
    );
}

export {CompleteIcon};