import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SprkIcon from '../../SprkMasthead';
import SprkButton from '../../../SprkButton/SprkButton';

class SprkMastheadNarrowNav extends Component {
  render() {
    const {links, ...rest} = this.props;
    return (
      <nav
        className="sprk-c-Masthead__narrow-nav sprk-u-Display--none"
        role="navigation"
        data-id="navigation-narrow-1">
      </nav>
    );
  }
}

SprkMastheadNarrowNav.propTypes = {};

export default SprkMastheadNarrowNav;