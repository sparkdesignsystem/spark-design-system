import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ComponentIndex from '../components/ComponentIndex';
import Layout from '../components/site-structure/Layout';

const APIDocumenation = () => {
    return (
      <Layout menuContext="apidocumentation"
        render={(data, components) => {
          return(
            <>
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
            </>
          );
        }}
      >
      </Layout>
    );
}

export default APIDocumenation;
