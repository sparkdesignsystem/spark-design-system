import React from 'react';
import PropTypes from 'prop-types';
// import theme from 'prism-react-renderer/themes/github';
import { SprkStack, SprkStackItem } from '@sparkdesignsystem/spark-react';
// import InlineCode from './markdown-render/inlineCode';
import useColorData from '../hooks/use-color-data';

// const nameFormatter = (name) => {
//   return name
//     .replace(/-/g, ' ')
//     .replace('sprk', '')
//     .split(' ')
//     .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
//     .join(' ');
// };

const ColorSwatch = (props) => {
  const colorData = useColorData();

  const { variableName, isCompact, hasOutline } = props;

  // return a single object containing data for one color
  const colorNode = colorData.filter((item) => {
    return item.node.context.name === variableName;
  })[0];

  const rgbValue = colorNode.node.context.value;
  // const { name } = nameFormatter(colorNode.node.context.name);
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
    <SprkStack additionalClasses="docs-c-ColorSwatch" splitAt="small">
      <SprkStackItem additionalClasses="sprk-o-Stack__item--two-fifths@s">
        <SprkStack splitAt="tiny">
          <SprkStackItem
            style={{
              // todo these change based on layout
              height: '85px',
              width: '85px',
              marginRight: '10px',
              backgroundColor: hexValue,
            }}
          />
          {!isCompact && (
            <SprkStackItem>
              <div>NAME</div>
              <div
                style={
                  {
                    // maxWidth: '40%',
                  }
                }
              >
                {description}
              </div>
            </SprkStackItem>
          )}
        </SprkStack>
      </SprkStackItem>
      {!isCompact && (
        <>
          <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@s">
            <div className="colorSwatchLabel">Hex</div>
            {hexValue}
          </SprkStackItem>
          <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@s">
            <div className="colorSwatchLabel">RGB</div>
            {rgbValue}
          </SprkStackItem>
          <SprkStackItem additionalClasses="sprk-o-Stack__item--fifth@s">
            <div className="colorSwatchLabel">Sass</div>
            {sassVar}
          </SprkStackItem>
        </>
      )}
    </SprkStack>
  );
};

ColorSwatch.propTypes = {
  variableName: PropTypes.string,
  isCompact: PropTypes.bool,
  hasOutline: PropTypes.bool,
};

export default ColorSwatch;
