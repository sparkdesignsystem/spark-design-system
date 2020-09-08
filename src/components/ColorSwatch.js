/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  SprkStack,
  SprkStackItem,
  SprkDivider,
  SprkHeading,
  SprkText,
} from '@sparkdesignsystem/spark-react';
import useColorData from '../hooks/use-color-data';

const nameFormatter = (name) => {
  return name
    .replace(/-/g, ' ')
    .replace('sprk', '')
    .split(' ')
    .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
    .join(' ');
};

const ColorSwatch = (props) => {
  const colorData = useColorData();

  const { variableName, colorName, isCompact, hasOutline } = props;

  // return a single object containing data for one color
  const colorNode = colorData.filter((item) => {
    return item.node.context.name === variableName;
  })[0];

  const calculatedName = nameFormatter(colorNode.node.context.name);
  const rgbValue = colorNode.node.context.value;
  const { description } = colorNode.node;
  const hexValue = colorNode.node.type;
  const sassVar = `$${colorNode.node.context.name}`;

  if (isCompact) {
    return (
      <div
        style={{
          // todo these change based on layout
          height: '85px',
          width: '85px',
          marginRight: '10px',
          backgroundColor: hexValue,
          display: 'inline-block',
          border: hasOutline ? '1px solid black' : 'none',
        }}
      />
    );
  }
  return (
    <>
      <SprkStack additionalClasses="docs-c-ColorSwatch" splitAt="large">
        <SprkStackItem additionalClasses="sprk-o-Stack__item--two-fifths@l">
          <SprkStack splitAt="tiny">
            <SprkStackItem
              style={{
                // todo these change based on layout
                height: '85px',
                width: '85px',
                marginRight: '10px',
                backgroundColor: hexValue,
                border: hasOutline ? '1px solid black' : 'none',
              }}
              additionalClasses="sprk-u-mbs"
            />
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@xxs sprk-u-mrs">
              <SprkHeading element="span" variant="displaySeven">
                {colorName || calculatedName}
              </SprkHeading>
              <SprkText additionalClasses="sprk-u-mbm" variant="bodyFour">
                {description}
              </SprkText>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStack splitAt="small">
          <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@l sprk-o-Stack__item--third@s">
            <div className="colorSwatchLabelContainer">
              <span className="colorSwatchLabel sprk-u-pas">HEX</span>
            </div>
            <SprkText
              additionalClasses="sprk-u-pas colorSwatchVariableValue"
              element="div"
              variant="bodyFour"
            >
              {hexValue}
            </SprkText>
          </SprkStackItem>
          <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@l sprk-o-Stack__item--third@s">
            <div className="colorSwatchLabelContainer">
              <span className="colorSwatchLabel sprk-u-pas">RGB</span>
            </div>
            <SprkText
              additionalClasses="sprk-u-pas colorSwatchVariableValue"
              element="div"
              variant="bodyFour"
            >
              {rgbValue}
            </SprkText>
          </SprkStackItem>
          <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@l sprk-o-Stack__item--third@s">
            <div className="colorSwatchLabelContainer">
              <span className="colorSwatchLabel sprk-u-pas">Sass</span>
            </div>
            <SprkText
              additionalClasses="sprk-u-pas colorSwatchVariableValue"
              element="div"
              variant="bodyFour"
            >
              {sassVar}
            </SprkText>
          </SprkStackItem>
        </SprkStack>
      </SprkStack>
      <SprkDivider element="hr" />
    </>
  );
};

ColorSwatch.propTypes = {
  variableName: PropTypes.string,
  isCompact: PropTypes.bool,
  hasOutline: PropTypes.bool,
  colorName: PropTypes.string,
};

export default ColorSwatch;
