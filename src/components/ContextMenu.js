import React from 'react';
import propTypes from 'prop-types';
import GuidesMenu from './GuidesMenu';
import APIDocumentationMenu from './APIDocumentationMenu';

const ContextMenu = ({ context, links, setContext }) => (
  <div className="context-menu">
    <select className="context-menu__context-control" onChange={(e) => { 
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
  </div>
);

export default ContextMenu;

ContextMenu.propTypes = {
  links: propTypes.shape({}),
};
