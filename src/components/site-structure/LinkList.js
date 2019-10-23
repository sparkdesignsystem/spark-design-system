import React from 'react';
import { Link } from 'gatsby';

function LinkList({heading, collection}) {
  return (
    <>
      <h4>{heading}</h4>
      <ul className="menu__collection">
        { collection.map(item => (
          <li
            key={item.node.parent.name}
            className="menu__collection-item">
            <Link
              className="menu__link"
              to={`/${item.node.parent.relativeDirectory}/${item.node.parent.name}`}>
                { item.node.frontmatter.title || item.node.parent.name }
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default LinkList;
