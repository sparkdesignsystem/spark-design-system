import React from 'react';
import { Link } from 'gatsby';
import SiteLogo from '../site-logo';

const Header = ({ menuVisible, setMenuVisible, setContext }) => (
  <header className="header">
    <button className="header__menu-button" onClick={() => { setMenuVisible(!menuVisible); }}>Toggle</button>
    <Link to="/" onClick={() => {setContext('homepage');}} className="header__logo-container">
      <SiteLogo/>
    </Link>
    <ul>
      <li><a onClick={() => {setContext('installing-spark');}} href="#nogo">Installing Spark</a></li>
      <li><a onClick={() => {setContext('using-spark');}} href="#nogo">Using Spark</a></li>
      <li><a onClick={() => {setContext('principles');}} href="#nogo">Principles</a></li>
    </ul>
  </header>
);

export default Header;
