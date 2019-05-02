import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkStepper = props => {
  const {
    additionalClasses,
    children,
    ...other
  } = props;

  return (
    <ol
      className="sprk-c-Stepper"
    ></ol>
    // <ol
    // class="sprk-c-Stepper"
    // data-sprk-stepper="container"
    // data-id="stepper-1"
    // role="tablist"
    // aria-orientation="vertical"
    // >
    //   <li
    //   role="tab"
    //   class="sprk-c-Stepper__step sprk-c-Stepper__step--selected"
    //   aria-selected="true"
    //   data-sprk-stepper="step"
    //   >
    //     <div class="sprk-c-Stepper__step-content">
    //       <span class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain">
    //         <span class="sprk-c-Stepper__step-icon"></span>
    //         <h3
    //         class="sprk-c-Stepper__step-heading"
    //         data-sprk-stepper="heading"
    //         >
    //         Step Two
    //         </h3>
    //       </span>
    //     </div>
    //   </li>
    // </ol>
  );
};

SprkStepper.propTypes = {
  // The children that will be rendered inside the content portion of the promo
  children: PropTypes.node,
  // Any additional classes (space-delimited string) to apply to the root
  additionalClasses: PropTypes.string,
  idString: PropTypes.string,
  analyticsString: PropTypes.string,

};

SprkStepper.defaultProps = {
};

export default SprkStepper;
