import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Gallery from './component/Gallery';
import Guestbook from './component/Guestbook';
import Main from './component/Main';

const App = () => {
    return (
        <HashRouter>
            <Route exact path='/' component={Main}/>
            <Route path='/guestbook' component={Guestbook}/>
            <Route path='/gallery' component={Gallery}/>
        </HashRouter>
    );
};

export default App;