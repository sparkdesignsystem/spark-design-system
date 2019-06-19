import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SprkStepperStep extends Component {

  componentDidUpdate(prevProps, prevState) {
    const { renderCallback, isSelected } = this.props;

    if (isSelected && !prevProps.isSelected) {
      const top = ReactDOM.findDOMNode(this).offsetTop;
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
              hasDescription && isSelected ? 'sprk-u-Visibility--hidden' : '',
            )}

          >
            <p className="sprk-b-TypeBodyTwo">{children}</p>
          </div>
        </div>
      </li>
    );
  }
};

SprkStepperStep.propTypes = {
  // The children that will be rendered inside the component
  children: PropTypes.node,
  // Any additional classes (space-delimited string) to apply to the root
  additionalClasses: PropTypes.string,
  idString: PropTypes.string,
  analyticsString: PropTypes.string,
  title: PropTypes.string,
  isSelected: PropTypes.bool,
  hasDescription: PropTypes.bool,
  hasDarkBackground: PropTypes.bool,
  onClick: PropTypes.func,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  renderCallback: PropTypes.func,
};

SprkStepperStep.defaultProps = {
  variant: 'default',
  onClick: () => {}
};

export default SprkStepperStep;
