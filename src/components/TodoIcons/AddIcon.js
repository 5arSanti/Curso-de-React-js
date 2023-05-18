import {TodoIcons} from "./index.js"
function AddIcon({completed, onComplete}) {
    return (
        <TodoIcons
            type="add"
            color={"white"}
        />
    );
}

export {AddIcon};