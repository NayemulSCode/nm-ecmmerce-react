import React, { useContext } from 'react'
import './Header.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
function Header() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="header">
            <img src={logo} alt="logo"/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/manage">Inventory Manage</Link>
                <button onClick={() => setLoggedInUser({})}>Sign-out</button>
            </nav>
            
        </div>
    )
}

export default Header
