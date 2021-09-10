import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

// import Info from './Info/Info.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
// import Map from './Map/Map.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <h1>Contact Page </h1>
            <div className='row'>
                <div className='col'>
                    {/* <Info /> */}
                </div>
                <div className='col'>
                    <ContactForm />
                </div>
            </div>
            
            {/* <Map /> */}

        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`

    h1 {
        color: green;
        margin-left: 10px;
        padding-bottom: 50px;
        
    }


    @media ${mediaQueries.mdUp} {
        .row {
            display: flex;

            .col {
                flex: 2;
            }
        }
    }

/* 
    background-color: pink;

    @media (min-width: 800px) {
        background-color: orange;
    }

    @media (min-width: 1200) {
        background-color: maroon;
    }

    h1 {
        background-color: purple;
        color: white;

        @media ${mediaQueries.md} {
            background-color: black; 

        }
    }


     */
`;