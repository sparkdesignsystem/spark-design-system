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
  spinningAriaLabel,
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
      aria-label={loading ? spinningAriaLabel : undefined}
      href={TagName !== 'button' ? href : undefined}
      {...rest}
    >
      {(loading &&
        <SprkSpinner lightness={variant === 'secondary' ? 'dark' : undefined}/>)
      || children}
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
   * serving as a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /** Content to render inside of the SprkButton */
  children: PropTypes.node,
  /**
   * Applies disabled style and the
   * disabled attribute to the element.
   */
  disabled: PropTypes.bool,
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
  ]),
  /**
   * Assigned to the `data-id` attribute serving as a
   * unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
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
   *  Determines the coresponding button style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * If an href is provided and no element is provided,
   * an anchor tag will be rendered.
   * The actual value is what is applied to the href attribute.
   */
  href: PropTypes.string,
};

SprkButton.defaultProps = {
  disabled: false,
  variant: 'primary',
  loading: false,
  spinningAriaLabel: 'Loading',
};

export default SprkButton;
