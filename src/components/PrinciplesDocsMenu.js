import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { SprkLink } from '@sparkdesignsystem/spark-react';

const PrinciplesSparkDocsMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allMdx(filter: {fileAbsolutePath: {regex: "/src\\/pages/principles/"}}) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              parent {
                ... on File {
                  id
                  name
                  relativeDirectory
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const { edges: guides } = data.allMdx;
      return (
        <>
          <h3 className="docs-menu__heading">Principles</h3>
          <nav>
            <ul className="docs-menu__collection">
              { guides.map(guide => (
                <li
                  key={guide.node.parent.name}
                  className="docs-menu__collection-item sprk-u-pbs">
                  <SprkLink
                    element={Link}
                    variant='simple'
                    to={`/principles/${guide.node.parent.name}`}>
                      { guide.node.frontmatter.title || guide.node.parent.name }
                  </SprkLink>
                </li>
              ))}
            </ul>
          </nav>
        </>
      );
    }}
  />
);

export default PrinciplesSparkDocsMenu;
