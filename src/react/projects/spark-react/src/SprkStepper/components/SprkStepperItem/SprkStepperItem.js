import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkStepperItem = props => {
  const {
    additionalClasses,
    children,
    ...other
  } = props;

  return (
    <li
      className="sprk-c-Stepper__step"
    >

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
  // The children that will be rendered inside the content portion of the promo
  children: PropTypes.node,
  // Any additional classes (space-delimited string) to apply to the root
  additionalClasses: PropTypes.string,
  idString: PropTypes.string,
  analyticsString: PropTypes.string,

};

SprkStepperItem.defaultProps = {
};

export default SprkStepperItem;
