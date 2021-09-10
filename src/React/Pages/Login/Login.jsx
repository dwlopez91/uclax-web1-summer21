import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

// import Info from './Info/Info.jsx';
import LoginForm from './LoginForm/LoginForm.jsx';
// import Map from './Map/Map.jsx';

const Login = () => {

    return (
        <LoginStyled className='Login'>
            <h1> Login Page </h1>
            <div className='row'>
                <div className='col'>
                    {/* <Info /> */}
                </div>
                <div className='col'>
                    <LoginForm />
                </div>
            </div>
            
            {/* <Map /> */}

        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`

    @media ${mediaQueries.mdUp} {
        .row {
            display: flex;

            .col {
                flex: 1;
            }
        }
    }

    h1 {
        color: green;
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