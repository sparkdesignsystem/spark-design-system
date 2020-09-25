import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SprkTabsButton extends Component {
  constructor(props) {
    super(props);
    this.tabBtnRef = createRef();
  }

  componentDidUpdate() {
    const { isFocused } = this.props;
    if (isFocused) {
      this.tabBtnRef.current.focus();
    }
  }

  render() {
    const {
      tabBtnChildren,
      tabBtnId,
      tabBtnAddClasses,
      ariaControls,
      ariaSelected,
      isActive,
      onTabClick,
      tabBtnDataId,
      tabBtnAnalytics,
    } = this.props;
    return (
      <button
        className={classnames('sprk-c-Tabs__button', tabBtnAddClasses, {
          'sprk-c-Tabs__button--active': isActive,
        })}
        role="tab"
        onClick={onTabClick}
        aria-controls={ariaControls}
        aria-selected={ariaSelected}
        id={tabBtnId}
        type="button"
        tabIndex={isActive ? undefined : '-1'}
        ref={this.tabBtnRef}
        data-id={tabBtnDataId}
        data-analytics={tabBtnAnalytics}
      >
        {tabBtnChildren}
      </button>
    );
  }
}

SprkTabsButton.defaultProps = {
  isActive: false,
  isFocused: false,
  ariaControls: '',
  tabBtnAddClasses: '',
  ariaSelected: false,
  onTabClick: () => {},
  tabBtnAnalytics: '',
  tabBtnDataId: '',
};

SprkTabsButton.propTypes = {
  /**
   * The content to render for the button.
   */
  tabBtnChildren: PropTypes.node.isRequired,
  /**
   * Value that determines
   * if button is active.
   */
  isActive: PropTypes.bool,
  /** A unique ID for each tab button. */
  tabBtnId: PropTypes.string.isRequired,
  /**
   * Determines if tab is focused.
   */
  isFocused: PropTypes.bool,
  /**
   * The aria ID to use for each tab panel so it corresponds to the button
   */
  ariaControls: PropTypes.string,
  /**
   * Expects a space separated string
   * of classes to be added to the
   * tab panel.
   */
  tabBtnAddClasses: PropTypes.string,
  /**
   * Toggles the aria selected state for accessibility.
   */
  ariaSelected: PropTypes.bool,
  // The click handler for the Tab
  /**
   * The function that runs upon  clicking a tab.
   */
  onTabClick: PropTypes.func,
  /**
   * The id used for the data-id attribute
   */
  tabBtnDataId: PropTypes.string,
  /**
   *
   The value used for the data-analytics attribute
   */
  tabBtnAnalytics: PropTypes.string,
};

export default SprkTabsButton;
