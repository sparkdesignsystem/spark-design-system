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
   * Classes to add to the rendered element.
   */
  additionalClasses: PropTypes.string,
  /** Value for the data-analytics attribute. */
  analyticsString: PropTypes.string,
  /** Children */
  children: PropTypes.node,
  /** Boolen option to render a disabled button. */
  disabled: PropTypes.bool,
  /** Determines what type of element to render. */
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  /** Value for data-id for testing purposes. */
  idString: PropTypes.string,
  /** If true, will render a spinner in the button instead of children. */
  loading: PropTypes.bool,
  /** Decides which button variant to render. */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /** The URL rendered if the href is provided. */
  href: PropTypes.string,
};

SprkButton.defaultProps = {
  disabled: false,
  variant: 'primary',
  loading: false,
};

export default SprkButton;
