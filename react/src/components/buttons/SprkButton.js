import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkSpinner from '../spinners/SprkSpinner';

const SprkButton = ({
  additionalClasses,
  analyticsString,
  children,
  disabled,
  element,
  idString,
  loading,
  variant,
  href,
  ...rest
}) => {
  let TagName;
  if (href && !element) {
    TagName = 'a';
  } else if (element) {
    TagName = element;
  } else {
    TagName = 'button';
  }
  return (
    <TagName
      className={classnames(
        'sprk-c-Button',
        { 'sprk-c-Button--secondary': variant === 'secondary' },
        { 'sprk-c-Button--tertiary': variant === 'tertiary' },
        { 'sprk-is-Disabled': disabled },
        additionalClasses,
      )}
      role={element !== 'button' ? 'button' : undefined}
      data-id={idString}
      data-analytics={analyticsString}
      disabled={disabled}
      href={TagName !== 'button' ? href : undefined}
      {...rest}
    >
      {(loading && <SprkSpinner />) || children}
    </TagName>
  );
};

SprkButton.propTypes = {
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
  /** Children */
  children: PropTypes.node,
  /**
   * If `true`, the button styles will be added.
   */
  disabled: PropTypes.bool,
  /**
   * Determines what type of element to render.
   */
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This val ue should be unique
   * per page.
   */
  idString: PropTypes.string,
  /**
   * If `true`, will render a spinner
   * in the button instead of children.
   */
  loading: PropTypes.bool,
  /**
   * Decides which button variant to render.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * The `URL` rendered if the `href` is provided.
   */
  href: PropTypes.string,
};

SprkButton.defaultProps = {
  disabled: false,
  variant: 'primary',
  loading: false,
};

export default SprkButton;
