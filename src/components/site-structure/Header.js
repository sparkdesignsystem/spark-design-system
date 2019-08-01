import React from 'react';
import { Link } from 'gatsby';
import SiteLogo from '../site-logo';

const Header = ({ menuVisible, setMenuVisible }) => (
  <header className="header">
    <button className="header__menu-button" onClick={() => { setMenuVisible(!menuVisible); }}>Toggle</button>
    <Link to="/" className="header__logo-container">
      <SiteLogo />
    </Link>
  </header>
);

export default Header;
