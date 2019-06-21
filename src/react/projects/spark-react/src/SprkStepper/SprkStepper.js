import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from 'lodash';
import SprkStepperStep from './components/SprkStepperStep/SprkStepperStep';
import SprkCarousel from './components/SprkCarousel/SprkCarousel';
import SprkCarouselStep from './components/SprkCarouselStep/SprkCarouselStep';
import SprkStepperSlider from './components/SprkStepperSlider/SprkStepperSlider';

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
    this.updateSliderPosition = this.updateSliderPosition.bind(this);
    this.setNewActiveStep = this.setNewActiveStep.bind(this);

    this.state = {
      activeStepIndex: 0,
      sliderStyle: { top: 0, },
    };
  }

  componentDidMount() {
    this.setInitialActiveStep();
  }

  setInitialActiveStep() {
    const { children } = this.props;

    // the first step is active by default
    let initialIndex = 0;

    if (children.length > 0) {
      children.forEach((child, index) => {
        if (child.props.isSelected) {
          initialIndex = index;
        }
      });
    }

    this.setNewActiveStep(initialIndex);
  }

  handleStepClick(e, indexOfStep) {
    this.setNewActiveStep(indexOfStep);
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

  retreatTab() {
    const { activeStepIndex } = this.state;
    const { children } = this.props;

    let newIndex = activeStepIndex - 1;

    if (newIndex < 0) {
      newIndex = children.length - 1;
    }

    this.setNewActiveStep(newIndex);
  }

  advanceTab() {
    const { activeStepIndex } = this.state;
    const { children } = this.props;

    let newIndex = activeStepIndex + 1;

    if (newIndex >= children.length) {
      newIndex = 0;
    }

    this.setNewActiveStep(newIndex);
  }

  jumpToFirstTab() {
    this.setNewActiveStep(0);
  }

  jumpToLastTab() {
    const { children } = this.props;

    this.setNewActiveStep(children.length - 1);
  }

  setNewActiveStep(stepIndex){
    this.setState({ activeStepIndex: stepIndex });
  }

  updateSliderPosition(position) {
    this.setState({
      sliderStyle: { top: position }
    });
  }

  render() {
    const { additionalClasses, children, idString, hasDarkBackground, ...other } = this.props;
    const { activeStepIndex } = this.state;

    let hasCarousel = false;
    let hasDesc = false;
    let descCount = 0;

    children.forEach((child, index) => {
      if (child.props.imgSrc) {
        // TODO validate that if one has it they all have it
        // hasCarousel = true;
      }

      if (child.props.children) {
        descCount++;
      }
    });

    if (descCount === children.length) {
      hasDesc = true;
    } else if (descCount > 0){
      // true if 1 or more has a description but not all
      console.warn("SprkStepper: If any step has a description, they all must have a description.");
    }

    // build the carousel steps as needed
    const carousel = (
      <SprkCarousel>
        {children.map((childNode, index) => {
          return (
            <SprkCarouselStep
              key={index} //TODO lodash or something
              imgSrc={childNode.props.imgSrc}
              imgAlt={childNode.props.imgAlt}
              isSelected={activeStepIndex === index}
            >

            </SprkCarouselStep>
          )
        })}
      </SprkCarousel>
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
        {hasDesc &&
          <SprkStepperSlider
            title={children[activeStepIndex].props.title} // active title
            contents={children[activeStepIndex].props.children} // active contents
            sliderStyle={this.state.sliderStyle}
          />
        }

        {children.map((childNode, index) => {

          let step = (
            <SprkStepperStep
              {...childNode.props}
              key={index}
              id={childNode.id}
              isSelected={activeStepIndex === index}
              tabIndex={0}
              additionalClasses={classnames(
                index === 0 ? 'sprk-c-Stepper__step--first' : '',
                index === children.length - 1 ? 'sprk-c-Stepper__step--last' : '',
                childNode.props.additionalClasses
              )}
              onKeyDown={this.handleKeyEvents}
              onClick={(event) => { childNode.props.onClick(); this.handleStepClick(event, index); }}
              renderCallback={ this.updateSliderPosition }
              hasDescription={hasDesc}
              hasDarkBackground={hasDarkBackground}
            />
          );

          return step;
        })}
      </ol>
    );

    if (hasDarkBackground) {
      stepper = (
        <div className='sprk-u-BackgroundColor--blue sprk-o-Box sprk-o-Box--large'>
          {stepper}
        </div>
      )
    }

    // if (hasCarousel) {
    //   stepper = (
    //     <div className=''>
    //       {carousel}
    //       {stepper}
    //     </div>
    //   )
    // }

    return stepper;
  }
}

SprkStepper.propTypes = {
  children: PropTypes.node,
  additionalClasses: PropTypes.string,
  idString: PropTypes.string,
  hasDarkBackground: PropTypes.bool,
};

export default SprkStepper;
