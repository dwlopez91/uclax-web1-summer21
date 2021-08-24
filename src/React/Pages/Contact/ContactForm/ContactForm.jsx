import { mediaQueries } from 'common/mediaQueries/mediaQueries';
import React from 'react';
import UniversalForm from 'React/Components/UniversalForm/UniversalForm';
import styled from 'styled-components';

const ContactForm = () => {

    const defaultFormData = {
        controls: [
            {
                id: 'fullName', 
                label: 'Full Name',
                value: '',
                type: 'text',
            },
            {
                id: 'email', 
                label: 'Email',
                value: '',
                type: 'text',
            },
            {
                id: 'message', 
                label: 'Message',
                value: '',
                type: 'textarea',
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