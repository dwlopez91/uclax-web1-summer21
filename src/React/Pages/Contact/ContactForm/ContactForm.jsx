import { mediaQueries } from 'common/mediaQueries/mediaQueries';
import React from 'react';
import UniversalForm from 'React/Components/UniversalForm/UniversalForm';
import styled from 'styled-components';

const ContactForm = () => {

    const defaultFormData = {
        apiUrl: '/email/send',
        hasSubmitted: false,
        request: {},
        response: {},
        message: '',
        
        controls: [
            {
                id: 'fullName', 
                label: 'Full Name',
                value: '',
                type: 'text',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },
            {
                id: 'email', 
                label: 'Email',
                value: '',
                type: 'text',
                validation: {
                    isValid: true,
                    rules: ['required', 'email'],
                    message: '',
                }
            },
            {
                id: 'message', 
                label: 'Message',
                value: '',
                type: 'textarea',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            }
        ]
    
        // email: '',
        // message: '',
    }

    return (
        <ContactFormStyled className='ContactForm'>
            <UniversalForm  defaultFormData={ defaultFormData }/> 
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`

`;