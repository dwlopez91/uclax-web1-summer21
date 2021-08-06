import React from 'react';
import styled from 'styled-components';

import Lightbox from 'React/Components/Lightbox/Lightbox';
import { isMemberName } from 'typescript';

const Playground = () => {

    const LightboxContent = () => {
        return (
            <div>Content to Put in Lightbox. </div>
          
        )
    }

    return (
        <PlaygroundStyled className='Playground'>
            <h3>Playground</h3> 
            <Lightbox LightboxContent={ LightboxContent }>
                Content
            </Lightbox>
        </PlaygroundStyled>
    );
}

export default Playground;

const PlaygroundStyled = styled.div`
    
`;