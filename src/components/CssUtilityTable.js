import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { SprkTable } from '@sparkdesignsystem/spark-react';

const CssUtilityTable = ({ group }) => (
  <StaticQuery
    query={graphql`
      query CssUtilityVars {
        allSassUtilitiesJson {
          edges {
            node {
              description
              context {
                name
              }
              file {
                name
              }
              group
            }
          }
        }
      }
    `}
    render={data => {
      const cssUtilData = data.allSassUtilitiesJson.edges
        .filter(item => (
          item.node.group[0] === group
        ))
        .map(item => ({
          name: item.node.context.name,
          description: item.node.description,
          group: item.node.group[0],
        }));
      return (
        <SprkTable
          additionalTableClasses="
            docs-b-Table--left-align-last
            sprk-b-Table--spacing-medium
            sprk-b-Table--striped-even
            sprk-u-TextAlign--right
            docs-b-Table
          "
          columns={[
            {
              name: 'name',
              header: 'Class',
            },
            {
              name: 'description',
              header: 'Description',
            }
          ]}
          rows={cssUtilData}
        />
      );
    }}
  />
);

CssUtilityTable.propTypes = {
  group: PropTypes.string
}

export default CssUtilityTable;
