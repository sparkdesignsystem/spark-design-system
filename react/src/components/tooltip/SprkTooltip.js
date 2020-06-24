import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkIcon from '../icons/SprkIcon';
import uniqueId from 'lodash/uniqueId';

class SprkTooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: this.props.isDefaultOpen || false
    }

    this.toggle = this.toggle.bind(this);
    this.handleWindowKeydown = this.handleWindowKeydown.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);
    this.setPositioningClass = this.setPositioningClass.bind(this);

    this.triggerRef = React.createRef();
    this.tooltipRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleWindowKeydown);
    window.addEventListener('click', this.handleWindowClick);

    this.setPositioningClass();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleWindowKeydown);
    window.removeEventListener('click', this.handleWindowClick);
  }

  setPositioningClass() {
    let trigger = this.triggerRef.current;

    const elemX = trigger.getBoundingClientRect().left;
    const elemY = trigger.getBoundingClientRect().top;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 328 is the default max-width
    let maxWidth = 328;
    let calculatedWidth = maxWidth;

    if (elemX > viewportWidth / 2) {
      // the left edge of the button + the width of the button + the border
      calculatedWidth = elemX + 16 + 16;
      if (elemY > viewportHeight / 2) {
        this.setState({ position: 'topleft' })
      } else {
        this.setState({ position: 'bottomleft' })
      }
    } else {
      // the width of the viewport less the left edge of the button + the border
      calculatedWidth = viewportWidth - elemX + 16;
      if (elemY > viewportHeight / 2) {
        this.setState({ position: 'topright' })
      } else {
        this.setState({ position: 'bottomright' })
      }
    }

    if (calculatedWidth < maxWidth){
      // overwrite the width if there's not enough room to display it
      this.tooltipRef.current.setAttribute('style', 'width:' + calculatedWidth + "px");
    }
  }

  handleWindowKeydown(e) {
    if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
      this.setState({
        isToggled: false
      })
    }
  }

  handleWindowClick(e) {
    if (this.state.isToggled) {
      if (!this.tooltipRef.current.contains(e.target)
        && !this.triggerRef.current.contains(e.target)) {
        this.setState({
          isToggled: false
        });
      }
    }
  }

  toggle() {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }))
  }

  render() {
    const {
      children,
      idString,
      triggerIconType,
      iconAdditionalClasses,
      additionalClasses,
      analyticsString,
      isDefaultOpen,
      id,
      ...other
    } = this.props;

    return (
      <span {...other} className='sprk-c-Tooltip__container' data-id={idString}>
        <button
          ref={this.triggerRef}
          onClick={this.toggle}
          onMouseOver={this.setPositioningClass}
          onFocus={this.setPositioningClass}
          className={classnames({
            'sprk-c-Tooltip__trigger': true,
            'sprk-c-Tooltip--toggled': this.state.isToggled,
          })}
          aria-expanded={this.state.isToggled ? 'true' : 'false'}
          aria-labelledby={id}
          data-analytics={analyticsString}
        >
          <SprkIcon iconName={triggerIconType} additionalClasses={iconAdditionalClasses} />
        </button>
        <span
          ref={this.tooltipRef}
          className={classnames(
            'sprk-c-Tooltip',
            additionalClasses,
            {
              'sprk-c-Tooltip--top-left': this.state.position === 'topleft',
              'sprk-c-Tooltip--top-right': this.state.position === 'topright',
              'sprk-c-Tooltip--bottom-left': this.state.position === 'bottomleft',
              'sprk-c-Tooltip--bottom-right': this.state.position === 'bottomright',
            }
          )}
          id={id}
        >
          {children}
        </span>
      </span>
    );
  }
}

SprkTooltip.defaultProps = {
  triggerIconType: 'question-filled',
  id: uniqueId('sprk_tooltip_'),
};

SprkTooltip.propTypes = {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * tooltip element.
   */
  additionalClasses: PropTypes.string,
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the trigger element.
   * Intended for an outside
   * library to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Expects a space separated string
   * of classes to be added to the
   * svg icon.
   */
  iconAdditionalClasses: PropTypes.string,
  /**
   * Optional: the unique ID to use for the tooltip element.
   * If an ID is not provided, a unique ID will be created
   * automatically.
   */
  id: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Whether or not the tooltip is toggled open when the component renders.
   */
  isDefaultOpen: PropTypes.bool,
  /**
   * The icon to use for the trigger element.
   */
  triggerIconType: PropTypes.string,
};

export default SprkTooltip;
