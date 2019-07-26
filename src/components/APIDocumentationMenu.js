import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { SprkAccordion, SprkAccordionItem } from '@sparkdesignsystem/spark-react';

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
          <h3 className="context-menu__heading">API Documentation</h3>
          <ul>
          {
            components.map((component) => {
              return (
                <li>
                  <a href={`#${component.node.name}`}>{component.node.name}</a>
                </li>
              );
            })
          }
          </ul>
        </>
      );
    }
    }
  />
);

export default APIDocumentationMenu;
