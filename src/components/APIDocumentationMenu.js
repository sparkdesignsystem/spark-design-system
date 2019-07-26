import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { SprkAccordion, SprkAccordionItem } from '@sparkdesignsystem/spark-react';

const APIDocumentationMenu = () => (
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
    render={(data) => {
      const { edges: components } = data.allMdx;
      return (
        <>
          <h3 className="context-menu__heading">API Documentation</h3>
          <SprkAccordion>
            <SprkAccordionItem heading="HTML">
                  Coming Soon
            </SprkAccordionItem>
            <SprkAccordionItem additionalClasses="context-menu__collection-heading" heading="React">
              <ul className="context-menu__collection">
                { components.map(component => (

                  <li className="context-menu__collection-item">
                    <a className="context-menu__link" href={`http://react.sparkdesignsystem.com/${component.node.frontmatter.title}`}>{ component.node.frontmatter.title || guide.node.parent.name }</a>
                  </li>
                ))
                  }
              </ul>
            </SprkAccordionItem>
            <SprkAccordionItem heading="Angular">
                  Coming Soon
            </SprkAccordionItem>
          </SprkAccordion>
        </>
      );
    }
    }
  />
);

export default APIDocumentationMenu;
