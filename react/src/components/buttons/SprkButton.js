import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkSpinner from '../spinners/SprkSpinner';

// TODO: Remove loading, spinningAriaLabel and disabled on next release #3557
const SprkButton = ({
  additionalClasses,
  analyticsString,
  children,
  disabled,
  isDisabled = disabled,
  element,
  idString,
  loading,
  isSpinning,
  variant,
  href,
  spinningAriaLabel,
  forwardedRef,
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

  // TODO: Remove loader prop and
  // internal spinner from button on next release #3557
  let spinnerVariant;
  if (isSpinning || loading) {
    if (variant === 'secondary') {
      spinnerVariant = 'primary';
    }
    if (variant === 'tertiary') {
      spinnerVariant = 'secondary';
    }
  }
  return (
    <TagName
      className={classnames(
        'sprk-c-Button',
        { 'sprk-c-Button--secondary': variant === 'secondary' },
        { 'sprk-c-Button--tertiary': variant === 'tertiary' },
        { 'sprk-is-Disabled': isDisabled },
        { 'sprk-c-Button--has-spinner': isSpinning },
        additionalClasses,
      )}
      role={TagName !== 'button' ? 'button' : undefined}
      data-id={idString}
      data-analytics={analyticsString}
      // TODO: Remove disabled prop on next release #3557
      disabled={TagName !== 'a' ? isDisabled || isSpinning : undefined}
      href={TagName !== 'button' ? href : undefined}
      ref={forwardedRef}
      {...rest}
      // TODO: Remove loading on next release #3557
      {...((loading || isSpinning) && { 'aria-label': spinningAriaLabel })}
      {...(isSpinning && { 'aria-live': 'polite' })}
    >
      {/* TODO: Remove anything related to spinner from button
      on next release #3557 */}
      {(loading && <SprkSpinner variant={spinnerVariant} />) || children}
    </TagName>
  );
};

SprkButton.propTypes = {
  /**
   * A space-separated string of classes to
   * add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute
   * serving as a unique selector for outside
   * libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /** Content to render inside of the SprkButton */
  children: PropTypes.node,
  // TODO: Remove disabled on next release #3557
  /**
   * Deprecated: Use `isDisabled` instead. Applies disabled style and the
   * disabled attribute to the element.
   */
  disabled: PropTypes.bool,
  /**
   * Applies disabled style and the
   * disabled attribute to the element.
   */
  isDisabled: PropTypes.bool,
  /**
   * Determines what element is rendered.
   * If an href is provided and an element is not,
   * an anchor tag will be rendered.
   * If no href or element is provided,
   * it will default to a button.
   */
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]),
  /**
   * Assigned to the `data-id` attribute serving as a
   * unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Adds the necessary attributes for accessible loading state.
   */
  isSpinning: PropTypes.bool,
  // TODO: Remove loading on next release #3557
  /**
   * Deprecated for more of a compositional layout.
   * Render spinner conditionally inside of button instead.
   * Will cause a spinner to be
   * rendered in place of the button content.
   */
  loading: PropTypes.bool,
  /**
   * Optional string value that is
   * set for the aria-label when `loading` is `true`.
   */
  spinningAriaLabel: PropTypes.string,
  /**
   *  Determines the corresponding button style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * If an href is provided and no element is provided,
   * an anchor tag will be rendered.
   * The actual value is what is applied to the href attribute.
   */
  href: PropTypes.string,
  /**
   * A ref passed in will be attached to the button component.
   */
  forwardedRef: PropTypes.shape(),
};

// TODO: Remove disabled and spinningAriaLabel on next release #3557
SprkButton.defaultProps = {
  variant: 'primary',
  spinningAriaLabel: 'Loading',
};

export default SprkButton;
