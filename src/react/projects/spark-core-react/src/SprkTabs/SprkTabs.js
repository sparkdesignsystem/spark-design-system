import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkTabPanel from './components/SprkTab/SprkTab';

/**
* This component expects SprkTab children.
* It loops through each provided SprkTab
* and creates a tab button for each tab.
*/
class SprkTabs extends Component {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.setDefaultActive = this.setDefaultActive.bind(this);
    this.state = {};
  }

  /**
  * Find the tab set to be active by default
  * and update state with that tab's id.
  */
  setDefaultActive() {
    const { children } = this.props;
    children.forEach(child => {
      if (child.props.isDefaultActive) {
        this.setState({isActive: child.props.id});
      }
    });
  };

  /**
  * Immediately invole setDefaultActive()
  * when component is inserted into the tree
  * and update state with default active tab ID.
  */
  componentDidMount(){
    this.setDefaultActive();
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
     const { children, idString, button, additionalClasses, ...other } = this.props;
     return (
       <div
         className={classnames('sprk-c-Tabs', additionalClasses)}
         role="tablist"
         aria-orientation="horizontal"
         data-id={idString}
         {...other}>
         <div className="sprk-c-Tabs__buttons">
          {
            children.map((tab, index) => {
              const { button, tabBtnIdString, tabBtnId, additionalClassesBtn } = tab.props;
              {/* Dont render a tab button for an element that is not a tab */}
              if (tab.type.name !== 'SprkTabPanel') return;
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
                  {button}
                </button>
              )
            })
          }
        </div>

        {
          children.map((tab, index) => {
            const { tabBtnId, children, ...other } = tab.props;
            return (
              <SprkTabPanel tabBtnId={tabBtnId} key={index} activeTabBtnId={this.state.isActive} {...other}>
                {children}
              </SprkTabPanel>
            )
          })
        }
       </div>
     )
    }

}

SprkTabs.propTypes = {
  // The tab components
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
