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
      tabBtnAdditionalClasses = tabBtnAddClasses,
      ariaControls,
      ariaSelected,
      isActive,
      onTabClick,
      tabBtnDataId,
      tabBtnAnalytics,
      tabBtnAnalyticsString = tabBtnAnalytics,
    } = this.props;
    return (
      <button
        className={classnames(
          'sprk-c-Tabs__button',
          tabBtnAdditionalClasses,
          // eslint-disable-next-line prettier/prettier
          { 'sprk-c-Tabs__button--active': isActive },
        )}
        role="tab"
        onClick={onTabClick}
        aria-controls={ariaControls}
        aria-selected={ariaSelected}
        id={tabBtnId}
        type="button"
        tabIndex={isActive ? undefined : '-1'}
        ref={this.tabBtnRef}
        data-id={tabBtnDataId}
        data-analytics={tabBtnAnalyticsString}
      >
        {tabBtnChildren}
      </button>
    );
  }
}

SprkTabsButton.defaultProps = {
  isActive: false,
  isFocused: false,
  ariaSelected: false,
  onTabClick: () => {},
};

SprkTabsButton.propTypes = {
  /**
   * The content to render for the button.
   */
  tabBtnChildren: PropTypes.node.isRequired,
  /**
   * Value that determines if button is active.
   */
  isActive: PropTypes.bool,
  /**
   * A unique ID for each tab button.
   */
  tabBtnId: PropTypes.string.isRequired,
  /**
   * Determines if tab is focused.
   */
  isFocused: PropTypes.bool,
  /**
   * The aria ID to use for each tab panel so it corresponds to the button
   */
  ariaControls: PropTypes.string,
  // TODO remove as part of Issue 3566
  /**
   * Deprecated - use `tabBtnAdditionalClasses` instead. Expects a space
   * separated string of classes to be added to the tab panel.
   */
  tabBtnAddClasses: PropTypes.string,
  /**
   * Expects a space separated string of classes to be added to the
   * tab panel.
   */
  tabBtnAdditionalClasses: PropTypes.string,
  /**
   * Toggles the aria selected state for accessibility.
   */
  ariaSelected: PropTypes.bool,
  /**
   * The function that runs upon clicking a tab.
   */
  onTabClick: PropTypes.func,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector
   * for automated tools.
   */
  tabBtnDataId: PropTypes.string,
  // TODO remove as part of Issue 3566
  /**
   * Deprecated - use `tabBtnAnalyticsString` instead. Assigned to the
   * `data-analytics` attribute serving as a unique selector for outside
   * libraries to capture data.
   */
  tabBtnAnalytics: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as a unique selector
   * for outside libraries to capture data.
   */
  tabBtnAnalyticsString: PropTypes.string,
};

export default SprkTabsButton;
