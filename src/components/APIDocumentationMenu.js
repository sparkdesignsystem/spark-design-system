import React from 'react';
import { StaticQuery, Link } from 'gatsby';
import { SprkToggle } from '@sparkdesignsystem/spark-react';

const APIDocumentationMenu = () => {
  return (
    <StaticQuery
      query={graphql`
        {
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
      render={ data => {
        const { edges: components } = data.allMdx;
        return (
          <>
            <h3>API Documentation</h3>
            <ul>
              <SprkToggle title="React">
                { components.map((component) => {
                    return (

                      <li>
                        <a href={`http://react.sparkdesignsystem.com/${component.node.frontmatter.title}`}>{ component.node.frontmatter.title || guide.node.parent.name }</a>
                      </li>
                    );
                  })
                }
              </SprkToggle>
            </ul>
          </>
        );
      }
    } 
    />
  );
}

export default APIDocumentationMenu;