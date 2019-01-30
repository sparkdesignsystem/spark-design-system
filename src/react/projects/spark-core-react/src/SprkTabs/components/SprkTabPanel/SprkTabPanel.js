import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkTabPanel = (props) => {
  const { children, activeTabBtnId, tabBtnId, additionalClasses } = props;
  const classNames = classnames(
    'sprk-c-Tabs_content',
    {
      'sprk-u-Display--none': activeTabBtnId !== tabBtnId,
    },
    additionalClasses
  );
  return (
    <div
      className={classNames}
      role="tabpanel"
      tabIndex="0"
      id={`target-${index + 1}`}
      aria-labelledby={tabBtnId}>
      {children}
    </div>
  );
}

SprkTabPanel.propTypes = {
  // The tab's panel content
  children: PropTypes.node,
  /*
  * The currently active tab that is
  * passed in from SprkTabs (parent component)
  */
  activeTabBtnId: PropTypes.string,
  // A unique id for each tab button
  tabBtnId: PropTypes.string.isRequired,
  // A string of additional classes to be applied to the Tab
  additionalClasses: PropTypes.string
}

export default SprkTabPanel;
