import React from 'react'
import './Header.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo"/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/manage">Inventory Manage</Link>
            </nav>
            
        </div>
    )
}

export default Header
