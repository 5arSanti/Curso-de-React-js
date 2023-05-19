import React from 'react';

//import ReactDOM from 'react-dom';
import { render} from "react-dom"

import './index.css';
import App from './App';


//React 17 encontrado por JuanDc
const root = document.getElementById("root");
render(<App/>, root);

//React 17 encontrado por Santiago
// ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//    document.getElementById('root')
//   );

//React 18
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


//Consejos
//Es importante aprender a cambiar de versiones entre React, tanto upgrade y downgrade
//Es importante observar que beneficios puede traer una actualizacion de version de React
//Ejemplo: Que la aplicacion cargue 1 segundo as rapido => (Beneficio para los usuarios y puede ser mejor opcion actualizar para conseguir ese segundo extra, que implementar cambios en el codigo para mejor rendimiendo y conseguir el segundo extra)
