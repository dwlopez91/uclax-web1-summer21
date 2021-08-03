import React from 'react';
import styled from 'styled-components';


import StaffMember from './StaffMember.jsx';
import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';
import { staffData } from './staffData.js';

const StaffMembers = () => {

    return (
        <StaffMembersStyled className='StaffMembers'>
            {
                staffData.map((member, idx) => {
                    return <StaffMember member={member} key={idx}/>
                })
            }
            
        </StaffMembersStyled>
    );
}

export default StaffMembers;

const StaffMembersStyled = styled.div`

    display: grid; 
    grid-template-columns: repeat(auto-fill, 48%);
    grid-gap: 2%;

    @media ${mediaQueries.mdUp} {
        grid-template-columns: repeat(auto-fill, 23%);
    }
    
    .StaffMember {
        margin-bottom: 20px;
    }

    
`;