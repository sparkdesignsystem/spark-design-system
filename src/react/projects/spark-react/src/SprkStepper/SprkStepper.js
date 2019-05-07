import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { stepper } from '@sparkdesignsystem/spark-core';

class SprkStepper extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    stepper();
  }

  render() {
    const {
      additionalClasses,
      children,
      idString,
      ...other
    } = this.props;

    return (
      <ol
        className={classnames(
          'sprk-c-Stepper',
          additionalClasses,
        )}
        data-sprk-stepper="container"
        role="tablist"
        aria-orientation="vertical"
        data-id={idString}
      >
        { children }
      </ol>
    );
  }
};

SprkStepper.propTypes = {
  // The children that will be rendered inside the content portion of the promo
  children: PropTypes.node,
  // Any additional classes (space-delimited string) to apply to the root
  additionalClasses: PropTypes.string,
  idString: PropTypes.string,
};

SprkStepper.defaultProps = {
};

export default SprkStepper;
