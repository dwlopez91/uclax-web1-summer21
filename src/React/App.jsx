import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';

import Header from './Layout/Header.jsx';
import Nav from './Layout/Nav.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <AppStyled>
                <Header />
                <Nav />
                <Main />
                <Footer />  
                </AppStyled>
            </BrowserRouter>
               
        </div>
    );
}



export default App;

const AppStyled = styled.div`
    .inset-container {
        max-width: 1600px;
        border: solid 1px red;

        margin-right: auto;
        margin-left: auto;


    }
`;