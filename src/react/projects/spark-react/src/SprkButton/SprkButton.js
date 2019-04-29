import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkSpinner from '../SprkSpinner/SprkSpinner';

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
  // classes to add to the class of the rendered element
  additionalClasses: PropTypes.string,
  // mapped to data-analytics
  analyticsString: PropTypes.string,
  // incoming children
  children: PropTypes.node,
  // whether to render a disabled button
  disabled: PropTypes.bool,
  // determines what element to render in the dom
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  // mapped to data-id for testing purposes
  idString: PropTypes.string,
  // if true, will render a spinner in the button instead of children
  loading: PropTypes.bool,
  // decides which button variant to render
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  // the url rendered if the href is provided
  href: PropTypes.string,
};

SprkButton.defaultProps = {
  disabled: false,
  variant: 'primary',
  loading: false,
};

export default SprkButton;
