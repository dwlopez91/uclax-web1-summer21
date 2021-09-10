import { mediaQueries } from 'common/mediaQueries/mediaQueries';
import React from 'react';
import UniversalForm from 'React/Components/UniversalForm/UniversalForm';
import styled from 'styled-components';

const LoginForm = () => {

    const defaultFormData = {
        apiUrl: '/user/login',
        hasSubmitted: false,
        request: {},
        response: {},
        message: '',
        
        controls: [
            {
                id: 'fullName', 
                label: 'User Name',
                value: '',
                type: 'text',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },
            {
                id: 'password', 
                label: 'Password',
                value: '',
                type: 'text',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },
            {
                id: 'message', 
                label: '',
                value: '',
                type: 'textarea',
                validation: {
                    isValid: true,
                    rules: [''],
                    message: '',
                }
            }
        ]
    
        // email: '',
        // message: '',
    }

    return (
        <LoginFormStyled className='LoginForm'>
            <UniversalForm  defaultFormData={ defaultFormData }/> 
        </LoginFormStyled>
    );
}

export default LoginForm

const LoginFormStyled = styled.div`
    Textarea {
        color: whitesmoke;
        background-color: whitesmoke;
        border: none;
    }
`;