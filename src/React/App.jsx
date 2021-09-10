import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';

import { MediaQueryProvider } from 'common/mediaQueries/useMediaQuery.js';

import Header from './Layout/Header.jsx';
import Navigation from './Layout/Navigation/Navigation.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';


const App = () => {
    return (
        <MediaQueryProvider>
            <BrowserRouter>
                <AppStyled>
                <Header />
                <Navigation />
                <Main />
                <Footer />  
                </AppStyled>
            </BrowserRouter> 
        </MediaQueryProvider>
    );
}



export default App;

const AppStyled = styled.div`
    /* .inset-container {
        max-width: 1600px;
        border: solid 1px red;

        margin-right: auto;
        margin-left: auto;
    } */
    
`;