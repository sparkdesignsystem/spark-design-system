import React from 'react';
import { Link } from 'gatsby';

function ContextSubMenu({heading, collection, directory}) {
  return (
    <div className="docs-sub-menu">
      <h4 className="docs-menu__subheading">{heading}</h4>
      <ul className="docs-menu__collection">
        { collection.map(item => (
          <li
            key={item.node.parent.name}
            className="docs-menu__collection-item">
            <Link
              className="docs-menu__link"
              to={`/using-spark/${directory}/${item.node.parent.name}`}>
                { item.node.frontmatter.title || item.node.parent.name }
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContextSubMenu;
