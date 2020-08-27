import React from 'react';
import PropTypes from 'prop-types';
import theme from 'prism-react-renderer/themes/github';
import InlineCode from './markdown-render/inlineCode';
import useColorData from '../hooks/use-color-data';

const nameFormatter = (name) => {
  return name
    .replace(/-/g, ' ')
    .replace('sprk', '')
    .split(' ')
    .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
    .join(' ');
};

const ColorSwatch = ({ swatchHeight, variableName }) => {
  const colorData = useColorData();

  // return a single object containing data for one color
  const colorNode = colorData.filter((item) => {
    return item.node.context.name === variableName;
  })[0];

  const rgbValue = colorNode.node.context.value;
  const { name } = nameFormatter(colorNode.node.context.name);
  const { description } = colorNode.node;
  const hexValue = colorNode.node.type;
  const sassVar = `$${colorNode.node.context.name}`;

  return (
    <div className="sprk-c-Card sprk-o-Stack">
      <div className="sprk-o-Stack__item">
        <div
          style={{
            minHeight: swatchHeight || '140px',
            backgroundColor: rgbValue,
          }}
          className="sprk-c-Card__media"
        />
      </div>

      <div
        className="
          sprk-o-Stack__item
          sprk-c-Card__content
          sprk-o-Stack
          sprk-o-Stack--large
        "
      >
        <h3 className="sprk-b-TypeDisplayFive sprk-o-Stack__item">{name}</h3>

        <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">{description}</p>

        <div className="sprk-o-Stack sprk-o-Stack--medium">
          {hexValue && (
            <div
              className="
                sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium"
            >
              <h4 className="sprk-b-TypeDisplaySeven sprk-o-Stack__item">
                Hex Value
              </h4>

              <InlineCode
                className="css"
                theme={theme}
                additionalPreClasses="sprk-u-pas sprk-u-man sprk-o-Stack__item"
              >
                {hexValue}
              </InlineCode>
            </div>
          )}

          <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
            <h4 className="sprk-b-TypeDisplaySeven sprk-o-Stack__item">
              RGB Value
            </h4>

            <InlineCode
              className="css"
              theme={theme}
              additionalPreClasses="sprk-u-pas sprk-u-man sprk-o-Stack__item"
            >
              {rgbValue}
            </InlineCode>
          </div>

          <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
            <h4 className="sprk-b-TypeDisplaySeven sprk-o-Stack__item">
              Sass Variable
            </h4>

            <InlineCode
              className="css"
              theme={theme}
              additionalPreClasses="sprk-u-pas sprk-u-man sprk-o-Stack__item"
            >
              {sassVar}
            </InlineCode>
          </div>
        </div>
      </div>
    </div>
  );
};

ColorSwatch.propTypes = {
  variableName: PropTypes.string,
  swatchHeight: PropTypes.string,
};

export default ColorSwatch;
