import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { stepper } from '@sparkdesignsystem/spark';
import { uniqueId } from 'lodash';
import SprkStepperStep from './components/SprkStepperStep/SprkStepperStep';

class SprkStepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.children.map(item => ({
        id: uniqueId('stepper-item-'),
        ...item,
      })),
    };
  }

  componentDidMount() {
    stepper();
  }

  render() {
    const { additionalClasses, children, idString, ...other } = this.props;
    const { items } = this.state;

    return (
      <ol
        className={classnames('sprk-c-Stepper', additionalClasses)}
        data-sprk-stepper="container"
        role="tablist"
        aria-orientation="vertical"
        data-id={idString}
        {...other}
      >
        {items.map(item => {
          // ignore all child nodes that are not stepper steps
          // is this what we want?
          if (item.type.name !== SprkStepperStep.name) return null;

          return <SprkStepperStep {...item.props} key={item.id} id={item.id} />;
        })}

        {/* {children} */}
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
