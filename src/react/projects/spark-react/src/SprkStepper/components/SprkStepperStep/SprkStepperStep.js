import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SprkStepperStep extends Component {

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
      children,
      title,
      isSelected,
      idString,
      analyticsString,
      hasDescription,
      hasDarkBackground,
      onClick,
      // not using this anywhere but I have to have it on the component so it doesn't
      // throw any errors. Because we're using SprkStepperStep as a DTO to move props around
      // like imgSrc, even though SprkStepperStep doesn't render any imgSrc.
      imgSrc,
      // same
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

          <div
            className={classnames(
              "sprk-c-Stepper__step-description",
              hasDescription && !isSelected ? 'sprk-u-Display--none' : 'sprk-u-Visibility--hidden',
            )}

          >
            {/* desc is only ever displayed in the slider. This is probably just for spacing. */}
            <p className="sprk-b-TypeBodyTwo">{children}</p>
          </div>
        </div>
      </li>
    );
  }
};

SprkStepperStep.propTypes = {
  // Any additional classes (space-delimited string) to apply to the root
  additionalClasses: PropTypes.string,
  // The children that will be rendered inside the component
  children: PropTypes.node,
  hasDarkBackground: PropTypes.bool,
  idString: PropTypes.string,
  analyticsString: PropTypes.string,
  title: PropTypes.string,
  isSelected: PropTypes.bool,
  hasDescription: PropTypes.bool,
  onClick: PropTypes.func,
  renderCallback: PropTypes.func,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

SprkStepperStep.defaultProps = {
  onClick: () => {}
};

export default SprkStepperStep;
