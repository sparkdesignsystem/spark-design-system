import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';
import GuidesMenu from '../context/GuidesMenu';
import APIDocumentationMenu from '../context/APIDocumentationMenu';

const Menu = ({ context, setContext, menuVisible }) => (
  <div className="context-menu">

    {menuVisible && <div>Visible</div>}

    <ul className="context-menu__collection">
      <li>
        <Link className="context-menu__link context-menu__link--main" to="/apidocumentation" onClick={(e) => { setContext('apidocumentation'); }}>API Documentation</Link>
      </li>
      <li>
        <Link className="context-menu__link context-menu__link--main" to="/gettingstarted" onClick={(e) => { setContext('guides'); }}>Guides</Link>
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
