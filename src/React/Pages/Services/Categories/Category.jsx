import React from 'react';
import styled from 'styled-components';

const Category = () => {

    return (
        <CategoryStyled className='Category'>
            Category 
        </CategoryStyled>
    );
}

export default Category;

const CategoryStyled = styled.button`
    background-color: teal;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 0px 10px;

    &.chosen {
        background-color: blue;
    }
    
`;