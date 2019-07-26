import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ComponentIndexItem from '../components/ComponentIndexItem';
import Layout from '../components/layout';

const APIDocumenation = () =>( 
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
        <Layout menuContext="apidocumentation">
          <h1>API Documentation</h1>
          {components.map((component) => {
            return(
              <ComponentIndexItem
              id={component.node.name}
              name={component.node.name}
              reactLink={`http://react.sparkdesignsystem.com/${component.node.name}`}
              angularLink={`http://angular.sparkdesignsystem.com/${component.node.name}`}
              htmlLink={`http://html.sparkdesignsystem.com/${component.node.name}`}
              />
            );
          })}
        </Layout>
      )
    }}
  />);

export default APIDocumenation;
