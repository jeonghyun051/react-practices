import React from 'react';
import './assets/css/App.css';
// module 옵션 키면 import a from '../assets/css/App.css'해서 a.Header 
// 
export default function App() {
    
    return (
        <div id='App'>
           <h1 className='Header'>{ '### 03. src/03: Normal CSS (css-loader options { modules: true })' }</h1>
        </div>    
    );
}
