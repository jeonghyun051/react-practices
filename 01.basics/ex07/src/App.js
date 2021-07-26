import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Menu } from 'antd';
import Form from 'antd';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React 1Week 과제 입니다.
        </p>
        <h1>Hello World</h1>
        <Button type="link">Primary Button</Button>
      </header>
    </div>
  );
}

export default App;
