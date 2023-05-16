import {ReactComponent as CheckSVG } from "./check.svg";
import {ReactComponent as DeleteSVG } from "./delete.svg";

const iconTypes = {
    "check": <CheckSVG/>,
    "delete": <DeleteSVG/>,
};

function TodoIcons({type}) {
    return(
        <span className={`icon icon-svg icon-${type}`}>
            {iconTypes[type]}
        </span>
    )
}

export {TodoIcons}