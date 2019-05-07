import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkStepperItem = props => {
  const {
    additionalClasses,
    children,
    title,
    ...other
  } = props;

  return (
    <li
      role="tab"
      className="sprk-c-Stepper__step"
      aria-selected="false"
      datak-sprk-stepper="step"
    >
      <div className="sprk-c-Stepper__step-content">
        <span className="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain">
          <span className="sprk-c-Stepper__step-icon"></span>
          <h3
            className="sprk-c-Stepper__step-heading"
            data-sprk-stepper="heading"
          >
            { title }
          </h3>
        </span>
      </div>
    </li>
      // <li
      // role="tab"
      // class="sprk-c-Stepper__step sprk-c-Stepper__step--selected"
      // aria-selected="true"
      // data-sprk-stepper="step"
      // >
      //   <div class="sprk-c-Stepper__step-content">
      //     <span class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain">
      //       <span class="sprk-c-Stepper__step-icon"></span>
      //       <h3
      //       class="sprk-c-Stepper__step-heading"
      //       data-sprk-stepper="heading"
      //       >
      //       Step Two
      //       </h3>
      //     </span>
      //   </div>
      // </li>
  );
};

SprkStepperItem.propTypes = {
  // The children that will be rendered inside the component
  children: PropTypes.node,
  // Any additional classes (space-delimited string) to apply to the root
  additionalClasses: PropTypes.string,
  idString: PropTypes.string,
  analyticsString: PropTypes.string,
  title: PropTypes.string,
};

SprkStepperItem.defaultProps = {
};

export default SprkStepperItem;
