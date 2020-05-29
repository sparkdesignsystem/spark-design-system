import React from 'react';
import { Link } from 'gatsby';
import { SprkLink } from '@sparkdesignsystem/spark-react';
import { useInstallingSparkData } from '../hooks/use-installing-spark';

const InstallingSparkDocsMenu = () => {
  const pages = useInstallingSparkData();

  return (
    <>
      <h3 className="docs-menu__heading">Installing Spark</h3>
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
                to={`/installing-spark/${page.node.parent.name}`}
                activeClassName="isActive"
                // additionalClasses={location && location.pathname === `/installing-spark/${page.node.parent.name}` ? 'isActive' : ''}
              >
                {page.node.frontmatter.title || page.node.parent.name }
              </SprkLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default InstallingSparkDocsMenu;
