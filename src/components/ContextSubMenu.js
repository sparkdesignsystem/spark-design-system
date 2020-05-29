import React from 'react';
import { Link } from 'gatsby';
import { SprkLink } from '@sparkdesignsystem/spark-react';

function ContextSubMenu({ heading, collection, directory }) {
  return (
    <div className="docs-sub-menu">
      <h4 className="docs-menu__subheading">
        <SprkLink
          element={Link}
          variant='simple'
          to={`/using-spark/${directory}/${collection[0].node.parent.name}`}>
          {heading}
        </SprkLink>
      </h4>
      <ul className="docs-menu__collection">
        { collection.map(item => (
          <li
            key={item.node.parent.name}
            className="docs-menu__collection-item sprk-u-pbs">
            <SprkLink
              element={Link}
              variant='simple'
              to={`/using-spark/${directory}/${item.node.parent.name}`}
              additionalClasses={location && location.pathname === `/using-spark/${directory}/${item.node.parent.name}` ? 'isActive' : ''}
            >
              {item.node.frontmatter.title || item.node.parent.name}
            </SprkLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContextSubMenu;
