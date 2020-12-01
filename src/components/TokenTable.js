import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SprkTable, SprkTextInput } from '@sparkdesignsystem/spark-react';

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
    flattenedData: [
      item.node.context.name,
      item.node.context.value,
      item.node.description,
    ]
      .join(' ')
      .toLowerCase(),
  }));

  const [filteredData, setFilteredData] = useState(sassVarData);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      setFilteredData(sassVarData);
      return;
    }
    const getFilteredData = sassVarData.filter(({ flattenedData }) => {
      return flattenedData.includes(query.toLowerCase());
    });
    setFilteredData(getFilteredData);
  }, [query]);

  return (
    <>
      <SprkTextInput
        label="Filter through tokens"
        name="text-input-label"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {filteredData.length <= 0 ? (
        // MAKE THIS LOOK BETTER
        `No results for '${query}'. Try another keyword.`
      ) : (
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
          rows={filteredData}
        />
      )}
    </>
  );
};

export default TokenTable;
