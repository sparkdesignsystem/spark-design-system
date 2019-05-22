import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import { stepper } from '@sparkdesignsystem/spark';
import { uniqueId } from 'lodash';
import SprkStepperStep from './components/SprkStepperStep/SprkStepperStep';

class SprkStepper extends Component {
  constructor(props) {
    super(props);

    this.handleStepClick = this.handleStepClick.bind(this);
    this.handleKeyEvents = this.handleKeyEvents.bind(this);
    this.retreatTab = this.retreatTab.bind(this);
    this.advanceTab = this.advanceTab.bind(this);
    this.jumpToFirstTab = this.jumpToFirstTab.bind(this);
    this.jumpToLastTab = this.jumpToLastTab.bind(this);
    this.setInitialActiveStep = this.setInitialActiveStep.bind(this);

    const { children } = this.props;

    let itemsVar = [];
    let stepIds = [];
    if (children.length > 0) {
      stepIds = children.map(() => uniqueId('step-'));
      itemsVar = props.children.map((item, index) => ({
        id: stepIds[index],
        ...item, // this copies through all of the other react props
      }));
    }

    this.state = {
      // this will include all non-stepperitem children.
      // Does this break things? Test and fix.
      items: itemsVar,
      stepIds,
      activeStepId: null,
      // selectedIndex: 0,
    };
  }

  componentDidMount() {
    this.setInitialActiveStep();
  }

  setInitialActiveStep() {
    const { children } = this.props;
    const { stepIds } = this.state;

    if (children.length > 0) {
      children.forEach((child, index) => {
        if (child.props.isSelected) {
          this.setState({ activeStepId: stepIds[index] });
        }
      });
    }
  }

  handleStepClick(e) {
    const stepId = e.currentTarget.id;
    this.setState({ activeStepId: stepId });
  }

  retreatTab() {
    const { activeStepId, stepIds } = this.state;
    const currentIndex = stepIds.indexOf(activeStepId);
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = stepIds.length - 1;
    }

    this.setState({ activeStepId: stepIds[newIndex] });
  }

  advanceTab() {
    const { activeStepId, stepIds } = this.state;
    const currentIndex = stepIds.indexOf(activeStepId);
    let newIndex = currentIndex + 1;

    if (newIndex >= stepIds.length) {
      newIndex = 0;
    }

    this.setState({ activeStepId: stepIds[newIndex] });
  }

  jumpToFirstTab() {
    const { stepIds } = this.state;

    this.setState({ activeStepId: stepIds[0] });
  }

  jumpToLastTab() {
    const { stepIds } = this.state;

    this.setState({ activeStepId: stepIds[stepIds.length - 1] });
  }

  handleKeyEvents(event) {
    const keys = {
      end: 35,
      home: 36,
      left: 37,
      right: 39,
      up: 38,
      down: 40,
    };

    if (event.keyCode === keys.left || event.keyCode === keys.up) {
      event.preventDefault();
      this.retreatTab();
    } else if (event.keyCode === keys.right || event.keyCode === keys.down) {
      event.preventDefault();
      this.advanceTab();
    } else if (event.keyCode === keys.home) {
      event.preventDefault();
      this.jumpToFirstTab();
    } else if (event.keyCode === keys.end) {
      event.preventDefault();
      this.jumpToLastTab();
    }
  }

  render() {
    const { additionalClasses, children, idString, variant, hasDarkBackground, ...other } = this.props;
    const { items, activeStepId } = this.state;

    const hasCarousel = variant === 'carousel';

    const carousel = (
      <div
        className='sprk-c-Carousel'
        //data-id
      >
        <div
          className='sprk-c-Carousel__controls sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-row sprk-o-Stack--center-column'
        >
          {/* first button */}
          {/* carouselStep components */}
          {/* second button */}
        </div>
      </div>
    );

    let stepper = (
      <ol
        className={classnames(
          'sprk-c-Stepper',
          hasDarkBackground ? 'sprk-c-Stepper--has-dark-bg' : '',
          additionalClasses
        )}
        data-sprk-stepper="container"
        role="tablist"
        aria-orientation="vertical" // todo change based on window width
        data-id={idString}
        {...other}
      >
        {items.map((item, index) => {
          // ignore all child nodes that are not stepper steps
          // is this what we want?
          if (item.type.name !== SprkStepperStep.name) return null;

          return (
            <SprkStepperStep
              {...item.props}
              key={item.id}
              id={item.id}
              isSelected={activeStepId === item.id}
              tabIndex={0}
              additionalClasses={classnames(
                index === 0 ? 'sprk-c-Stepper__step--first' : '',
                index === items.length - 1 ? 'sprk-c-Stepper__step--last' : '',
                item.props.additionalClasses
              )}
              onKeyDown={this.handleKeyEvents}
              onClick={(event) => { item.props.onClick(); this.handleStepClick(event); }}
              variant={variant}
            />
          );
        })}
      </ol>
    );

    // if we're a carousel, we need to wrap the carousel and stepper in a container div anyway
    if (hasDarkBackground) {
      stepper = (
        <div className='sprk-u-BackgroundColor--blue sprk-o-Box sprk-o-Box--large'>
          {carousel}
          {stepper}
        </div>
      )
    }

    return stepper;
  }
}

SprkStepper.propTypes = {
  // The children that will be rendered inside the content portion of the promo
  children: PropTypes.node,
  // Any additional classes (space-delimited string) to apply to the root
  additionalClasses: PropTypes.string,
  idString: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'hasDescription', 'carousel']),
  hasDarkBackground: PropTypes.bool,
  backgroundColor: PropTypes.string, // TODO
};

SprkStepper.defaultProps = {
  variant: 'default',
  hasDarkBackground: false,
};

export default SprkStepper;
