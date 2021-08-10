import React from 'react';
import styled from 'styled-components';

import Category from './Category';

const Categories = () => {

    return (
        <CategoriesStyled className='Categories'>
            <Category /> 
            <Category /> 
            <Category /> 
            <Category /> 
        </CategoriesStyled>
    );
}

export default Categories;

const CategoriesStyled = styled.div`
    text-align: center;
    margin-bottom: 15px;
`;