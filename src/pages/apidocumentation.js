import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ComponentIndex from '../components/ComponentIndex';
import Layout from '../components/site-structure/Layout';

const APIDocumenation = () => (
  <StaticQuery
    query={graphql`
      {
        reactMdx: allMdx(filter: {fileAbsolutePath: {regex: "/react/"}}) {
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
        angularMdx: allMdx(filter: {fileAbsolutePath: {regex: "/angular/"}}) {
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
        htmlMdx: allMdx(filter: {fileAbsolutePath: {regex: "/vanilla/"}}) {
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
      const components = Array.from(
        new Set([
          ...data.reactMdx.edges.map((edge) => { return edge.node.frontmatter.title;}),
          ...data.angularMdx.edges.map((edge) => { return edge.node.frontmatter.title;}),
          ...data.htmlMdx.edges.map((edge) => { return edge.node.frontmatter.title;})
        ])).sort();
      
      return (
        <Layout menuContext="apidocumentation">
          <h1 className="sprk-b-TypeDisplayTwo sprk-b-PageTitle">API Documentation</h1>
          {components.map((component, index) => (
            <ComponentIndex
              key={index}
              id={component}
              name={component}
              reactLink={data.reactMdx.edges.filter(edge => edge.node.frontmatter.title === component).length === 1 ? component : null}
              angularLink={data.angularMdx.edges.filter(edge => edge.node.frontmatter.title === component).length === 1 ? component : null}
              htmlLink={data.htmlMdx.edges.filter(edge => edge.node.frontmatter.title === component).length === 1 ? component : null}
            />
          ))}
        </Layout>
      );
    }}
  />
);

export default APIDocumenation;
