import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SprkTabsPanel extends Component {
  constructor(props) {
    super(props);
    this.tabPanelRef = createRef();
  }

  componentDidUpdate() {
    const { isFocused } = this.props;
    if ((isFocused !== undefined) && (isFocused === this.tabPanelRef.current.id)) {
      this.tabPanelRef.current.focus();
    }
  }

  render() {
    const {
      children,
      isActive,
      tabBtnId,
      ariaControls,
      tabPanelAdditionalClasses,
    } = this.props;

    return (
      <div
        className={classnames(
          'sprk-c-Tabs_content',
          {
            'sprk-u-Display--none': !isActive,
          },
          tabPanelAdditionalClasses,
        )}
        role="tabpanel"
        tabIndex="0"
        ref={this.tabPanelRef}
        id={ariaControls}
        aria-labelledby={tabBtnId}
      >
        {children}
      </div>
    );
  }
}

/* eslint-disable react/require-default-props */
SprkTabsPanel.propTypes = {
  // The tab panel content
  children: PropTypes.node,
  // Value supplied decides if button is active
  isActive: PropTypes.bool,
  // A unique ID for each tab button
  tabBtnId: PropTypes.string,
  // State passed from parent that contains an id of a btn tab
  // when the corresponding panel should be focused
  isFocused: PropTypes.string,
  // The aria ID to use for each tab panel so it corresponds to the button
  ariaControls: PropTypes.string,
  // A string of additional classes to be applied to the tab panel
  tabPanelAdditionalClasses: PropTypes.string,
};

export default SprkTabsPanel;
