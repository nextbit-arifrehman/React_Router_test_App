import React from 'react';
import { NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div className="">
            <header className="">
                <h2>hello vai i'm here</h2>
            </header>
            <nav className="sidebar">
                <NavLink to="/Mobile">Mobile</NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Laptop">Laptop</NavLink>
                <NavLink to="/users">Users</NavLink>
                {/* alt +shift downarrow for cop */}
                <NavLink to="/users2">Users2</NavLink>
                <NavLink to="/posts">Posts</NavLink>

            </nav>
        </div>
    );
};

export default Header;
