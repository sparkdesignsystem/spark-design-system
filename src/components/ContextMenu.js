import React from 'react';
import propTypes from 'prop-types';
import GuidesMenu from './GuidesMenu';
import APIDocumentationMenu from './APIDocumentationMenu';

const ContextMenu = ({ context, links, setContext }) => (
  <nav>
    <select onChange={(e) => { 
      setContext(e.target.value);
      }}>
      <option value="guides">Guides</option>
      <option value="apidocumentation">API Documentation</option>
    </select>

    { context === 'guides' 
    && <GuidesMenu /> 
    }
    {
      context === 'apidocumentation'
      && <APIDocumentationMenu /> 
    }
  </nav>
);

export default ContextMenu;

ContextMenu.propTypes = {
  links: propTypes.shape({}),
};
