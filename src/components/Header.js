import React from 'react';
import { Link } from 'gatsby';
import SiteLogo from './site-logo';
import { SprkIcon, SprkTextInput } from '@sparkdesignsystem/spark-react';
import ContextMenu from './ContextMenu';

const Header = ({ menuVisible, setMenuVisible, context, setContext }) => (
  <header className="docs-header">
    <div className="docs-header__group">
      <button className="docs-header__menu-button" onClick={() => { setMenuVisible(!menuVisible); }}>
        <span className="sprk-u-ScreenReaderText">Toggle Navigation</span>
        <SprkIcon iconName="menu"/>
      </button>
      <Link to="/" onClick={() => {setContext('homepage');}} className="docs-header__logo-container">
        <SiteLogo/>
      </Link>
    </div>
    <div className="docs-header__group docs-header__menu-wrapper">
      <div className="docs-header__menu">
        <ContextMenu
          autoNav
          context={context}
          setContext={setContext}
          className="sprk-o-HorizontalList"/>
      </div>
      <SprkTextInput
        additionalClasses="docs-header-search"
        leadingIcon="search"
        hiddenLabel
        name="InlineSearch"
        placeholder="Search"
      />
    </div>
  </header>
);

export default Header;
