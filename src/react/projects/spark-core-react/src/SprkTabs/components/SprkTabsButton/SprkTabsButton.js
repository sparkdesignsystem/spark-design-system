import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SprkTabsButton extends Component {
  constructor(props) {
    super(props);
    this.tabBtnRef = createRef();
  }

  componentDidUpdate () {
    /*
    * If the user hits the tab key inside the parent Tabs component
    * isFocusedPanel state will be updated with the btn id of the
    * panel that should be focused. If no panel should be focused
    * isFocusedPanel will return undefined.
    */
     if (this.props.isFocusedBtn === this.props.tabBtnId) {
      this.tabBtnRef.current.focus();
    } else {
      console.log(this.props.isFocusedBtn, 'focused btn');
    }
  }

  render() {
    const {
      tabBtnChildren,
      tabBtnId,
      tabBtnAdditionalClasses,
      ariaControls,
      ariaSelected,
      isActive
    } = this.props;

    const classNames = classnames(
      'sprk-c-Tabs__button',
      tabBtnAdditionalClasses,
      {'sprk-c-Tabs__button--active': isActive}
    );

    {/* Don't render a tab button for an element that is not a SprkTabsPanel */}
    if (tab.type.name !== SprkTabsPanel.name) return;
    return (
      <button
        className={classNames}
        role="tab"
        aria-controls={ariaControls}
        aria-selected={ariaSelected}
        id={tabBtnId}
        type="button"
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
  isFocusedPanel: PropTypes.string,
  // The ID to use for each tab panel so it corresponds to the button
  tabAriaId: PropTypes.number,
  // A string of additional classes to be applied to the tab panel
  additionalClasses: PropTypes.string
}

export default SprkTabsButton;
