import React from 'react';
import styled from 'styled-components';

import Item from './Item';

import { mediaQueries } from 'common/mediaQueries/mediaQueries';

const Gallery = ({ services, curCat }) => {

    return (
        <GalleryStyled className='Gallery'>
            {
                services
                .filter((service) => {
                    return (curCat === 'All' || service.category === curCat);
                })
                
                .map((service, idx) => {
                    return <Item key={ idx } service={ service } /> 
                })
            }
             
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    margin: 25px 0px;

    display: grid;

    /* grid-column-gap: 20px;
    grid-row-gap: 20px; */
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);

    @media ${mediaQueries.lgUp} {
        grid-template-columns: repeat(4, 1fr);
    }
    
`;