import React from 'react';
import styled from 'styled-components';

import FormLabel from './FormLabel';
import FormControl from './FormControl';

const FormGroup = () => {

    return (
        <FormGroupStyled className='FormGroup'>
            <FormLabel />
            <FormControl /> 
        </FormGroupStyled>
    );
}

export default FormGroup;

const FormGroupStyled = styled.div`
    
`;