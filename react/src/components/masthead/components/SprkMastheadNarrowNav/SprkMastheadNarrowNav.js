import React from 'react';
import PropTypes from 'prop-types';
import SprkMastheadAccordion from '../SprkMastheadAccordion/SprkMastheadAccordion';
import SprkMastheadSelector from '../SprkMastheadSelector/SprkMastheadSelector';

const SprkMastheadNarrowNav = ({
  idString,
  linkSelectionFunction,
  isOpen,
  links,
  selector,
  narrowNavId,
  ...rest
}) => (
  <>
    {isOpen && (
      <nav
        className="sprk-c-Masthead__nav-collapsible"
        role="navigation"
        data-id={idString}
        id={narrowNavId}
        {...rest}
      >
        {selector.items && <SprkMastheadSelector isFlush choices={selector} />}
        <SprkMastheadAccordion
          linkSelectionFunction={linkSelectionFunction}
          links={links}
        />
      </nav>
    )}
  </>
);

SprkMastheadNarrowNav.propTypes = {
  /**
   * Assigned to the `data-id` attribute
   * serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Assigned to the `id` attribute
   * on the nav element.
   */
  narrowNavId: PropTypes.string,
  /**
   * If `true`, will render the Narrow Navigation.
   */
  isOpen: PropTypes.bool,
  /**
   * Expects a function to be executed when a
   * user clicks a navigating link from the menu.
   */
  linkSelectionFunction: PropTypes.func,
  /**
   * Configuration to build the links inside the Narrow Navigation.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Determines if link renders as an anchor tag, or router link.
       */
      element: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.elementType,
      ]),
      /**
       * Text of the link
       */
      text: PropTypes.string,
      /**
       * Determines if the active styles
       * are applied to the link.
       */
      isActive: PropTypes.bool,
      /**
       * `id` of the link item
       */
      itemId: PropTypes.string,
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
          element: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
            PropTypes.elementType,
          ]),
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
        element: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.func,
          PropTypes.elementType,
        ]),
        /**
         * Additional text providing context for item.
         */
        information: PropTypes.string,
        // TODO: get rid of this -- it does nothing
        /// but add a nonvalid "text" attribute on the item
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
  linkSelectionFunction: () => {},
  idString: '',
  isOpen: false,
  selector: {},
};

export default SprkMastheadNarrowNav;
