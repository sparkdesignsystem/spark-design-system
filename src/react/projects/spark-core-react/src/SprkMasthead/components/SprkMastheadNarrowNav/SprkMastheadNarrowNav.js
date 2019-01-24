import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SprkMastheadAccordion from '../SprkMastheadAccordion/SprkMastheadAccordion';

class SprkMastheadNarrowNav extends Component {
  render() {
    const {idString, isOpen, links, ...rest} = this.props;
    return (
      <React.Fragment>
      { isOpen &&
        <nav
          className="sprk-c-Masthead__narrow-nav"
          role="navigation"
          data-id={idString}
          {...rest}>
          <SprkMastheadAccordion links={links}/>
        </nav>}
        </React.Fragment>
      );
  }
}

SprkMastheadNarrowNav.propTypes = {
  idString: PropTypes.string,
  isOpen: PropTypes.bool,
  links: PropTypes.array
};

SprkMastheadNarrowNav.defaultProps = {
  idString: '',
  isOpen: false,
  links: []
};

export default SprkMastheadNarrowNav;