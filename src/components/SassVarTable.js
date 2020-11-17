import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { SprkTable } from '@sparkdesignsystem/spark-react';

const SassVarTable = () => (
  <StaticQuery
    query={graphql`
      query SassVars {
        allSassVarsJson {
          edges {
            node {
              description
              context {
                name
                value
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const sassVarData = data.allSassVarsJson.edges.map((item) => ({
        name: item.node.context.name,
        value: item.node.context.value,
        description: item.node.description,
      }));
      return (
        <SprkTable
          additionalTableClasses="
            docs-b-Table--left-align-last
            sprk-b-Table--spacing-medium
            sprk-b-Table--striped-even
            sprk-u-TextAlign--right
          "
          columns={[
            {
              name: 'name',
              header: 'Token Name',
            },
            {
              name: 'value',
              header: 'Default Value',
            },
            {
              name: 'description',
              header: 'Description',
            },
          ]}
          rows={sassVarData}
        />
      );
    }}
  />
);

export default SassVarTable;
