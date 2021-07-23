import React from 'react';
import Header from './Layout/Header.jsx';
import Nav from './Layout/Nav.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';

import {BrowserRouter} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Header />
            <Nav />
            <Main />
            <Footer />  
            </BrowserRouter>
        </div>
    );
}

export default App;