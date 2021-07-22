import content from './hello.txt'; // hello text를 읽고 객체를 만들어서 return

const App = () => {
    const app = document.createElement('h1'); // h1 node
    app.textContent = content.text;
    return app;
}

export { App };