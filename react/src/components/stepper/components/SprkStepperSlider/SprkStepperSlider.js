import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SprkStepperSlider extends Component {
  constructor(props) {
    super(props);

    this.sliderRef = React.createRef();

    // prevProps is not available in getDerivedStateFromProps,
    // so we cache these in state.
    this.state = {
      cachedTop: props.sliderStyle ? props.sliderStyle.top : undefined,
      cachedSliderRef: this.sliderRef,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.sliderStyle && (nextProps.sliderStyle.top != prevState.cachedTop)) {
      prevState.cachedSliderRef.current.classList.remove('sprk-c-Stepper__slider--active');
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sliderStyle.top != this.props.sliderStyle.top) {
      setTimeout(() => {
        window.requestAnimationFrame(() => {
          this.sliderRef.current.classList.add('sprk-c-Stepper__slider--active');
        });
      });
    }
  }

  render() {
    const {
      title,
      contents,
      sliderStyle,
    } = this.props;

    return (
      <li className={classnames(
        'sprk-c-Stepper__slider',
        'sprk-c-Stepper__slider--active',
        )}
        style={sliderStyle}
        ref = {this.sliderRef}
      >
        <div className='sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description'>
          <span className="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain" >
            <span className="sprk-c-Stepper__step-icon sprk-u-Visibility--hidden"></span>
            <h3 className="sprk-c-Stepper__step-heading" >
              {title}
            </h3>
          </span>

          <div className="sprk-c-Stepper__step-description" >
            <p className="sprk-b-TypeBodyTwo">
              {contents}
            </p>
          </div>
        </div>
      </li>
    );
  };
}

SprkStepperSlider.propTypes = {
  /**
   * The title of the item.
   */
  title: PropTypes.string,
  /** Additional description text to accompany the item's title. */
  contents: PropTypes.string,
  /**
   * An object representing the style properties of this component.
   */
  sliderStyle: PropTypes.shape({
    top: PropTypes.number,
  }),
};

export default SprkStepperSlider;
