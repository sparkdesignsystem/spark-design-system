import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';
import GuidesMenu from './GuidesMenu';
import APIDocumentationMenu from './APIDocumentationMenu';

const ContextMenu = ({ context, links, setContext }) => (
  <div className="context-menu">

    <ul>
      <li>
        <Link className="context-menu__link" to="/apidocumentation" onClick={(e) => { setContext('apidocumentation');}}>API Documentation</Link>
      </li>
      <li>
        <Link className="context-menu__link" to="/gettingstarted" onClick={(e) => { setContext('guides');}}>Guides</Link>
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

export default ContextMenu;

ContextMenu.propTypes = {
  links: propTypes.shape({}),
};
