import React from 'react';
import SiteLogo from '../site-logo';

const Header = ({ menuVisible, setMenuVisible }) => (
  <header className="header">
    <button className="header__menu-button" onClick={() => { setMenuVisible(!menuVisible); }}>Toggle</button>
    <div className="header__logo-container">
      <SiteLogo />
    </div>
  </header>
);

export default Header;
