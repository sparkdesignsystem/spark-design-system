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
      // index of the active step as it appears in the stepper/carousel
      activeStepIndex: 0,
      sliderStyle: { top: 0, },
    };
  }

  componentDidMount() {
    this.setInitialActiveStep();

    this.setState({
      sliderStyle: { top: 0 } // todo - is this doing anything?
    });
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
    console.log('callback with value: ' + position);
    this.setState({
      sliderStyle: { top: position }
    });
  }

  render() {
    const { additionalClasses, children, idString, hasDarkBackground, hasDescriptions, ...other } = this.props;
    const { activeStepIndex } = this.state;

    let hasCarousel = false;

    children.forEach((child, index) => {
      if (child.props.imgSrc) {
        // validate that if one has it they all have it
        hasCarsousel = true;
      }
    });

    // build the carousel steps as needed
    const carousel = (
      <SprkCarousel>
        {/* {childNodes.map((childNode, index) => {
          return (
            <SprkCarouselStep
              key={index} //TODO lodash or something
              imgSrc={childNode.props.imgSrc}
              imgAlt={childNode.props.imgAlt}
              isSelected={childNode.id === activeStepId}
            >

            </SprkCarouselStep>
          )
        })} */}
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
        {hasDescriptions &&
          <SprkStepperSlider
            title={'asdf'}
            contents={'foobar'}
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
              hasDescription={hasDescriptions}
              hasDarkBackground={hasDarkBackground}
            />
          );

          return step;
        })}
      </ol>
    );

    if (hasCarousel) {
      stepper = (
        <div className='sprk-o-Box sprk-o-Box--large'>
          {/* {carousel} */}
          {stepper}
        </div>
      )
    }

    // if we're a carousel, we need to wrap the carousel and stepper in a container div anyway
    if (hasDarkBackground) {
      stepper = (
        <div className='sprk-u-BackgroundColor--blue sprk-o-Box sprk-o-Box--large'>
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
  hasDescriptions: PropTypes.bool,
  hasDarkBackground: PropTypes.bool,
  backgroundColor: PropTypes.string, // TODO
};

SprkStepper.defaultProps = {
  hasDarkBackground: false,
};

export default SprkStepper;
