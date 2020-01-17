import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { SprkLink } from '@sparkdesignsystem/spark-react';

const InstallingSparkDocsMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allMdx(filter: {fileAbsolutePath: {regex: "/src\\/pages/installing-spark/"}, frontmatter: {title: {ne: "Installing Spark"}}}) {
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
          <h3 className="docs-menu__heading">Installing Spark</h3>
          <nav>
            <ul className="docs-menu__collection">
              { guides.map(guide => (
                <li
                  key={guide.node.parent.name}
                  className="docs-menu__collection-item sprk-u-pbs">
                  <SprkLink
                    element={Link}
                    variant='simple'
                    to={`/installing-spark/${guide.node.parent.name}`}>
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

export default InstallingSparkDocsMenu;
