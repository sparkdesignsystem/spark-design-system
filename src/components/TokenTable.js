import React, { useState, useCallback } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  SprkTable,
  SprkInputContainer,
  SprkInput,
  SprkLabel,
} from '@sparkdesignsystem/spark-react';
import debounce from 'lodash/debounce';

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
  const [value, setValue] = useState('');

  const debouncedFilterData = useCallback(
    debounce((searchQuery) => {
      setFilteredData(
        sassVarData.filter(({ flattenedData }) => {
          return flattenedData.includes(searchQuery.toLowerCase());
        }),
      );
    }, 500),
    [],
  );

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (newValue === '') {
      setFilteredData(sassVarData);
      return;
    }
    debouncedFilterData(newValue);
  };

  return (
    <>
      <SprkInputContainer>
        <SprkLabel htmlFor="filter-token">Filter Through Token List:</SprkLabel>
        <SprkInput
          id="filter-token"
          type="text"
          value={value}
          onChange={handleChange}
        />
      </SprkInputContainer>
      {value.length > 0 && filteredData.length > 0 && (
        <p className="sprk-u-mbl">
          Showing results for
          <span className="sprk-u-FontStyle--italic">
            &nbsp;&lsquo;{value.toString()}&rsquo;
          </span>
        </p>
      )}

      {filteredData.length <= 0 ? (
        <p>
          No results for
          <span className="sprk-u-FontStyle--italic">
            &nbsp;&lsquo;{value.toString()}&rsquo;
          </span>
          . Try another keyword.
        </p>
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
