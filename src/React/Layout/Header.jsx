import React from 'react';
import styled from 'styled-components'; 
// import {recycle} from '/public/img/recycle.png';

const Header = () => {
    return (
    <HeaderStyled> 
        <a href="/">
            <img src="/img/recycle.png" alt="recycle" />
        </a>
            <h1>AE Waste Ind</h1>
            <h3>For a Greener Future</h3>
        

    </HeaderStyled>
    )
}

export default Header;

const HeaderStyled = styled.header`

    background-color: whitesmoke; 
    padding: 20px; 
    text-align: center; 

    img {
        position: absolute;
        left: 10px;
        width: 8%;
    }

    h1 {
        margin: auto;
        color: green;
        padding-bottom: 10px;
    }

    h3 {
        margin: auto;
    }


`;