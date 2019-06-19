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

    this.state = {
      activeStepIndex: 0,
      frameStyle: {
        'maxWidth': 256, // this needs to be calculated - with a ref? What if the images are diff sizes?
      },
      slidesStyle: {
        'transitionDuration': '300ms',
        'transform': 'translateX(-512px)',
        'transitionTimingFunction': 'ease',
      }
    };
  }

  componentDidMount() {
    this.setInitialActiveStep();
  }

  goToStep(stepIndex){
    this.setState({ activeStepIndex: stepIndex });
    this.setState({
      slidesStyle: {
        'transitionDuration': '300ms',
        // todo - 256 needs to be set in a callback probably. What if the images have different sizes?
        'transform': 'translateX(' + 256*stepIndex*-1 + 'px)',
        'transitionTimingFunction': 'ease',
      }
    })
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

    // console.log('carousel setting initial to ' + initialIndex);
    this.goToStep(initialIndex);
  }

  retreatTab() {
    const { activeStepIndex } = this.state;
    const { children } = this.props;

    let newIndex = activeStepIndex - 1;

    if (newIndex < 0) {
      newIndex = children.length - 1;
    }

    this.goToStep(newIndex);
  }

  advanceTab() {
    const { activeStepIndex } = this.state;
    const { children } = this.props;

    let newIndex = activeStepIndex + 1;

    if (newIndex >= children.length) {
      newIndex = 0;
    }

    this.goToStep(newIndex);
  }

  jumpToFirstTab() {
    this.goToStep(0);
  }

  jumpToLastTab() {
    const { children } = this.props;

    this.goToStep(children.length - 1);
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

    const { activeStepIndex, frameStyle, slidesStyle } = this.state;

    return (
      <div className="sprk-c-Carousel" data-sprk-carousel="stepper-carousel-01">
        <div className="sprk-c-Carousel__controls sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-row sprk-o-Stack--center-column">

          <SprkLink
            onClick={(e) => { e.preventDefault(); this.retreatTab(); }}
            // additionalClasses={leftLinkClasses}
            variant="plain"
            // analyticsString={analyticsStringPrev}
            // aria-label="Previous Page"
            >
            <span className="sprk-u-ScreenReaderText">{prevLinkText}</span>
            <SprkIcon iconName={prevIcon} />
          </SprkLink>

          <div className="sprk-c-Carousel__frame" style={frameStyle}>
            <ul className="sprk-c-Carousel__slides" style={slidesStyle}>
              {children.map((childNode, index) => {
                // console.log('Carousel outputting carousel step with index ' + index + ' and active step index ' + activeStepIndex + '. Selected should be ' + (activeStepIndex === index));
                return (
                  <SprkCarouselStep
                    key={index} //TODO lodash or something
                    imgSrc={childNode.props.imgSrc}
                    imgAlt={childNode.props.imgAlt}
                    isSelected={activeStepIndex == index}
                    idString={index}

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
