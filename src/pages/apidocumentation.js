import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ComponentIndex from '../components/ComponentIndex';
import Layout from '../components/site-structure/Layout';

const APIDocumenation = () => {
    return (
      <Layout menuContext="apidocumentation"
        render={(components, reactStoriedComponents, angularStoriedComponents, vanillaStoriedComponents) => {
          return(
            <>
              <h1 className="sprk-b-TypeDisplayTwo sprk-b-PageTitle">API Documentation</h1>
                {components.map((component, index) => (
                  <ComponentIndex
                    key={index}
                    id={component}
                    name={component}
                    reactLink={reactStoriedComponents.includes(component) ? component : null}
                    angularLink={angularStoriedComponents.includes(component) ? component : null}
                    htmlLink={vanillaStoriedComponents.includes(component) ? component : null}
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
