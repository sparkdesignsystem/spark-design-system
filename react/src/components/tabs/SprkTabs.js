/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkTabsPanel from './components/SprkTabsPanel/SprkTabsPanel';
import SprkTabsButton from './components/SprkTabsButton/SprkTabsButton';

/*
 * This component expects SprkTabsPanel children.
 * It loops through each provided SprkTabsPanel
 * and creates a SprkTabsButton for each tab.
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
    const btnIds = children.map((_, index) => `tab-${index}`);
    this.state = { btnIds };
  }

  /*
   * Immediately invoke setDefaultActiveTab()
   * when component is inserted into the tree
   * and update state with the ID of the tab that's active by default.
   * Update aria-orientation and listen for resizes for future updates.
   */
  componentDidMount() {
    const { breakpoint } = this.props;

    this.setDefaultActiveTab();
    this.updateAriaOrientation(window.innerWidth, breakpoint);
    window.addEventListener('resize', () => {
      this.updateAriaOrientation(window.innerWidth, breakpoint);
    });
  }

  /*
   * Find the SprkTabsButton that we want
   * active by default (isDefaultActive would be set on tab panel)
   * and update state with that tab button ID.
   */
  setDefaultActiveTab() {
    const { children } = this.props;
    const { btnIds } = this.state;
    let counter = 0;

    children.forEach((child, index) => {
      if (child.props.isDefaultActive) {
        this.setState({ isActive: btnIds[index] });
      } else {
        counter += 1;
      }

      if (counter === children.length) {
        this.setState({ isActive: btnIds[0] });
      }
    });
  }

  /*
   * Get the index of the active tab
   * by finding it from our state array of btn IDs.
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
    if (this.getActiveTabIndex() + 1 < btnIds.length) {
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
   * narrow viewports (based on _tabs.scss breakpoint).
   */
  updateAriaOrientation(width, breakpoint) {
    const tabsContainer = this.tabsContainerRef;

    if (width <= breakpoint) {
      tabsContainer.current.setAttribute('aria-orientation', 'vertical');
    } else {
      tabsContainer.current.setAttribute('aria-orientation', 'horizontal');
    }
  }

  /*
   * Get the ID of the clicked tab
   * and update state with the active tab ID.
   */
  handleTabClick(e) {
    const btnTabId = e.currentTarget.id;
    this.setState({ isActive: btnTabId });
  }

  render() {
    const { children, idString, additionalClasses, ...other } = this.props;

    const buttons = [];
    const panels = [];

    /*
     * Loop through all the SprkTabsPanels and
     * generate a SprkTabsButton for each one.
     * Don't render a SprkTabsButton
     * for an element that is not a SprkTabsPanel.
     */
    const generateTabs = () => {
      children.forEach((tabPanel, index) => {
        const {
          children: tabPanelChildren,
          tabPanelAddClasses,
          tabBtnChildren,
          tabBtnAddClasses,
          tabBtnDataId,
          tabBtnAnalytics,
          tabBtnClickFunc,
        } = tabPanel.props;

        const { isFocused, isActive, btnIds } = this.state;

        if (tabPanel.type.name !== SprkTabsPanel.name) return;

        buttons.push(
          <SprkTabsButton
            key={btnIds[index]}
            isFocused={isFocused === btnIds[index]}
            isActive={isActive === btnIds[index]}
            ariaControls={`target-${btnIds[index]}`}
            ariaSelected={isActive === btnIds[index]}
            tabBtnId={btnIds[index]}
            onTabClick={(e) => {
              this.handleTabClick(e);
              if (tabBtnClickFunc) {
                tabBtnClickFunc();
              }
            }}
            tabBtnAddClasses={tabBtnAddClasses}
            tabBtnChildren={tabBtnChildren}
            tabBtnDataId={tabBtnDataId}
            tabBtnAnalytics={tabBtnAnalytics}
          />,
        );

        panels.push(
          <SprkTabsPanel
            tabBtnId={btnIds[index]}
            key={btnIds[index]}
            ariaControls={`target-${btnIds[index]}`}
            isActive={isActive === btnIds[index]}
            tabPanelAddClasses={tabPanelAddClasses}
          >
            {tabPanelChildren}
          </SprkTabsPanel>,
        );
      });
    };

    generateTabs();

    return (
      <div
        className={classnames('sprk-c-Tabs', additionalClasses)}
        aria-orientation="horizontal"
        data-id={idString}
        ref={this.tabsContainerRef}
        {...other}
      >
        {/* eslint-disable jsx-a11y/interactive-supports-focus */}
        <div
          onKeyDown={this.handleKeyboardEvent}
          className="sprk-c-Tabs__buttons"
          role="tablist"
        >
          {buttons}
        </div>
        {panels}
      </div>
    );
  }
}

SprkTabs.defaultProps = {
  breakpoint: 736,
};

SprkTabs.propTypes = {
  /**
   * The content to render inside of SprkTabsPanel
   */
  children: PropTypes.node.isRequired,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for
   * automated tools.
   */
  idString: PropTypes.string,
  /**
   * A space-separated string of classes to add to the outermost container of
   * the component.
   */
  additionalClasses: PropTypes.string,
  /** Breakpoint for the aria-orientation switch from y to x. */
  breakpoint: PropTypes.number,
};

export default SprkTabs;
