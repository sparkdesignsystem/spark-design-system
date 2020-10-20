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
      // TODO remove as part of Issue 3566
      tabPanelAddClasses,
      tabPanelAdditionalClasses = tabPanelAddClasses,
    } = this.props;

    return (
      <div
        className={classnames(
          'sprk-c-Tabs__content',
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
  /**
   * The content to render for the panel.
   */
  children: PropTypes.node,
  /**
   * Value that determines if panel is active.
   */
  isActive: PropTypes.bool,
  /**
   * A unique ID for each tab button.
   */
  tabBtnId: PropTypes.string,
  /**
   * The aria ID to use for each tab panel so it corresponds to the button.
   */
  ariaControls: PropTypes.string,
  /**
   * A string of additional classes to be applied to the tab panel.
   */
  tabPanelAdditionalClasses: PropTypes.string,
  // TODO remove as part of Issue 3566
  /**
   * Deprecated - use `tabPanelAdditionalClasses` instead. A string of
   * additional classes to be applied to the tab panel.
   */
  tabPanelAddClasses: PropTypes.string,
};

export default SprkTabsPanel;
