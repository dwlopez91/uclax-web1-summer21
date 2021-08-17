import React from 'react';
import styled from 'styled-components';

import Lightbox from 'React/Components/Lightbox/Lightbox';

import { useMediaQuery } from 'common/mediaQueries/useMediaQuery';


const StaffMember = ({member}) => {

    const { media } =useMediaQuery();

    const LightboxContent = () => {
        return (
            <div>
                <img src={ member.image} alt= {member.name} />
                <h3> {member.name} </h3>
            </div>
        )
    }
    
    const width = (media.mdUp) ? '400px' : '200px';

    return (
        <StaffMemberStyled className='StaffMember'>
            <Lightbox LightboxContent={ LightboxContent } width={ width}>
                 <img src={member.image} alt={ member.name} />        
                <h3>{member.name}</h3>
            </Lightbox>
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`

    img {
        display: block;
        width: 100%;
    }

    h3 {
        margin: 0px; 
        color: white; 
        background-color: maroon; 
        padding: 5px;

    }
    
`;