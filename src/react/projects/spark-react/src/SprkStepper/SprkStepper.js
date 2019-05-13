import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { stepper } from '@sparkdesignsystem/spark';

class SprkStepper extends Component {
  componentDidMount() {
    stepper();
  }

  render() {
    const { additionalClasses, children, idString, ...other } = this.props;

    return (
      <ol
        className={classnames('sprk-c-Stepper', additionalClasses)}
        data-sprk-stepper="container"
        role="tablist"
        aria-orientation="vertical"
        data-id={idString}
        {...other}
      >
        {/* // figure out which children are stepper items and then re-render them.
        // Is there a word for this practice? */}
        {children}
      </ol>
    );
  }
}

SprkStepper.propTypes = {
  // The children that will be rendered inside the content portion of the promo
  children: PropTypes.node,
  // Any additional classes (space-delimited string) to apply to the root
  additionalClasses: PropTypes.string,
  idString: PropTypes.string,
};

SprkStepper.defaultProps = {};

export default SprkStepper;
