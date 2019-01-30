import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkTabsPanel from './components/SprkTabsPanel/SprkTabsPanel';

/**
* This component expects SprkTabsPanel children.
* It loops through each provided SprkTabsPanel
* and creates a tab button for each tab.
*/
class SprkTabs extends Component {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.updateAriaOrientation = this.updateAriaOrientation.bind(this);
    this.setDefaultActive = this.setDefaultActive.bind(this);
    this.tabsContainerRef = React.createRef();
    this.state = {};
  }

  /**
  * Find the tab that we want set by default
  * and update state with that tab's ID.
  */
  setDefaultActive() {
    const { children } = this.props;
    children.forEach(child => {
      if (child.props.isDefaultActive) {
        this.setState({isActive: child.props.tabBtnId});
      }
    });
  };

  updateAriaOrientation(width, element) {
    // Switch aria-orientation to vertical on mobile (based on _tabs.scss breakpoint)
    if (width <= 736) {
      element.current.setAttribute('aria-orientation', 'vertical');
    } else {
      element.current.setAttribute('aria-orientation', 'horizontal');
    }
  };

  /**
  * Immediately invole setDefaultActive()
  * when component is inserted into the tree
  * and update state with the default active tab's ID.
  * Update aria-orientation and listen for resizes for future updating.
  */
  componentDidMount(){
    this.setDefaultActive();
    this.updateAriaOrientation(window.innerWidth, this.tabsContainerRef);
    window.addEventListener('resize', () => {
      this.updateAriaOrientation(window.innerWidth, this.tabsContainerRef);
    });
  }

  /**
  * Get the ID of the clicked tab
  * and update the active tab ID
  * in component state.
  */
  handleTabClick(e) {
    const btnTabId = e.currentTarget.id;
    this.setState({isActive: btnTabId});
  }

  render() {
     const { children, idString, buttonChildren, additionalClasses, ...other } = this.props;
     return (
       <div
         className={classnames('sprk-c-Tabs', additionalClasses)}
         role="tablist"
         aria-orientation="horizontal"
         data-id={idString}
         ref={this.tabsContainerRef}
         {...other}>
         <div className="sprk-c-Tabs__buttons">
          {
            children.map((tab, index) => {
              const { buttonChildren, tabBtnIdString, tabBtnId, additionalClassesBtn } = tab.props;
              {/* Don't render a tab button for an element that is not a tab */}
              if (tab.type.name !== SprkTabsPanel.name) return;
              return (
                <button
                  className={classnames('sprk-c-Tabs__button', additionalClassesBtn, {'sprk-c-Tabs__button--active': this.state.isActive === tabBtnId})}
                  role="tab"
                  key={index}
                  aria-controls={`target-${index + 1}`}
                  aria-selected={this.state.isActive === tabBtnId ? true : false}
                  id={tabBtnId}
                  type="button"
                  data-id={tabBtnIdString}
                  onClick={this.handleTabClick}>
                  {buttonChildren}
                </button>
              )
            })
          }
        </div>

        {
          children.map((tab, index) => {
            const { tabBtnId, children, ...other } = tab.props;
            return (
              <SprkTabsPanel tabBtnId={tabBtnId} key={index} tabAriaId={index} activeTabBtnId={this.state.isActive} {...other}>
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
  // The children of the tabs panel
  children: PropTypes.node,
  // The data-id value for UI testing purposes
  idString: PropTypes.string,
  // The button text to be used for the tab
  button: PropTypes.node,
  // The id to use for the tab button
  tabBtnIdString: PropTypes.string,
  // If this is set, then that tab is active when component mounts
  isDefaultActive: PropTypes.bool,
  // A string of additional classes for the Tabs element
  additionalClasses: PropTypes.string,
  // A string of additional classes for the tab btutton element
  additionalClassesBtn: PropTypes.string,
  // // The string to use for the data-analytics attribute
  // analyticsString: PropTypes.string,
}

export default SprkTabs;
