import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const GuidesMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allMdx(filter: {fileAbsolutePath: {regex: "/src\\/pages/"}}) {
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
          <h3 className="menu__heading">Guides</h3>
          <nav>
            <ul className="menu__collection">
              { guides.map(guide => (
                <li className="menu__collection-item">
                  <Link className="menu__link" to={`/${guide.node.parent.name}`}>{ guide.node.frontmatter.title || guide.node.parent.name }</Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      );
    }}
  />
);

export default GuidesMenu;
