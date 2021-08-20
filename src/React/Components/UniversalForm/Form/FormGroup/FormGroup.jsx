import React from 'react';
import styled from 'styled-components';

import FormLabel from './FormLabel';
import FormControl from './FormControl';

const FormGroup = ({inputName, handleUpdate}) => {

    return (
        <FormGroupStyled className='FormGroup'>
            <FormLabel />
            <FormControl 
                inputName={ inputName }
                handleUpdate={ handleUpdate }
            /> 
        </FormGroupStyled>
    );
}

export default FormGroup;

const FormGroupStyled = styled.div`
    
`;