import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function SprkMastheadMenuIcon({
  additionalClasses,
  analyticsString,
  idString,
  isOpen,
  toggleNarrowNav,
  menuAriaControls,
}) {
  return (
    <div
      className={classNames(
        'sprk-c-Masthead__menu sprk-o-Stack__item sprk-o-Stack__item--center-column@xxs',
        additionalClasses,
      )}
      data-analytics={analyticsString}
      data-id={idString}
    >
      <button
        onClick={toggleNarrowNav}
        className="sprk-c-Menu"
        type="button"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls={menuAriaControls}
      >
        <span className="sprk-u-ScreenReaderText">Toggle Navigation</span>
        <svg
          className={classNames(
            'sprk-c-Icon',
            'sprk-c-Menu__icon',
            { 'sprk-c-Menu__icon--open': isOpen },
          )}
          aria-hidden="true"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              className="sprk-c-Menu__line sprk-c-Menu__line--two"
              d="m8 32h48"
            />
            <path
              className="sprk-c-Menu__line sprk-c-Menu__line--one"
              d="m8 18.68h48"
            />
            <path
              className="sprk-c-Menu__line sprk-c-Menu__line--three"
              d="m8 45.32h48"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}

SprkMastheadMenuIcon.propTypes = {
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Determines if the Masthead Menu is open.
   */
  isOpen: PropTypes.bool,
  /**
   * Function to run when the menu icon is clicked.
   */
  toggleNarrowNav: PropTypes.func.isRequired,
};

SprkMastheadMenuIcon.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  idString: '',
  isOpen: false,
};

export default SprkMastheadMenuIcon;
