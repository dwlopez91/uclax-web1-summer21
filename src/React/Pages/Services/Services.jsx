import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const Services = () => {

    return (
        <ServicesStyled className='Services'>
            <h1>Services </h1>
            <Container />
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
    h1 {
        color: green;
    
    }
`;