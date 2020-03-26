import React from 'react';
import HeaderLogo from './HeaderLogo.js';
import HeaderMenu from './HeaderMenu.js';
const HeaderApp = (props) => {
    return(
        <header className="header">
            <HeaderLogo />
            <HeaderMenu />
        </header>
    )
}
export default HeaderApp;