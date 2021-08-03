import React from 'react';
import styled from 'styled-components';

import LightBox from './Lightbox.jsx';

const Playground = () => {

    return (
        <PlaygroundStyled className='Playground'>
            <h3>Playground</h3> 
            <LightBox />
        </PlaygroundStyled>
    );
}

export default Playground;

const PlaygroundStyled = styled.div`
    
`;