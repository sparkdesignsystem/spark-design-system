import React, { Component } from 'react';
import PropTypes from 'prop-types';

//has buttons that each need an id that corresponds to its content

// when a tab button is clicked
// if its the active tab, do nothing
// if its an inactive tab
  // OLD: remove the active tab button class from the previoulsy active tab button
  // OLD: add the sprk-u-Display--none class to the associated old content
  // NEW: remove the sprk-u-Display--none from new content to show it
  // New: the tab button needs to get active styles sprk-c-Tabs__button--active

class SprkTabbedNav extends Component {
  constructor(props) {
    super(props);
    // bind this for custom methods here
  }

  render() {
    return (
      <div>
        {this.props.foo}
      </div>
    );
  }
}

SprkTabbedNav.propTypes = {
  foo: PropTypes.string
}

export default SprkTabbedNav;
