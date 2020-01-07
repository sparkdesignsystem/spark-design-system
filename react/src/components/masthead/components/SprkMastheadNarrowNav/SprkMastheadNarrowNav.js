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
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  idString: PropTypes.string,
  /**
   * If `true`, will render the Narrow Navigation.
   */
  isOpen: PropTypes.bool,
  /**
   * Configuration to build the links inside the Narrow Navigation.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Determines if link renders as an anchor tag, or router link.
       */
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      /**
       * Text of the link
       */
      text: PropTypes.string,
      /**
       * Expects an array containing link objects.
       * Will be treated as a subnav to the link.
       */
      subNavLinks: PropTypes.arrayOf(
        PropTypes.shape({
          /** Text of subnav link */
          text: PropTypes.string,
          /**
           * Determines if link renders as an anchor tag, or router link.
           */
          element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        }),
      ),
    }),
  ).isRequired,
  /**
   * Expects a selector object that
   * represents choices to be supplied
   * to the selector in the wide viewport
   * version of the masthead.
   */
  selector: PropTypes.shape({
    /** The function that runs once a choice is made. */
    choiceFunction: PropTypes.func,
    /**
     * 	Expects a Component to render at the foot of the open selector.
     */
    footer: PropTypes.node,
    /**
     * Object that configures the items inside the selector
     */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Determines if link renders as an anchor tag, or router link.
         */
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        /**
         * Additional text providing context for item.
         */
        information: PropTypes.string,
        // TODO: get rid of this -- it does nothing but add a nonvalid "text" attribute on the item
        text: PropTypes.string,
        /**
         * The main headline of the item
         */
        title: PropTypes.string,
        /**
         * The value assigned for the selector
         */
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
