import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from 'lodash';
import SprkLink from '../../../SprkLink/SprkLink';
import SprkIcon from '../../../SprkIcon/SprkIcon';
import SprkCarouselStep from '../SprkCarouselStep/SprkCarouselStep';

// convert this to be stateful
// load/parse/omit child nodes like stepper
// build child nodes dynamically -> use clone

class SprkCarousel extends Component {
  constructor(props) {
    super(props);

    this.handleKeyEvents = this.handleKeyEvents.bind(this);
    this.retreatTab = this.retreatTab.bind(this);
    this.advanceTab = this.advanceTab.bind(this);
    this.jumpToFirstTab = this.jumpToFirstTab.bind(this);
    this.jumpToLastTab = this.jumpToLastTab.bind(this);
    this.setInitialActiveStep = this.setInitialActiveStep.bind(this);

    const { children } = this.props;

    const stepChildren = children.filter(child => child.type.name === SprkCarouselStep.name);

    let itemsVar = [];
    let stepIds = [];

    if (stepChildren.length > 0) {
      stepIds = stepChildren.map(
        () => uniqueId('step-')
      );

      itemsVar = stepChildren.map((item, index) => ({
        id: stepIds[index],
        ...item,
      }));
    }

    this.state = {
      childNodes: itemsVar,
      stepIds,
      activeStepId: null,
    };
  }

  componentDidMount() {
    this.setInitialActiveStep();
  }

  goToStep(stepId){
    this.setState({ activeStepId: stepId });
  }

  setInitialActiveStep() {
    const { children } = this.props;
    const { stepIds } = this.state;

    // the first step is active by default
    this.setState({ activeStepId: stepIds[0] });

    if (children.length > 0) {
      children.forEach((child, index) => {
        if (child.props.isSelected) {
          this.setState({ activeStepId: stepIds[index] });
        }
      });
    }
  }

  retreatTab() {
    const { activeStepId, stepIds } = this.state;
    const currentIndex = stepIds.indexOf(activeStepId);
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = stepIds.length - 1;
    }

    this.setState({ activeStepId: stepIds[newIndex] });
    console.log('carousel is now on step: ' + stepIds[newIndex]);
  }

  advanceTab() {
    const { activeStepId, stepIds } = this.state;
    const currentIndex = stepIds.indexOf(activeStepId);
    let newIndex = currentIndex + 1;

    if (newIndex >= stepIds.length) {
      newIndex = 0;
    }

    this.setState({ activeStepId: stepIds[newIndex] });
    console.log('carousel is now on step: ' + stepIds[newIndex]);
  }

  jumpToFirstTab() {
    const { stepIds } = this.state;

    this.setState({ activeStepId: stepIds[0] });
    console.log('carousel is now on step: ' + stepIds[newIndex]);
  }

  jumpToLastTab() {
    const { stepIds } = this.state;

    this.setState({ activeStepId: stepIds[stepIds.length - 1] });
    console.log('carousel is now on step: ' + stepIds[newIndex]);
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
    const {
      additionalClasses,
      children,
      idString,
      nextLinkText,
      prevLinkText,
      prevIcon,
      nextIcon,
      ...other
    } = this.props;

    const { childNodes, activeStepId } = this.state;

    return (
      <div className="sprk-u-BackgroundColor--blue sprk-o-Box sprk-o-Box--large">
        <div className="sprk-o-CenteredColumn sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--center-column sprk-o-Stack--split-reverse@xl">
          <div className="sprk-o-Stack__item sprk-o-Stack__item--flex@xl">
            <div className="sprk-c-Carousel" data-sprk-carousel="stepper-carousel-01">
              <div className="sprk-c-Carousel__controls sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-row sprk-o-Stack--center-column">

                <SprkLink
                  onClick={e => this.retreatTab()}
                  // additionalClasses={leftLinkClasses}
                  variant="plain"
                  // analyticsString={analyticsStringPrev}
                  // aria-label="Previous Page"
                  >
                  <span className="sprk-u-ScreenReaderText">{prevLinkText}</span>
                  <SprkIcon iconName={prevIcon} />
                </SprkLink>

                <div className="sprk-c-Carousel__frame">
                  <ul className="sprk-c-Carousel__slides">
                    {childNodes.map((childNode, index) => {
                      return (
                        <SprkCarouselStep
                          key={index} //TODO lodash or something
                          imgSrc={childNode.props.imgSrc}
                          imgAlt={childNode.props.imgAlt}
                          isSelected={activeStepId == childNode.id}

                          // don't show it if it's inactive
                          // vanilla is just using a CSS transition to
                          // crop them out and slide as needed. I want to use CSS trans
                          // anyway so let's start by trying that
                        >
                        </SprkCarouselStep>
                      )
                    })}
                  </ul>
                  <div className="sprk-c-Carousel__dots" data-sprk-carousel-dots="stepper-carousel-01"></div>
                </div>

                <SprkLink
                  onClick={e => this.advanceTab()}
                  // additionalClasses={leftLinkClasses}
                  variant="plain"
                  // analyticsString={analyticsStringPrev}
                  // aria-label="Previous Page"
                >
                  <span className="sprk-u-ScreenReaderText">{nextLinkText}</span>
                  <SprkIcon iconName={nextIcon} />
                </SprkLink>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

SprkCarousel.propTypes = {
  // The children that will be rendered inside the component
  children: PropTypes.node,
  // Any additional classes (space-delimited string) to apply to the root
  additionalClasses: PropTypes.string,
  idString: PropTypes.string,
  // Screenreader text for the 'previous page' chevron
  nextLinkText: PropTypes.string,
  // Screenreader text for the 'next page' chevron
  prevLinkText: PropTypes.string,
  // the icon name to be rendered for the previous link
  prevIcon: PropTypes.string,
  // the icon name to be rendered for the next link
  nextIcon: PropTypes.string,
  isSelected: PropTypes.bool,
};

SprkCarousel.defaultProps = {
  nextLinkText: 'Next Page',
  prevLinkText: 'Previous Page',
  prevIcon: 'chevron-left',
  nextIcon: 'chevron-right',
};

export default SprkCarousel;
