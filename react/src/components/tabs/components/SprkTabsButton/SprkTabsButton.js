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
        className={classnames(
          'sprk-c-Tabs__button',
          tabBtnAddClasses,
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
   * The content for the button.
   */
  tabBtnChildren: PropTypes.node.isRequired,
  /**
   * Value supplied decides if button is active.
   */
  isActive: PropTypes.bool,
  /** A unique ID for each tab button. */
  tabBtnId: PropTypes.string.isRequired,
  // State passed from parent that contains an id of a btn tab
  // when the corresponding panel should be focused
  isFocused: PropTypes.bool,
  // The aria ID to use for each tab panel so it corresponds to the button
  ariaControls: PropTypes.string,
  // A string of additional classes to be applied to the tab panel
  tabBtnAddClasses: PropTypes.string,
  // Determines what to supply to aria-selected
  ariaSelected: PropTypes.bool,
  // The click handler for the Tab
  onTabClick: PropTypes.func,
  // The id used for the data-id attribute
  tabBtnDataId: PropTypes.string,
  // The value used for the data-analytics attribute
  tabBtnAnalytics: PropTypes.string,
};

export default SprkTabsButton;
