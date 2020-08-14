import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const withColorData = (IncomingComponent) => {
  return (
    <StaticQuery
      query={graphql`
        query SassColors {
          allSassVarsJson {
            edges {
              node {
                description
                context {
                  name
                  value
                }
                file {
                  name
                }
                group
                type
              }
            }
          }
        }
      `}
      render={(data) => {
        const sassColorData = data.allSassVarsJson.edges.filter((item) => {
          return item.node.file.name === '_colors.scss';
        });
        return <IncomingComponent colorData={sassColorData} />;
      }}
    />
  );
};

export default withColorData;
