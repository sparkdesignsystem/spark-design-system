import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SprkTable } from '@sparkdesignsystem/spark-react';

const TokenTable = () => {
  const tokenData = useStaticQuery(
    graphql`
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
    `,
  );
  const sassVarData = tokenData.allSassVarsJson.edges.map((item) => ({
    name: item.node.context.name,
    value: item.node.context.value,
    description: item.node.description,
  }));

  const [data, setData] = useState(sassVarData);

  const handleInputChange = (event) => {
    const query = event.target.value;
    // need to search full data instead of existing data
    const filteredData = data.filter((post) => {
      const { name, value, description } = post;
      return (
        name.toLowerCase().includes(query.toLowerCase()) ||
        value.toLowerCase().includes(query.toLowerCase()) ||
        description.toLowerCase().includes(query.toLowerCase())
      );
    });
    // This needs to reset somehow
    setData(filteredData);
  };

  return (
    <>
      <input
        type="text"
        aria-label="Search"
        placeholder="Type to filter posts..."
        onChange={handleInputChange}
      />
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
        rows={data}
      />
    </>
  );
};

export default TokenTable;
