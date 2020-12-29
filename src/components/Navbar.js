import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'; // ".." to go to src to find logo.svg. routes are absolute here
import styled from 'styled-components';
import {ButtonContainer} from './Button'; //importing const from file Button.js, can also import as default?

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

        {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}
            
            <Link to='/'>
                {/* logo imported from src */}
                <img src={logo} alt="EStore" className="navbar-brand" /> 
            </Link>

            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                </li>
            </ul>
            {/* ml-auto, keeps mycart and the icon always to the left *Bootstrap */}
            <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                    {/* Padding, Space from the icon */}
                    <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                    </span>
                    My Cart
                </ButtonContainer>
                {/* Installed styled-components after this npm i --save styled-components */}
            </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size: 1.3rem;
        // 1rem=16px, rem is preferred for responsive sites
        text-transform: capitalize;
        // Capitalize first letter to capital
    }
`
// "`" "`" Starting and ending back ticks for the styled block
// "NavWrapper" HAS TO BE USED AS A TAG INSIDE EXPORT, SAME AS "ButtonContainer"
