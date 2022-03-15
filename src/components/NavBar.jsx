import React from 'react';
import NavItem from './NavItem';
import logo from '../images/logo.svg'

function NavBar() {
    return (
        <nav className='navBar'>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navList">
                <NavItem item="Features"/>
                <NavItem item="Team"/>
                <NavItem item="Sign In"/>
            </ul>
        </nav>
    )
}

export default NavBar
