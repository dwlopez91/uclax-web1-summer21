import React from 'react'; 
// import Essay from './Essay';
// import SunAndMoon from '../SunAndMoon/SunAndMoon';
import Youtube from './Youtube';
import styled from 'styled-components';


import { useMediaQuery } from 'common/mediaQueries/useMediaQuery.js';

const Homework = () => {

    // const { media } = useMediaQuery();

    // console.log('media', media);

    return (
        <HomeworkStyled className="Homework">

            <h2>Learn about organics recycling and how you can make a difference!</h2>

            {  <Youtube /> }


            
            
        </HomeworkStyled>
    );
}

export default Homework; 

const HomeworkStyled = styled.div`
    h2 {
        margin-left: 25%;
        margin-right: 25%;
        color: seagreen;
    }
    
`;