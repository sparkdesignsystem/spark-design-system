import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import SprkIcon from '../icons/SprkIcon';

class SprkTooltip extends Component {
  constructor(props) {
    super(props);
    const { isDefaultOpen } = props;

    this.state = {
      isToggled: isDefaultOpen || false,
    };

    this.toggle = this.toggle.bind(this);
    this.handleWindowKeydown = this.handleWindowKeydown.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);
    this.setPositioningClass = this.setPositioningClass.bind(this);

    this.triggerRef = React.createRef();
    this.tooltipRef = React.createRef();
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.handleWindowKeydown);
      window.addEventListener('click', this.handleWindowClick);
    }
    this.setPositioningClass();
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', this.handleWindowKeydown);
      window.removeEventListener('click', this.handleWindowClick);
    }
  }

  setPositioningClass() {
    if (typeof window !== 'undefined') {
      const trigger = this.triggerRef.current;

      const elemX = trigger.getBoundingClientRect().left;
      const elemY = trigger.getBoundingClientRect().top;

      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = document.documentElement.clientHeight;

      const maxWidth = 328;
      const triggerWidth = 16;
      const tooltipBorderWidth = 16;
      const tooltipSpacing = 16;

      let calculatedWidth;

      if (elemX > viewportWidth / 2) {
        calculatedWidth =
          elemX + triggerWidth + tooltipBorderWidth - tooltipSpacing;
        if (elemY > viewportHeight / 2) {
          this.setState({ position: 'topleft' });
        } else {
          this.setState({ position: 'bottomleft' });
        }
      } else {
        calculatedWidth =
          viewportWidth - elemX + tooltipBorderWidth - tooltipSpacing;
        if (elemY > viewportHeight / 2) {
          this.setState({ position: 'topright' });
        } else {
          this.setState({ position: 'bottomright' });
        }
      }

      if (calculatedWidth < maxWidth) {
        // overwrite the width if there's not enough room to display it
        this.tooltipRef.current.setAttribute(
          'style',
          `width:${calculatedWidth}px`,
        );
      }
    }
  }

  handleWindowKeydown(e) {
    if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
      const { closedEvent } = this.props;
      const { isToggled } = this.state;

      if (closedEvent && isToggled) {
        closedEvent();
      }
      this.setState({
        isToggled: false,
      });
    }
  }

  handleWindowClick(e) {
    const { isToggled } = this.state;
    const { closedEvent } = this.props;

    if (isToggled) {
      if (
        !this.tooltipRef.current.contains(e.target) &&
        !this.triggerRef.current.contains(e.target)
      ) {
        if (closedEvent) {
          closedEvent();
        }
        this.setState({
          isToggled: false,
        });
      }
    }
  }

  toggle() {
    const { openedEvent, closedEvent } = this.props;
    const { isToggled } = this.state;

    if (isToggled) {
      if (closedEvent) {
        closedEvent();
      }
      this.setState({
        isToggled: false,
      });
    } else {
      if (openedEvent) {
        openedEvent();
      }
      this.setState({
        isToggled: true,
      });
    }
  }

  render() {
    const {
      children,
      idString,
      triggerIconType,
      triggerIconName,
      iconAdditionalClasses,
      additionalClasses,
      verticalAlignment,
      analyticsString,
      isDefaultOpen,
      id,
      openedEvent,
      closedEvent,
      ...other
    } = this.props;

    const { isToggled, position } = this.state;

    // TODO - remove triggerIconType as part of Issue 1166
    let iconName = '';
    if (
      triggerIconType !== 'question-filled' &&
      triggerIconName === 'question-filled'
    ) {
      // Use the deprecated prop if it has a non-default value
      iconName = triggerIconType;
    } else {
      // otherwise use the new prop, whether or not it has a non-default value
      iconName = triggerIconName;
    }

    return (
      <span
        {...other}
        data-id={idString}
        className={classnames('sprk-c-Tooltip__container', {
          'sprk-c-Tooltip__container--top': verticalAlignment === 'top',
          'sprk-c-Tooltip__container--middle': verticalAlignment === 'middle',
          'sprk-c-Tooltip__container--bottom': verticalAlignment === 'bottom',
          'sprk-c-Tooltip__container--baseline':
            verticalAlignment === 'baseline',
        })}
      >
        <button
          type="button"
          ref={this.triggerRef}
          onClick={this.toggle}
          onMouseOver={this.setPositioningClass}
          onFocus={this.setPositioningClass}
          className={classnames('sprk-c-Tooltip__trigger', {
            'sprk-c-Tooltip--toggled': isToggled,
          })}
          aria-expanded={isToggled}
          aria-labelledby={id}
          data-analytics={analyticsString}
        >
          <SprkIcon
            iconName={iconName}
            additionalClasses={iconAdditionalClasses}
          />
        </button>
        <span
          ref={this.tooltipRef}
          aria-hidden="true"
          className={classnames('sprk-c-Tooltip', additionalClasses, {
            'sprk-c-Tooltip--top-left': position === 'topleft',
            'sprk-c-Tooltip--top-right': position === 'topright',
            'sprk-c-Tooltip--bottom-left': position === 'bottomleft',
            'sprk-c-Tooltip--bottom-right': position === 'bottomright',
          })}
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
  triggerIconName: 'question-filled',
  id: uniqueId('sprk_tooltip_'),
};

SprkTooltip.propTypes = {
  /** Content to render inside of the component. */
  children: PropTypes.node,
  /**
   * Expects a space separated string of classes to be added to the tooltip
   * element.
   */
  additionalClasses: PropTypes.string,
  /**
   * The value supplied will be assigned to the `data-analytics` attribute on
   * the trigger element. Intended for an outside library to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Vertical alignment of tooltip.
   */
  verticalAlignment: PropTypes.string,
  /**
   * Expects a space separated string of classes to be added to the svg icon.
   */
  iconAdditionalClasses: PropTypes.string,
  /**
   * ID will be placed on the tooltip element and used for aria-labelledby on
   * the trigger element.
   */
  id: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for
   * automated tools.
   */
  idString: PropTypes.string,
  /**
   * Whether or not the tooltip is toggled open when the component renders.
   */
  isDefaultOpen: PropTypes.bool,
  /**
   * Deprecated - Use `triggerIconName` instead. The icon to use for the
   * trigger element.
   */
  triggerIconType: PropTypes.string,
  /**
   * The icon to use for the trigger element.
   */
  triggerIconName: PropTypes.string,
  /**
   * A function to be called when the tooltip is toggled open.
   */
  openedEvent: PropTypes.func,
  /**
   * A function to be called when the tooltip is toggled closed.
   */
  closedEvent: PropTypes.func,
};

export default SprkTooltip;
