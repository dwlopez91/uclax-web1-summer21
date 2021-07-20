import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
    <HeaderStyled> 
        <h2> Spa Santuary </h2>
        <h3>A Spa for every occassion</h3>

    </HeaderStyled>
    )
}

export default Header;

const HeaderStyled = styled.header`

    background-color: teal; 
    padding: 20px; 
    text-align: center; 
`;