import React from 'react';
import styled from 'styled-components';

const Tab = ({tab, chosenTab, chosenTabUpdate}) => {

    const handleClick = () => {
        chosenTabUpdate(tab);
    }

    const theClassName = (tab.title === chosenTab.title) ? 'Tab chosen': 'Tab';

    return (
        <TabStyled className={ theClassName } onClick={ handleClick }>
            {tab.title} 
        </TabStyled>
    );
}

export default Tab;

const TabStyled = styled.div`
    padding: 20px; 
    

    width: 150px; 
    text-align: center; 
    color: whitesmoke; 

    cursor: white;

    margin-right: 5px;
    border-radius: 15px 15px 0px 0px;

    background-color: #a7c99b; 

    &.chosen {
        background-color: #bee5b0;
        color: gray;
    }

`;