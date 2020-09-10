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
import classnames from 'classnames';
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
        className={classnames(
          'docs-c-ColorSwatch__swatch docs-c-ColorSwatch__swatch--compact sprk-u-mrs',
          { 'docs-c-ColorSwatch__swatch--hasOutline': hasOutline },
        )}
        style={{
          backgroundColor: hexValue,
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
              className={classnames(
                'docs-c-ColorSwatch__swatch sprk-u-mrs',
                // eslint-disable-next-line prettier/prettier
                { 'docs-c-ColorSwatch__swatch--hasOutline': hasOutline },
              )}
              style={{
                backgroundColor: hexValue,
              }}
            />
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@xxs sprk-u-mrs">
              <SprkHeading
                element="h3"
                variant="displaySeven"
                additionalClasses="docs-c-ColorSwatch__heading sprk-u-mbs"
              >
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
            <div className="docs-c-ColorSwatch__label_container">
              <span className="docs-c-ColorSwatch__label sprk-u-pas">HEX</span>
            </div>
            <SprkText
              additionalClasses="sprk-u-pas docs-c-ColorSwatch__variable"
              element="div"
              variant="bodyFour"
            >
              {hexValue}
            </SprkText>
          </SprkStackItem>
          <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@l sprk-o-Stack__item--third@s">
            <div className="docs-c-ColorSwatch__label_container">
              <span className="docs-c-ColorSwatch__label sprk-u-pas">RGB</span>
            </div>
            <SprkText
              additionalClasses="sprk-u-pas docs-c-ColorSwatch__variable"
              element="div"
              variant="bodyFour"
            >
              {rgbValue}
            </SprkText>
          </SprkStackItem>
          <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@l sprk-o-Stack__item--third@s">
            <div className="docs-c-ColorSwatch__label_container">
              <span className="docs-c-ColorSwatch__label sprk-u-pas">Sass</span>
            </div>
            <SprkText
              additionalClasses="sprk-u-pas docs-c-ColorSwatch__variable"
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
