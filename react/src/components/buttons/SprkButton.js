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
   * Value assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
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
   * Value assigned
   * to the `data-id` attribute of the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  idString: PropTypes.string,
  /**
   * Will cause a spinner to be
   * rendered in place of the button content.
   */
  loading: PropTypes.bool,
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
};

export default SprkButton;
