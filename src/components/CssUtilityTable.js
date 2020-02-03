import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { SprkTable } from "@sparkdesignsystem/spark-react";

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
      const sassVarData = data.allSassUtilitiesJson.edges
        .filter(item => {
          return (
            item.node.group[0] === group
          );
        })
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
            sprk-u-Measure
          "
          columns={[
            {
              name: "name",
              header: "Class",
            },
            {
              name: "description",
              header: "Description"
            }
          ]}
          rows={sassVarData}
        />
      );
    }}
  />
);

export default CssUtilityTable;
