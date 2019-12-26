import React from 'react';
import InlineCode from '../components/markdown-render/inlineCode';
import theme from 'prism-react-renderer/themes/github';

const ColorSwatch = ({ name, description, hexValue, rgbValue, sassVar, swatchHeight }) => (
  <div className="sprk-c-Card sprk-o-Stack">
    <div className="sprk-o-Stack__item">
      <div
        style={{
          minHeight: swatchHeight || '140px',
          backgroundColor: rgbValue
        }}
        className="sprk-c-Card__media"></div>
    </div>

    <div className="
      sprk-o-Stack__item
      sprk-c-Card__content
      sprk-o-Stack
      sprk-o-Stack--large
      "
    >
      <h3 className="sprk-b-TypeDisplayFive sprk-o-Stack__item">
        {name}
      </h3>

      <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
        {description}
      </p>

      <div className="sprk-o-Stack sprk-o-Stack--medium">
        {hexValue && (
          <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
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

export default ColorSwatch;
