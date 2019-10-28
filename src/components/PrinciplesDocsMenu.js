import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

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
                  className="docs-menu__collection-item">
                  <Link
                    className="menu__link"
                    to={`/${guide.node.parent.relativeDirectory}/${guide.node.parent.name}`}>{ guide.node.frontmatter.title || guide.node.parent.name }</Link>
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
