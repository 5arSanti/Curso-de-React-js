import {ReactComponent as CheckSVG } from "../Icons/check.svg";
import {ReactComponent as DeleteSVG } from "../Icons/delete.svg";
import {ReactComponent as AddSVG } from "../Icons/delete.svg";

const iconTypes = {
    "check": (color) => <CheckSVG className="icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="icon-svg" fill={color}/>,
    "add": (color) => <AddSVG className="icon-svg" fill={color}/>,
};

function TodoIcons({type, color, completed, onClick}) {
    return(
        <span className={`icon icon-${type} ${completed && "iconCheckActive"}`}
            onClick={onClick} >
                {iconTypes[type](color)}
        </span>
    )
}

export {TodoIcons}