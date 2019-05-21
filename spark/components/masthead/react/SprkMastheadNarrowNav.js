import React from 'react';
import PropTypes from 'prop-types';
import SprkMastheadAccordion from '../SprkMastheadAccordion/SprkMastheadAccordion';
import SprkMastheadSelector from '../SprkMastheadSelector/SprkMastheadSelector';

const SprkMastheadNarrowNav = ({
  idString,
  isOpen,
  links,
  selector,
  ...rest
}) => (
  <React.Fragment>
    {isOpen && (
      <nav
        className="sprk-c-Masthead__narrow-nav"
        role="navigation"
        data-id={idString}
        {...rest}
      >
        {selector.items && <SprkMastheadSelector isFlush choices={selector} />}
        <SprkMastheadAccordion links={links} />
      </nav>
    )}
  </React.Fragment>
);

SprkMastheadNarrowNav.propTypes = {
  idString: PropTypes.string,
  isOpen: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      text: PropTypes.string,
      subNavLinks: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        }),
      ),
    }),
  ).isRequired,
  selector: PropTypes.shape({
    choiceFunction: PropTypes.func,
    footer: PropTypes.node,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        information: PropTypes.string,
        text: PropTypes.string,
        title: PropTypes.string,
        value: PropTypes.string,
      }),
    ),
  }),
};

SprkMastheadNarrowNav.defaultProps = {
  idString: '',
  isOpen: false,
  selector: {},
};

export default SprkMastheadNarrowNav;
