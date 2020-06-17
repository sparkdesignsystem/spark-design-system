import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkIcon from '../icons/SprkIcon';
import uniqueId from 'lodash/uniqueId';

class SprkTooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: this.props.isDefaultToggled || false
    }

    this.toggle = this.toggle.bind(this);
    this.handleWindowKeydown = this.handleWindowKeydown.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);

    this.triggerRef = React.createRef();
    this.tooltipRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleWindowKeydown);
    window.addEventListener('click', this.handleWindowClick);

    // this.triggerRef.current.addEventListener('mouseover', (e) => {
    //   this.setPositioningClass();
    // });

    // this.triggerRef.current.addEventListener('focus', (e) => {
    //   this.setPositioningClass();
    // });

    this.setPositioningClass();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleWindowKeydown);
    window.removeEventListener('click', this.handleWindowClick);
  }

  setPositioningClass() {
    console.log('pos');
    var trigger = this.triggerRef.current;
    var tooltip = this.tooltipRef.current;

    const elemX = trigger.getBoundingClientRect().left;
    const elemY = trigger.getBoundingClientRect().top;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    tooltip.classList.remove('sprk-c-Tooltip--top-left')
    tooltip.classList.remove('sprk-c-Tooltip--top-right')
    tooltip.classList.remove('sprk-c-Tooltip--bottom-left')
    tooltip.classList.remove('sprk-c-Tooltip--bottom-right')

    if (elemX > viewportWidth / 2) {
      if (elemY > viewportHeight / 2) {
        tooltip.classList.add('sprk-c-Tooltip--top-left');
      } else {
        tooltip.classList.add('sprk-c-Tooltip--bottom-left');
      }
    } else {
      if (elemY > viewportHeight / 2) {
        tooltip.classList.add('sprk-c-Tooltip--top-right');
      } else {
        tooltip.classList.add('sprk-c-Tooltip--bottom-right');
      }
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
      console.log(this.tooltipRef.current)
      if (
        !(this.tooltipRef.current.contains(e.target) ||
          this.triggerRef.current.contains(e.target))) {
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
      isDefaultToggled,
      id,
      ...other
    } = this.props;

    return (
      <span {...other} className='sprk-c-Tooltip__container'>
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
          data-id={idString}
        >
          <SprkIcon iconName={triggerIconType} additionalClasses={iconAdditionalClasses} />
        </button>
        <span
          ref={this.tooltipRef}
          className={classnames(
            'sprk-c-Tooltip',
            additionalClasses
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
  isDefaultToggled: PropTypes.bool,
  /**
   * The icon to use for the trigger element.
   */
  triggerIconType: PropTypes.string,
};

export default SprkTooltip;
