import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
const HeaderLogo = (props) => {
    return (
        <Link to="/">
            <div className="header-logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </Link>
    )
}
export default HeaderLogo;