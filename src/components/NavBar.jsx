import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (<div className="nav">
        <div className="logo">
            <Link className='nav-link' to="/">Napolidan</Link>
        </div>
        <div className="nav-links">
            <div className="nav-items">
                <Link className='nav-item'
                to="/">
                Home
                </Link>
                <Link className='nav-item'
                to="/about">
                About
                </Link>
                <Link className='nav-item'
                to="/contact">
                Contact
                </Link>
            </div>
        </div>
    </div>);
}

export default NavBar;