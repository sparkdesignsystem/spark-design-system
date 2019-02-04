import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SprkTabsButton extends Component {
  constructor(props) {
    super(props);
    this.tabBtnRef = createRef();
  }

  componentDidUpdate () {
    if ((this.props.isFocused !== undefined) && (this.props.isFocused === this.props.tabBtnId)) {
      this.tabBtnRef.current.focus();
      console.log('if ran!!!!');
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
      onTabClick
    } = this.props;

    return (
      <button
        className={classnames(
          'sprk-c-Tabs__button',
          tabBtnAdditionalClasses,
          {'sprk-c-Tabs__button--active': isActive}
        )}
        role="tab"
        onClick={onTabClick}
        aria-controls={ariaControls}
        aria-selected={ariaSelected}
        id={tabBtnId}
        type="button"
        tabIndex={isActive ? undefined : '-1'}
        ref={this.tabBtnRef}
        data-id={tabBtnId}>
        {tabBtnChildren}
      </button>
    );
  }
}

SprkTabsButton.propTypes = {
  // The tab panel content
  children: PropTypes.node,
  /*
  * The currently active tab that is
  * passed in from SprkTabs (parent component)
  */
  activeTabBtnId: PropTypes.string,
  // A unique ID for each tab button
  tabBtnId: PropTypes.string.isRequired,
  // State passed from parent that contains an id of a btn tab
  // when the corresponding panel should be focused
  isFocused: PropTypes.string,
  // The ID to use for each tab panel so it corresponds to the button
  tabAriaId: PropTypes.number,
  // A string of additional classes to be applied to the tab panel
  additionalClasses: PropTypes.string
}

export default SprkTabsButton;
