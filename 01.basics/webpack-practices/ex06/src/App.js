import '.App.scss';
import logo from './logo.svg';

const App = () => {
    const app = document.createElement('h1'); // h1 node
    app.className = 'App';
    app.innerHTML = 
        '<header class="App-header">' + 
            '<img src="" class="App-logo" alt="logo" />' + 
            '<p>Hello World</p>' + 
        '</header>';  // text node
    return app;
}

export {App};