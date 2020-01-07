import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function SprkMastheadMenuIcon({
  additionalClasses,
  analyticsString,
  idString,
  isOpen,
  toggleNarrowNav,
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
      >
        <span className="sprk-u-ScreenReaderText">Toggle Navigation</span>
        <svg
          className={classNames(
            'sprk-c-Icon',
            'sprk-c-Icon--l',
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
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  additionalClasses: PropTypes.string,
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  analyticsString: PropTypes.string,
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
   * If `true`, the Menu will be open on first render.
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
