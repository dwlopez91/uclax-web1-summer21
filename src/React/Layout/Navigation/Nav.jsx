import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// Scripts 
import { mediaQueries } from 'common/mediaQueries/mediaQueries';
const Nav = () => {
    return <NavStyled> 
                <NavLink to="/" exact>Welcome</NavLink> 
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">contact</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/education">Education</NavLink>

            </NavStyled>
}

export default Nav;

const NavStyled = styled.nav`
    background-color: whitesmoke;
    color: white;
    padding-bottom: 20px; 
    text-align: center;

    a {
        display: block;
        background-color: #bee5b0; 
        
        color: gray; 
        padding: 10px; 
        border-radius: 5px;
        margin: 5px 0px;

        text-decoration: none;
        text-transform: uppercase;

        &:hover {
            color: gray; 
            background-color: white;
        }

        &.active {
            background-color: #a7c99b;;
            color: white;  

        }

    }

    @media ${mediaQueries.mdUp} {
        a{
            display: inline-block;
            margin: 0px 10px;
            font-size: 16px;
            border-radius: 5px;
        }
    }


`;