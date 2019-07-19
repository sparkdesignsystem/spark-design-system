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
  // Any additional classes (space-delimited string) to apply to the root
  additionalClasses: PropTypes.string,
  // The provided value will be assigned to the data-id attribute on the Step.
  idString: PropTypes.string,
  // The provided value will be assigned to the data-analytics attribute on the Step.
  analyticsString: PropTypes.string,
  // The value to display in the title
  title: PropTypes.string,
  // If true, this step will be selected.
  isSelected: PropTypes.bool,
  // An optional function to call when a Step is clicked. Note that this function is called before the Stepper
  // state is updated.
  onClick: PropTypes.func,
  // If true, the StepperStep will render with lighter text appropriate for displaying on a dark background.
  // Note that this property is not documented on our docs site as it is only used internally.
  hasDarkBackground: PropTypes.bool,
  // If true, the StepperStep will render in a way that is suitable for use with a Slider component
  // Note that this property is not documented on our docs site as it is only used internally.
  hasDescription: PropTypes.bool,
  // A function to call when the component finishes rendering. Used to move the slider to the appropriate position.
  // Note that this property is not documented on our docs site as it is only used internally.
  renderCallback: PropTypes.func,
};

SprkStepperStep.defaultProps = {
  onClick: () => {},
  renderCallback: () => {},
};

export default SprkStepperStep;
