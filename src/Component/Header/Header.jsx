import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Header.css"
const Header = () => {
    return (
        <nav className='flex' >
            <h2>hello vai i;m here</h2>
               <NavLink to="/Mobile">Mobile</NavLink>
               <NavLink to="/"> Home</NavLink>
               <NavLink to="/Laptop">Laptop</NavLink>
               <NavLink to='/users'>Users</NavLink>
        </nav>
    );
};

export default Header;