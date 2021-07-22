import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkStepperStep from './components/SprkStepperStep/SprkStepperStep';
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
    this.getInitialActiveStep = this.getInitialActiveStep.bind(this);
    this.setNewActiveStep = this.setNewActiveStep.bind(this);
    this.updateSliderPosition = this.updateSliderPosition.bind(this);

    this.state = {
      activeStepIndex: this.getInitialActiveStep(),
      sliderStyle: { top: 0 },
    };
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

  getInitialActiveStep() {
    const { children } = this.props;

    // the first step is active by default
    let initialIndex = 0;

    children.forEach((child, index) => {
      if (child.props.isSelected) {
        initialIndex = index;
      }
    });

    return initialIndex;
  }

  setNewActiveStep(stepIndex) {
    this.setState({ activeStepIndex: stepIndex });
  }

  updateSliderPosition(position) {
    this.setState({
      sliderStyle: {
        top: position,
      },
    });
  }

  render() {
    const {
      additionalClasses,
      children,
      idString,
      hasDarkBackground,
      ...other
    } = this.props;
    const { activeStepIndex, sliderStyle } = this.state;

    let hasDesc = false;
    let descCount = 0;

    // count the number of Step children with descriptions. If that doesn't match the total number of children,
    // warn the user
    children.forEach((child, index) => {
      if (child.type.name === SprkStepperStep.name && child.props.children) {
        descCount++;
      }
    });

    if (descCount === children.length) {
      hasDesc = true;
    } else if (descCount > 0) {
      console.warn(
        'SprkStepper: If any step has a description, they all must have a description.',
      );
    }

    let stepper = (
      <ol
        className={classnames(
          'sprk-c-Stepper',
          hasDarkBackground ? 'sprk-c-Stepper--has-dark-bg' : '',
          !hasDarkBackground ? additionalClasses : '',
        )}
        role="tablist"
        aria-orientation="vertical" // todo change based on window width
        data-id={idString}
        {...other}
      >
        {hasDesc && (
          <SprkStepperSlider
            title={children[activeStepIndex].props.title} // active title
            contents={children[activeStepIndex].props.children} // active contents
            sliderStyle={sliderStyle}
          />
        )}

        {children.map((childNode, index) => {
          // Ignore all child nodes that are not SprkStepperSteps
          if (childNode.type.name !== SprkStepperStep.name) return null;

          return (
            <SprkStepperStep
              {...childNode.props}
              key={childNode.props.id || index}
              isSelected={activeStepIndex === index}
              tabIndex={0}
              additionalClasses={classnames(
                index === 0 ? 'sprk-c-Stepper__step--first' : '',
                index === children.length - 1
                  ? 'sprk-c-Stepper__step--last'
                  : '',
                childNode.props.additionalClasses,
              )}
              onKeyDown={this.handleKeyEvents}
              onClick={event => {
                childNode.props.onClick();
                this.handleStepClick(event, index);
              }}
              renderCallback={this.updateSliderPosition}
              hasDescription={hasDesc}
              hasDarkBackground={hasDarkBackground}
            />
          );
        })}
      </ol>
    );

    if (hasDarkBackground) {
      return (
        <div
          className={classnames(
            'sprk-c-Stepper__container-dark sprk-o-Box sprk-o-Box--large',
            additionalClasses,
          )}
        >
          {stepper}
        </div>
      );
    }

    return stepper;
  }
}

SprkStepper.propTypes = {
  /**
   * If true, the Stepper will be
   * rendered on a dark background.
   * `($sprk-blue)`
  */
  hasDarkBackground: PropTypes.bool,
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
};

export default SprkStepper;
