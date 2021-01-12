import React from 'react';
import { Link } from 'gatsby';
import { SprkLink } from '@sparkdesignsystem/spark-react';
import { usePrincipleSparkData } from '../hooks/use-principle-spark';

const PrinciplesSparkDocsMenu = () => {
  const pages = usePrincipleSparkData();
  return (
    <div className="docs-menu__collection">
      <nav aria-label="Principles">
        <h3 className="docs-menu__heading">Principles</h3>
        <ul className="docs-menu__collection">
          {pages.map((page) => (
            <li
              key={page.node.parent.name}
              className="docs-menu__collection-item sprk-u-pbs"
            >
              <SprkLink
                element={Link}
                variant="simple"
                to={`/principles/${page.node.parent.name}`}
              >
                {page.node.frontmatter.title || page.node.parent.name}
              </SprkLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PrinciplesSparkDocsMenu;
