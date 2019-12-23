import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ColorSwatch from './ColorSwatch';

const ColorSwatchGrid = ({ color }) => (
  <StaticQuery
    query={
        graphql`
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
      const sassColorData = data.allSassVarsJson.edges
      .filter(item => {
        return (
          item.node.file.name === '_colors.scss' &&
          item.node.group[0] === color
        );
      })
      .map(item => (
        {
          name: item.node.context.name,
          value: item.node.context.value,
          description: item.node.description,
          hexValue: item.node.type,
        }
      ));

      const swatches = sassColorData.map(swatch => {
        const {
          name,
          value,
          description,
          hexValue,
        } = swatch;
        const formattedName = name
        .replace(/\-/g, ' ')
        .replace('sprk', '')
        .split(' ').map(
          word => word.substring(0, 1).toUpperCase() + word.substring(1)
        ).join(' ');

        return (
          <ColorSwatch
            name={formattedName}
            hexValue={hexValue}
            rgbValue={value}
            sassVar={`$${name}`}
            description={description}
          />
        )
      });

      return (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gridGap: '1rem'
          }}>
            {swatches}
        </div>
      );
    }}
  />
);

export default ColorSwatchGrid;
