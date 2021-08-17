import React from 'react';
import styled from 'styled-components';
import { servicesData } from '../servicesData';

import Lightbox from 'React/Components/Lightbox/Lightbox';

const Item = ({ service }) => {

        const LightboxContent = () => {
            return (
                <div>
                    <img src={ service.image} alt= {service.title} />
                    <h3> {service.title} </h3>
                    <li>{ service.description }</li>
                    <li>{ service.cost }</li>
                </div>
            )
        }
        return (
            <ItemStyled className='Item'>
              <Lightbox LightboxContent={ LightboxContent }>
                <img src={ service.image } alt={ service.title } /> 
                <h3>{ service.title }</h3>
                {/* <p>{ service.description }</p>
                <p>{ service.cost }</p> */}
                </Lightbox>
            </ItemStyled>
        );
}

export default Item;

const ItemStyled = styled.div`
    img {
        width: 100%;
        display: block;
    }
    h3 {
        background-color: teal;
        color: white;
        padding: 5px;
        font-size: 18px;
        margin: 0px;
    }
`;