import React from 'react';
import { Link } from 'gatsby';
import SiteLogo from './site-logo';
import { SprkIcon, SprkTextInput } from '@sparkdesignsystem/spark-react';
import ContextMenu from './ContextMenu';

const Header = ({ menuVisible, setMenuVisible, context, setContext }) => (
  <header className="header">
    <div className="header__group">
      <button className="header__menu-button" onClick={() => { setMenuVisible(!menuVisible); }}>
        <SprkIcon iconName="menu"/>
      </button>
      <Link to="/" onClick={() => {setContext('homepage');}} className="header__logo-container">
        <SiteLogo/>
      </Link>
    </div>
    <div className="header__group header__menu-wrapper">
      <ContextMenu
        context={context}
        setContext={setContext}
        className="sprk-o-HorizontalList"/>
      <SprkTextInput
        leadingIcon="search"
        hiddenLabel
        name="InlineSearch"
        placeholder="Search"
      />
    </div>
  </header>
);

export default Header;
