import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const UpdatedComponent = (IncomingComponent) => {
  class NewComponent extends React.Component {
    render() {
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
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
