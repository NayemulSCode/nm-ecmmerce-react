import React from 'react'
import './Header.css';
import logo from '../../images/logo.png'
function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo"/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/manage">Inventory Manage</a>
            </nav>
            
        </div>
    )
}

export default Header
