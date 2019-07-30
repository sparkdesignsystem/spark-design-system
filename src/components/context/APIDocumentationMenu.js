import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const APIDocumentationMenu = () => (
  <StaticQuery
    query={graphql`
        {
          allDirectory(filter: {relativePath: {regex: "/^components\\//"}, relativeDirectory: {eq: "components"}}) {
            edges {
              node {
                name
                relativePath
                relativeDirectory
              }
            }
          }
          allMdx(filter: {fileAbsolutePath: {regex: "/react/"}}) {
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
      const { edges: components } = data.allDirectory;
      return (
        <>
          <h3 className="menu__heading">API Documentation</h3>
          <ul className="menu__collection">
            {
            components.map((component, index) => (
              <li key={index}>
                <a className="menu__link" href={`#${component.node.name}`}>{component.node.name}</a>
              </li>
            ))
          }
          </ul>
        </>
      );
    }
    }
  />
);

export default APIDocumentationMenu;
