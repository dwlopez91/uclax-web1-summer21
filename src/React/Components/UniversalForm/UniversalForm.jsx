import React, {useReducer} from 'react';
import styled from 'styled-components';

// Context
import Context, { reducer } from './Context/index.js'

import Form from './Form/Form.jsx';
import FormGroup from './Form/FormGroup/FormGroup.jsx';


const UniversalForm = ({ defaultFormData }) => {

    // const [inputName, inputNameUpdate] = useState('');

    // const handleUpdate = (event) => {

    //     inputNameUpdate(event.target.value);
    // }

    // console.log('inputName', inputName);
    const [state, dispatch] = useReducer(reducer, defaultFormData);
    
    return (
        <Context.Provider value={ { state, dispatch } } >
            <UniversalFormStyled className='UniversalForm'>
                <Form>
                    <FormGroup /> 
                </Form>
            </UniversalFormStyled>
        </Context.Provider>

    );
}

export default UniversalForm;

const UniversalFormStyled = styled.div`
    
`;