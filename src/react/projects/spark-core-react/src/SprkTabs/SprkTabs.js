import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
    this.setDefaultActive = this.setDefaultActive.bind(this);
    this.tabsContainerRef = React.createRef();
    this.state = {};
  }

  /*
  * Find the child tab button that we want
  * active by default (isDefaultActive would be set on tab panel)
  * and update state with that tab button ID.
  */
  setDefaultActive() {
    const { children } = this.props;
    children.forEach(child => {
      if (child.props.isDefaultActive) {
        this.setState({isActive: child.props.tabBtnId});
      }
    });
  };

  /*
  * Tabs uses arrow keys to move from tab to tab.
  * Depending on the key pressed we need to
  * set a new active tab.
  */
 handleKeyboardEvent(e) {
  const keys = {
    end: 35,
    home: 36,
    left: 37,
    right: 39,
    tab: 9,
  };
  // get currently active tab
  const activeTab = this.state.isActive;
  const { children } = this.props;

  if (e.keyCode === keys.left) {
    console.log('need to go back');
  } else if (e.keyCode === keys.right) {
    console.log('need to go forward');
    this.setState({
      isActive: activeTab,
      isFocusedBtn: activeTab
    })
  } else if (e.keyCode === keys.tab) {
    // Prevent default tabbing
    e.preventDefault();
    console.log(this.tabBtnRef);
    // Update isFocusedPanel state with the id of the active tab btn
    // so child panel component can check if it should be
    // focused and focus when tab key is hit
    this.setState({isFocusedPanel: activeTab})
  } else if (e.keyCode === keys.home) {
    console.log('need to something for home');
  } else if (e.keyCode === keys.end) {
    console.log('need some for end');
  }
};

  /*
  * Switch aria-orientation to vertical on narrow viewports (based on _tabs.scss breakpoint)
  */
  updateAriaOrientation(width, element, breakpoint) {
    if (width <= breakpoint) {
      element.current.setAttribute('aria-orientation', 'vertical');
    } else {
      element.current.setAttribute('aria-orientation', 'horizontal');
    }
  };

  /*
  * Immediately invole setDefaultActive()
  * when component is inserted into the tree
  * and update state with the ID of the tab that's active by default.
  * Update aria-orientation and listen for resizes for future updating.
  */
  componentDidMount() {
    const tabsBreakpoint = 736;
    const tabsContainer = this.tabsContainerRef;

    this.setDefaultActive();
    this.updateAriaOrientation(window.innerWidth, tabsContainer, tabsBreakpoint);
    window.addEventListener('resize', () => {
      this.updateAriaOrientation(window.innerWidth, tabsContainer, tabsBreakpoint);
    });
  }

  /*
  * Get the ID of the clicked tab
  * and update the active tab ID
  * in component state.
  */
  handleTabClick(e) {
    const btnTabId = e.currentTarget.id;
    this.setState({isActive: btnTabId});
  }

  render() {
     const { children, idString, tabBtnChildren, additionalClasses, ...other } = this.props;
     return (
       <div
         className={classnames('sprk-c-Tabs', additionalClasses)}
         role="tablist"
         aria-orientation="horizontal"
         data-id={idString}
         ref={this.tabsContainerRef}
         onKeyDown={this.handleKeyboardEvent}
         {...other}>
         <div className="sprk-c-Tabs__buttons">
          {
            children.map((tabPanel, index) => {
              console.log(tabPanel);
              const { tabBtnChildren, tabBtnId, tabBtnAdditionalClasses } = tabPanel.props;
              {/* Only render a SprkTabsButton for SprkTabsPanel (ex. Don't render for a <p>) */}
              if (tabPanel.type.name !== SprkTabsPanel.name) return;
              return (
                <SprkTabsButton
                  key={index}
                  isFocusedBtn={this.state.isFocusedBtn}
                  isActive={this.state.isActive === tabBtnId}
                  ariaControls={`target-${index + 1}`}
                  ariaSelected={this.state.isActive === tabBtnId ? true : false}
                  tabBtnId={tabBtnId}
                  onClick={this.handleTabClick}
                  tabBtnAdditionalClasses={tabBtnAdditionalClasses}>
                  {tabBtnChildren}
                </SprkTabsButton>
              )
            })
          }
        </div>

        {
          children.map((tabPanel, index) => {
            const { tabBtnId, children, additionalClasses, ...other } = tabPanel.props;
            // console.log(this.children.ref);
            {/* Don't render a tab panel for an element that is not a SprkTabsPanel */}
            if (tabPanel.type.name !== SprkTabsPanel.name) return;
            return (
              <SprkTabsPanel
                tabBtnId={tabBtnId}
                key={index}
                tabAriaId={index}
                activeTabBtnId={this.state.isActive}
                isFocusedPanel={this.state.isFocusedPanel}
                additionalClasses={additionalClasses}
                {...other}>
                {children}
              </SprkTabsPanel>
            )
          })
        }
       </div>
     )
    }

}

SprkTabs.propTypes = {
  // The children of the tabs component (SprkTabsPanel)
  children: PropTypes.node,
  // The data-id value for UI testing purposes
  idString: PropTypes.string,
  // A string of additional classes for the Tabs component
  additionalClasses: PropTypes.string,
}

export default SprkTabs;
