import { mediaQueries } from 'common/mediaQueries/mediaQueries';
import React from 'react';
import UniversalForm from 'React/Components/UniversalForm/UniversalForm';
import styled from 'styled-components';

const Login = () => {

    const defaultFormData = {
        apiUrl: '/email/send',
        hasSubmitted: false,
        request: {},
        response: {},
        message: '',
        
        controls: [
            {
                id: 'fullName', 
                label: 'User Name',
                value: 'Dlo',
                type: 'text',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },
            {
                id: 'password', 
                label: 'password',
                value: '',
                type: 'text',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },
        ]
    
        // email: '',
        // message: '',
    }

    return (
        <LoginStyled className='Login'>
            <UniversalForm  defaultFormData={ defaultFormData }/> 
        </LoginStyled>
    );
}

export default Login
const LoginStyled = styled.div`

`;