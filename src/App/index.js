import React from "react" 
import { AppUI } from "./AppUI"

import "./App.css"
import { TodoProvider } from "../components/TodoContext";

//App
function App() {
    return(
        <TodoProvider>
            <AppUI/>
        </TodoProvider>

    )
}

export default App;