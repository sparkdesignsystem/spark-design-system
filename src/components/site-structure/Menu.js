import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import { Link } from 'gatsby';
import { SprkTextInput } from '@sparkdesignsystem/spark-react';
import GuidesMenu from '../context/GuidesMenu';
import APIDocumentationMenu from '../context/APIDocumentationMenu';

const Menu = ({ context, setContext, menuVisible }) => (
  <div className={classNames(
    'menu',
    { 'menu--visible': menuVisible },
  )}
  >
    <SprkTextInput
      additionalClasses="sprk-u-BackgroundColor--white"
      label="Search"
      hiddenLabel
      leadingIcon="search"
      placeholder="Search"
    />
    <ul className="menu__collection">
      <li>
        <Link
          className="menu__link menu__link--main"
          to="/apidocumentation"
          onClick={() => { setContext('apidocumentation'); }}
        >
            API Documentation
        </Link>
      </li>
      <li>
        <Link
          className="menu__link menu__link--main"
          to="/gettingstarted"
          onClick={() => { setContext('guides'); }}
        >
            Guides
        </Link>
      </li>
    </ul>

    { context === 'guides'
    && <GuidesMenu />
    }
    {
      context === 'apidocumentation'
      && <APIDocumentationMenu />
    }
  </div>
);

export default Menu;

Menu.propTypes = {
  links: propTypes.shape({}),
};
