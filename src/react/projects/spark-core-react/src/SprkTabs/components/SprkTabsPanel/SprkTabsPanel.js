import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SprkTabsPanel extends Component {
  render() {
    const {
      children,
      isActive,
      tabBtnId,
      ariaControls,
      tabPanelAddClasses,
    } = this.props;

    return (
      <div
        className={classnames(
          'sprk-c-Tabs__content',
          {
            'sprk-u-Display--none': !isActive,
          },
          tabPanelAddClasses,
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
  // The aria ID to use for each tab panel so it corresponds to the button
  ariaControls: PropTypes.string,
  // A string of additional classes to be applied to the tab panel
  tabPanelAddClasses: PropTypes.string,
};

export default SprkTabsPanel;
