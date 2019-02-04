/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from 'lodash';
import SprkTabsPanel from './components/SprkTabsPanel/SprkTabsPanel';
import SprkTabsButton from './components/SprkTabsButton/SprkTabsButton';

/*
* This component expects SprkTabsPanel children.
* It loops through each provided SprkTabsPanel
* and creates a tab button for each tab.
*/
class SprkTabs extends Component {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleKeyboardEvent = this.handleKeyboardEvent.bind(this);
    this.updateAriaOrientation = this.updateAriaOrientation.bind(this);
    this.setDefaultActiveTab = this.setDefaultActiveTab.bind(this);
    this.getActiveTabIndex = this.getActiveTabIndex.bind(this);
    this.retreatTab = this.retreatTab.bind(this);
    this.advanceTab = this.advanceTab.bind(this);
    this.tabsContainerRef = React.createRef();
    const { children } = this.props;
    const btnIds = children.map(() => uniqueId('tab-'));
    this.state = { btnIds };
  }

  /*
  * Immediately invole setDefaultActiveTab()
  * when component is inserted into the tree
  * and update state with the ID of the tab that's active by default.
  * Update aria-orientation and listen for resizes for future updates.
  */
  componentDidMount() {
    const tabsBreakpoint = 736;
    const tabsContainer = this.tabsContainerRef;

    this.setDefaultActiveTab();
    this.updateAriaOrientation(window.innerWidth, tabsContainer, tabsBreakpoint);
    window.addEventListener('resize', () => {
      this.updateAriaOrientation(window.innerWidth, tabsContainer, tabsBreakpoint);
    });
  }

  /*
  * Find the child tab button that we want
  * active by default (isDefaultActive would be set on tab panel)
  * and update state with that tab button ID.
  */
  setDefaultActiveTab() {
    const { children } = this.props;
    children.forEach((child, index) => {
      if (child.props.isDefaultActive) {
        this.setState({ isActive: `tab-${index + 1}` });
      }
    });
  }

  /*
  * Get the index of the active tab
  * by finding it from our state array of btn ids
  */
  getActiveTabIndex() {
    const { isActive, btnIds } = this.state;
    let tabIndex;
    btnIds.forEach((id, index) => {
      if (id === isActive) {
        tabIndex = index;
      }
    });
    return tabIndex;
  }

  retreatTab() {
    const { btnIds } = this.state;
    if (this.getActiveTabIndex() - 1 === -1) {
      this.setState({
        isActive: btnIds[btnIds.length - 1],
        isFocused: btnIds[btnIds.length - 1],
      });
    } else {
      const newActiveTabIndex = this.getActiveTabIndex() - 1;
      this.setState({
        isActive: btnIds[newActiveTabIndex],
        isFocused: btnIds[newActiveTabIndex],
      });
    }
  }

  advanceTab() {
    const { btnIds } = this.state;
    if ((this.getActiveTabIndex() + 1) < btnIds.length) {
      const newActiveTabIndex = this.getActiveTabIndex() + 1;
      this.setState({
        isActive: btnIds[newActiveTabIndex],
        isFocused: btnIds[newActiveTabIndex],
      });
    } else {
      this.setState({
        isActive: btnIds[0],
        isFocused: btnIds[0],
      });
    }
  }

  /*
  * Tabs uses arrow keys to move from tab to tab.
  * Depending on the key pressed we need to
  * set a new active tab.
  */
  handleKeyboardEvent(e) {
    const { btnIds } = this.state;
    const keys = {
      end: 35,
      home: 36,
      left: 37,
      right: 39,
    };

    switch (e.keyCode) {
      case keys.left:
        this.retreatTab();
        break;
      case keys.right:
        this.advanceTab();
        break;
      case keys.home:
        this.setState({
          isActive: btnIds[0],
          isFocused: btnIds[0],
        });
        break;
      case keys.end:
        this.setState({
          isActive: btnIds[btnIds.length - 1],
          isFocused: btnIds[btnIds.length - 1],
        });
        break;
      default:
        break;
    }
  }

  /*
  * Switch aria-orientation to vertical on
  * narrow viewports (based on _tabs.scss breakpoint)
  */
  updateAriaOrientation(width, element, breakpoint) {
    this.width = width;
    this.element = element;
    this.breakpoint = breakpoint;
    if (this.width <= this.breakpoint) {
      element.current.setAttribute('aria-orientation', 'vertical');
    } else {
      element.current.setAttribute('aria-orientation', 'horizontal');
    }
  }

  /*
  * Get the ID of the clicked tab
  * and update the active tab ID
  * in component state.
  */
  handleTabClick(e) {
    const btnTabId = e.currentTarget.id;
    this.setState({ isActive: btnTabId });
  }

  render() {
    const {
      children,
      idString,
      additionalClasses,
      ...other
    } = this.props;

    /*
    * Loop through all the Tab Panels and
    * generate a Tab Button for each one.
    * Don't render a Tab Button
    * for an element that is not a SprkTabsPanel.
    */
    const buttons = children.map((tabPanel, index) => {
      const { tabBtnChildren, tabBtnAdditionalClasses } = tabPanel.props;
      const { isFocused, isActive, btnIds } = this.state;

      if (tabPanel.type.name !== SprkTabsPanel.name) return;

      return (
        <SprkTabsButton
          key={btnIds[index]}
          isFocused={isFocused}
          isActive={isActive === btnIds[index]}
          ariaControls={`target-${btnIds[index]}`}
          ariaSelected={isActive === btnIds[index]}
          tabBtnId={btnIds[index]}
          onTabClick={this.handleTabClick}
          tabBtnAdditionalClasses={tabBtnAdditionalClasses}
          tabBtnChildren={tabBtnChildren}
        />
      );
    });

    /*
    * Loop through all the Tab Panels and return
    * new SprkTabsPanels for each one with
    * their respective props. Don't render a Tab Panel
    * for an element that is not a SprkTabsPanel.
    */
    const panels = children.map((tabPanel, index) => {
      const {
        children,
        tabPanelAdditionalClasses,
        ...rest
      } = tabPanel.props;
      const { isActive, isFocused, btnIds } = this.state;

      if (tabPanel.type.name !== SprkTabsPanel.name) return;

      return (
        <SprkTabsPanel
          tabBtnId={btnIds[index]}
          key={btnIds[index]}
          tabAriaId={btnIds[index]}
          activeTabBtnId={isActive}
          isFocused={isFocused}
          additionalClasses={tabPanelAdditionalClasses}
          {...rest}
        >
          {children}
        </SprkTabsPanel>
      );
    });

    return (
      <div
        className={classnames('sprk-c-Tabs', additionalClasses)}
        role="tablist"
        aria-orientation="horizontal"
        data-id={idString}
        ref={this.tabsContainerRef}
        onKeyDown={this.handleKeyboardEvent}
        {...other}
      >
        <div className="sprk-c-Tabs__buttons">
          { buttons }
        </div>
        { panels }
      </div>
    );
  }
}

SprkTabs.propTypes = {
  // The children of the tabs component (SprkTabsPanel)
  children: PropTypes.node.isRequired,
  // The data-id value for UI testing purposes
  idString: PropTypes.string,
  // A string of additional classes for the Tabs component
  additionalClasses: PropTypes.string,
};

SprkTabs.defaultProps = {
  idString: undefined,
  additionalClasses: undefined,
};

export default SprkTabs;
