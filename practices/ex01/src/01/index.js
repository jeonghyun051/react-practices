import React from "react"
import ReactDom from 'react-dom';
import { render } from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store.js"; 

const store = createStore(reducer);

ReactDom.render(
    <React.StrictMode>
        <Provider store = {store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.querySelector('#root'),
);

// render(
//     <React.StrictMode>
//         <Provider store= {store}>
//             <App/>
//         </Provider>
//     </React.StrictMode>
    
//     , document.getElementById('root'));
