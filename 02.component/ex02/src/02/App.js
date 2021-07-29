import React from 'react';
import './assets/css/App.css';
// module 옵션 키면 import a from '../assets/css/App.css'해서 a.Header 

export default function App() {
    
    return (
        <div id='App'>
           <h1 className='Header'>{ 'Normal CSS (css-loader options{ modules: false })' }</h1>
        </div>    
    );
}
