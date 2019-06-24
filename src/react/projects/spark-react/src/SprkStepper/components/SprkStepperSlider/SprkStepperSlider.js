import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from 'lodash';

class SprkStepperSlider extends Component {
  constructor(props) {
    super(props);

    this.state = { sliderAnimating: false };
  }

  render() {
    const {
      title,
      contents,
      sliderStyle,
      ...other
    } = this.props;

    const { sliderAnimating } = this.state;

    return (
      <li className={classnames(
        'sprk-c-Stepper__slider',
        !sliderAnimating ? 'sprk-c-Stepper__slider--active' : '',
        )}
        style={sliderStyle}
      >
        <div
          className={classnames(
            'sprk-c-Stepper__step-content',
            'sprk-c-Stepper__step-content--has-description',
          )}
        >
          <span
            className="
            sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
          >
            <span className="sprk-c-Stepper__step-icon sprk-u-Visibility--hidden" />
            <h3
              className={classnames(
                "sprk-c-Stepper__step-heading",
              )}
            >
              {title}
            </h3>
          </span>

          <div
            className={classnames(
              "sprk-c-Stepper__step-description",
            )}
          >
            <p className="sprk-b-TypeBodyTwo">{contents}</p>
          </div>
        </div>
      </li>
    );
  };
}

SprkStepperSlider.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  sliderStyle: PropTypes.object,
};

export default SprkStepperSlider;
