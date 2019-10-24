import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const InstallingSparkDocsMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allMdx(filter: {fileAbsolutePath: {regex: "/src\\/pages/installing-spark/"}}) {
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
          <h3 className="menu__heading">Installing Spark</h3>
          <nav>
            <ul className="menu__collection">
              { guides.map(guide => (
                <li
                  key={guide.node.parent.name}
                  className="menu__collection-item">
                  <Link
                    className="menu__link"
                    to={`/installing-spark/${guide.node.parent.name}`}>
                      { guide.node.frontmatter.title || guide.node.parent.name }
                  </Link>
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
