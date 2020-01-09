import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SprkStepperStep extends Component {

  componentDidMount() {
    const { renderCallback, isSelected } = this.props;
    if (isSelected) {

      const top = ReactDOM.findDOMNode(this).offsetTop;
      // call our parent and let them know what our top is so they can pass that
      // to the slider component
      renderCallback(top);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { renderCallback, isSelected } = this.props;
    if (isSelected && !prevProps.isSelected) {

      const top = ReactDOM.findDOMNode(this).offsetTop;
      // call our parent and let them know what our top is so they can pass that
      // to the slider component
      renderCallback(top);
    }
  }

  render() {
    const {
      additionalClasses,
      hasDescription,
      hasDarkBackground,
      idString,
      analyticsString,
      title,
      isSelected,
      onClick,
      children,
      // not using this anywhere but I have to have it on the component so it doesn't
      // throw any errors.
      renderCallback,
      ...other
    } = this.props;

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <li
        role="tab"
        className={classnames(
          'sprk-c-Stepper__step',
          isSelected ? 'sprk-c-Stepper__step--selected' : '',
          additionalClasses,
        )}
        aria-selected={isSelected ? 'true' : 'false'}
        data-id={idString}
        data-analytics={analyticsString}
        onClick={onClick}
        {...other}
      >
        <div
          className={classnames(
            'sprk-c-Stepper__step-content',
            hasDescription ? 'sprk-c-Stepper__step-content--has-description' : '',
            isSelected ? 'sprk-c-Stepper__step-content--hidden' : '',
          )}
        >
          <span
            className="
            sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
          >
            <span className="sprk-c-Stepper__step-icon" />
            <h3
              className={classnames(
                "sprk-c-Stepper__step-heading",
                hasDescription && isSelected ? 'sprk-u-Visibility--hidden' : '',
              )}
            >
              {title}
            </h3>
          </span>

          { hasDescription &&
            <div
              className={classnames(
                "sprk-c-Stepper__step-description",
                isSelected ? 'sprk-u-Visibility--hidden' : 'sprk-u-Display--none',
              )}

            >
              {/* desc is only ever displayed in the slider. This is just for spacing. */}
              <p className="sprk-b-TypeBodyTwo">{children}</p>
            </div>
          }
        </div>
      </li>
    );
  }
};

SprkStepperStep.propTypes = {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  analyticsString: PropTypes.string,
  /*
   * Text for the headline of the step
   */
  title: PropTypes.string,
  /**
   * 	If true, this step will be selected when the component mounts. This property is changed automatically by the Stepper component when the keyboard is used to change the active step or when a step is clicked. Only one step can be selected at a time.
   */
  isSelected: PropTypes.bool,
  /**
   * This callback function will be called when the StepperStep is clicked. Note that this function is called before the Stepper state is updated.
   */
  onClick: PropTypes.func,
  /**
   * If true, the StepperStep will render with lighter text appropriate for displaying on a dark background.
   */
  // Internal prop
  hasDarkBackground: PropTypes.bool,
  /**
   * If true, the StepperStep will render in a way that is suitable for use with a Slider component
   */
  // Internal prop
  hasDescription: PropTypes.bool,
  /**
   * A function to call when the component finishes rendering. Used to move the slider to the appropriate position.
   */
  // Internal prop
  renderCallback: PropTypes.func,
};

SprkStepperStep.defaultProps = {
  onClick: () => {},
  renderCallback: () => {},
};

export default SprkStepperStep;
