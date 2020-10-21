import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

import AuthApi from '../../../context/AuthApi'
import './Navbar.css'

const Navbar = () => {

    const Auth = useContext(AuthApi)
    let history = useHistory()

    return (
        <div className="wrapper">
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <Link to="/"><img src={require('../../../img/logo.png')} style={{width: "125px"}} /></Link>
                </div>

                <nav>
                    <ul id="menuItems" style={{maxHeight: "0px"}}>
                        <li><Link to="/4shopping/">Home</Link></li>
                        <li><Link to="/4shopping/products"><span>Best Sellers</span></Link></li>
                        <li><Link to="/4shopping/product">Offers & Deals</Link></li>
                        <li><Link to="/4shopping/products">All Products</Link></li>
                        <li><Link to="/4shopping/about">Visit Us</Link></li>
                        {!Auth.auth && <li><Link to="/4shopping/account"><span>Login</span></Link></li>}
                        {/* {Auth.auth && <button className="cta" onClick={handleSignOut}><span>Sign out</span></button>} */}
                    </ul>
                </nav>
                <Link to="/4shopping/cart"><img src={require('../../../img/cart2.png')} className="cart-icon"/></Link>
                {Auth.auth && <Link to="/4shopping/profile"><img src={require('../../../img/profile.png')} className="profile-icon"/></Link>}
                
                <img 
                    src={require('../../../img/menu.png')} 
                    className="menu-icon" 
                    onClick={() => document.getElementById('menuItems').style.maxHeight == "0px" 
                        ? (document.getElementById('menuItems').style.maxHeight = "200px") 
                        : (document.getElementById('menuItems').style.maxHeight = "0px")} 
                />
            </div>
        </div>
        </div>
    )
}

export default Navbar