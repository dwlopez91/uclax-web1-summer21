import React, {useState} from 'react'; 
import styled from 'styled-components';

const SunAndMoon = () => {

    const [imageState, imageStateUpdate] = useState('/img/sun.png');

    const handleOnMouseOver = () => {
        console.log('Mousing Over');
        imageStateUpdate('/img/moon.png');
    }
    const handleOnMouseOut = () => {
        console.log('Mousing Out');
        imageStateUpdate('/img/sun.png');

    }
    return (
        <SunAndMoonStyled>
          <h2>Sun and Moon</h2>
          <img 
          src= { imageState }
          alt="Sun" 
          onMouseOver={ handleOnMouseOver }
          onMouseOut= { handleOnMouseOut }
          />
          {/* <img src="/img/moon.png" alt="Moon" /> */}
        </SunAndMoonStyled>
    )
}

export default SunAndMoon; 

const SunAndMoonStyled = styled.div`
    background-color: yellow; 
    text-align: center; 
    padding-bottom: 50px;
    `;