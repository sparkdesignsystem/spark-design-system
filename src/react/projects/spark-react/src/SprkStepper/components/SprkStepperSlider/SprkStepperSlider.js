import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from 'lodash';
import SprkLink from '../../../SprkLink/SprkLink';
import SprkIcon from '../../../SprkIcon/SprkIcon';
import SprkCarouselStep from '../SprkCarouselStep/SprkCarouselStep';

// todo - text should fade black to white before the slider animates, then fade white to black when it finishes animating.
// can I make this work using react lifecycle?

// componentWillUpdate() -> check if the top just changed. if it did, add a class or whatever to do the text color
// componentDidUpdate() -> check to see if the top just changed and add a class as needed

class SprkStepperSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      contents,
      sliderStyle,
      ...other
    } = this.props;

    return (
      <li className='sprk-c-Stepper__slider sprk-c-Stepper__slider--active' style={sliderStyle}>
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
