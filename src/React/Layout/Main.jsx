import React from 'react';
import styled from 'styled-components';

import Homework from '../Homework/Homework';

import SunAndMoon from 'React/SunAndMoon/SunAndMoon';

const Main = () => {
    return <MainStyled> 
                <h1>My Main </h1>
                <SunAndMoon />
                <Homework />

           </MainStyled>
}

export default Main;

const MainStyled = styled.main`
    background-color: tan;
    padding: 10px; 

`;