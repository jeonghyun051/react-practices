import './assets/scss/App.scss';

const App = () => {
    const app = document.createElement('h1'); // h1 node
    app.className = 'Header';
    app.textContent = 'Hello world2'; // text node
    return app;
}

export {App};