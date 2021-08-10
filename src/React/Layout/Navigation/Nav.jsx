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
                <NavLink to="/homework">Homework</NavLink>

           </NavStyled>
}

export default Nav;

const NavStyled = styled.nav`
    background-color: #005050;
    color: white;
    padding: 10px; 
    text-align: center;

    a {
        display: block;
        background-color: teal; 
        
        color: white; 
        padding: 10px; 
        border-radius: 5px;
        margin: 5px 0px;

        text-decoration: none;
        text-transform: uppercase;

        &:hover {
            color: teal; 
            background-color: white;
        }

        &.active {
            background-color: aqua;
            color: teal;  

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