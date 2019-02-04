import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SprkMastheadAccordion from '../SprkMastheadAccordion/SprkMastheadAccordion';
import SprkMastheadSelector from '../SprkMastheadSelector/SprkMastheadSelector';

class SprkMastheadNarrowNav extends Component {
  render() {
    const {idString, isOpen, links, selector, ...rest} = this.props;
    return (
      <React.Fragment>
      { isOpen &&
        <nav
          className="sprk-c-Masthead__narrow-nav"
          role="navigation"
          data-id={idString}
          {...rest}>

          {selector &&
            <SprkMastheadSelector isFlush choices={selector}/>
          }
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