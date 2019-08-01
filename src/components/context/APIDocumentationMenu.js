import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const APIDocumentationMenu = ({components}) => { 
  return (
    <>
      <h3 className="menu__heading">API Documentation</h3>
      <ul className="menu__collection">
        {
        components.map((component, index) => (
          <li key={index}>
            <a className="menu__link" href={`#${component}`}>{component}</a>
          </li>
        ))
      }
      </ul>
    </>
  );
}

export default APIDocumentationMenu;
