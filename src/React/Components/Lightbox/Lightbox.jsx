import React from 'react';
import styled from 'styled-components';

import Dark from './Dark.jsx';


const LightBox = () => {

    return (
        <LightBoxStyled className='LightBox'>
            <Dark /> 
        </LightBoxStyled>
    );
}

export default LightBox;

const LightBoxStyled = styled.div`
    
`;