import React from 'react';
import UniversalForm from 'React/Components/UniversalForm/UniversalForm';
import styled from 'styled-components';

const ContactForm = () => {

    const defaultFormData = {
        fullname: 'dummy',
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