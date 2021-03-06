import React from 'react';
import styled from 'styled-components';

import Slideshow from './Slideshow/Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx';

import Playground from '../../Components/Lightbox/Playground.jsx';

const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <Slideshow />
            <Tabbed />
            <Staff />
            
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;