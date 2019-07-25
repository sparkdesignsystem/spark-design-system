import React from 'react';
import propTypes from 'prop-types';

const ContextMenu = ({ links }) => (
  <nav>
    <select onChange={() => { console.log('hi'); }}>
      <option>Guides</option>
      <option>API Documentation</option>
    </select>

    <p>[context title]</p>
    { links.map(link => (
      <a href="#nogo">{link.text}</a>
    ))
    }
  </nav>
);

export default ContextMenu;

ContextMenu.propTypes = {
  links: propTypes.shape({}),
};
