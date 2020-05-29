import React from 'react';
import { Link } from 'gatsby';
import { SprkLink } from '@sparkdesignsystem/spark-react';
import { usePrincipleSparkData } from '../hooks/use-principle-spark';

const PrinciplesSparkDocsMenu = () => {
  const pages = usePrincipleSparkData();
  return (
    <>
      <h3 className="docs-menu__heading">Principles</h3>
      <nav>
        <ul className="docs-menu__collection">
          {pages.map(page => (
            <li
              key={page.node.parent.name}
              className="docs-menu__collection-item sprk-u-pbs"
            >
              <SprkLink
                element={Link}
                variant="simple"
                to={`/principles/${page.node.parent.name}`}
                activeClassName="isActive"
                // additionalClasses={typeof location !== 'undefined' && location.pathname === `/principles/${page.node.parent.name}` ? 'isActive' : ''}
              >
                { page.node.frontmatter.title || page.node.parent.name }
              </SprkLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default PrinciplesSparkDocsMenu;
