import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkStepperStep = props => {
  const {
    additionalClasses,
    children,
    title,
    isSelected,
    idString,
    analyticsString,
    variant,
    onStepClick,
    ...other
  } = props;

  const hasDescription = variant === 'hasDescription';

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
      data-sprk-stepper="step"
      data-id={idString}
      data-analytics={analyticsString}
      onClick={onStepClick}
      {...other}
    >
      <div
        className={classnames(
          'sprk-c-Stepper__step-content',
          hasDescription ? 'sprk-c-Stepper__step-content--has-description' : '',
          !isSelected ? 'sprk-u-HideWhenJs' : '',
        )}
      >
        <span
          className="
          sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
        >
          <span className="sprk-c-Stepper__step-icon" />
          <h3
            className="sprk-c-Stepper__step-heading"
            data-sprk-stepper="heading"
          >
            {title}
          </h3>
        </span>

        {hasDescription && isSelected && (
          <div
            className="sprk-c-Stepper__step-description"
            data-sprk-stepper="description"
          >
            <p className="sprk-b-TypeBodyTwo">{children}</p>
          </div>
        )}
        {/* <div
      class="sprk-c-Stepper__step-description"
      data-sprk-stepper="description"
      id="one-target-1"
      aria-labelledby="one-step-1"
      role="tabpanel">
      <p class="sprk-b-TypeBodyTwo">
        Step 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div> */}
      </div>
    </li>
  );
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
  variant: PropTypes.oneOf(['default', 'hasDescription']),
  onStepClick: PropTypes.func,
};

SprkStepperStep.defaultProps = {
  variant: 'default',
};

export default SprkStepperStep;
