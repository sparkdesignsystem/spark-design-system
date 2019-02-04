import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SprkTabsPanel extends Component {
  constructor(props) {
    super(props);
    this.tabPanelRef = createRef();
  }

  componentDidUpdate () {
     if ((this.props.isFocused !== undefined) && (this.props.isFocused === this.tabPanelRef.current.id)) {
      this.tabPanelRef.current.focus();
    }
  }

  render() {
    const {
      children,
      activeTabBtnId,
      tabBtnId,
      tabAriaId,
      additionalClasses
    } = this.props;
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
        ref={this.tabPanelRef}
        id={`target-${tabAriaId}`}
        aria-labelledby={tabBtnId}>
        {children}
      </div>
    );
  }
}

SprkTabsPanel.propTypes = {
  // The tab panel content
  children: PropTypes.node,
  /*
  * The currently active tab that is
  * passed in from SprkTabs (parent component)
  */
  activeTabBtnId: PropTypes.string,
  // A unique ID for each tab button
  tabBtnId: PropTypes.string,
  // State passed from parent that contains an id of a btn tab
  // when the corresponding panel should be focused
  isFocused: PropTypes.string,
  // The ID to use for each tab panel so it corresponds to the button
  tabAriaId: PropTypes.string,
  // A string of additional classes to be applied to the tab panel
  additionalClasses: PropTypes.string
}

export default SprkTabsPanel;
