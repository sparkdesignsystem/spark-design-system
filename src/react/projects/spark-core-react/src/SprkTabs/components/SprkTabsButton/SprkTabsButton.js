import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SprkTabsButton extends Component {
  constructor(props) {
    super(props);
    this.tabBtnRef = createRef();
  }

  componentDidUpdate() {
    const { isFocused, tabBtnId } = this.props;
    if ((isFocused !== undefined) && (isFocused === tabBtnId)) {
      this.tabBtnRef.current.focus();
    }
  }

  render() {
    const {
      tabBtnChildren,
      tabBtnId,
      tabBtnAdditionalClasses,
      ariaControls,
      ariaSelected,
      isActive,
      onTabClick,
      tabBtnIdString,
    } = this.props;
    return (
      <button
        className={classnames(
          'sprk-c-Tabs__button',
          tabBtnAdditionalClasses,
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
        data-id={tabBtnIdString}
      >
        {tabBtnChildren}
      </button>
    );
  }
}

SprkTabsButton.defaultProps = {
  // The tab panel content
  tabBtnChildren: undefined,
  // If this tabe should be active
  isActive: false,
  // State passed from parent that contains an id of a btn tab
  // when the corresponding panel should be focused
  isFocused: undefined,
  // The aria ID to use for each tab panel so it corresponds to the button
  ariaControls: undefined,
  // A string of additional classes to be applied to the tab panel
  tabBtnAdditionalClasses: undefined,

  ariaSelected: undefined,

  onTabClick: undefined,

  tabBtnIdString: undefined,
};

SprkTabsButton.propTypes = {
  // The content for the button
  tabBtnChildren: PropTypes.node,
  // Value supplied decides if button is active
  isActive: PropTypes.bool,
  // A unique ID for each tab button
  tabBtnId: PropTypes.string.isRequired,
  // State passed from parent that contains an id of a btn tab
  // when the corresponding panel should be focused
  isFocused: PropTypes.string,
  // The aria ID to use for each tab panel so it corresponds to the button
  ariaControls: PropTypes.string,
  // A string of additional classes to be applied to the tab panel
  tabBtnAdditionalClasses: PropTypes.string,

  ariaSelected: PropTypes.bool,

  onTabClick: PropTypes.func,

  tabBtnIdString: PropTypes.string,
};

export default SprkTabsButton;
