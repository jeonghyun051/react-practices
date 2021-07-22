import '.App.scss';

const App = () => {
    const app = document.createElement('h1'); // h1 node
    app.className = 'App';
    app.innerHTML = 
        '<header class="App-header">' + 
        '</header>';  // text node
    return app;
}

export {App};