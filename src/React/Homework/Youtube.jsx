import React, { Component } from 'react'

import VideoContentYT from 'react-video-content-youtube';

import styled from 'styled-components';

const Youtube = () => {

    return (
        <YoutubeStyled className='Youtube'>
            
            <VideoContentYT src="2I8Tjb4Fy-Q" params={{autoPlay: true}}/> 
        </YoutubeStyled>
    );
}

export default Youtube;

const YoutubeStyled = styled.div`
    width: 60%;
    margin: auto;
    padding: 25px;
    
`;