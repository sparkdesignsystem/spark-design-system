import React from 'react';
import SiteLogo from '../site-logo';

const Header = ({ menuVisible, setMenuVisible }) => (
  <header className="header">
    <SiteLogo />
    <button onClick={() => { setMenuVisible(!menuVisible); }}>Toggle</button>
  </header>
);

export default Header;
