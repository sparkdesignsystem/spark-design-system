import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SprkText = ({
  children,
  element,
  variant,
  idString,
  isPageTitle,
  additionalClasses,
  ...other
}) => {

  const classNames = classnames(additionalClasses, {
    'sprk-b-TypeBodyOne': variant === 'one',
    'sprk-b-TypeBodyTwo': variant === 'two',
    'sprk-b-TypeBodyThree': variant === 'three',
    'sprk-b-TypeBodyFour': variant === 'four',
  });

  const TagName = element;

  return (
    <TagName
      className={classNames}
      data-id={idString}
      {...other}
    >
      {children}
    </TagName>
  )
};

SprkText.defaultProps = {
  element: 'p',
};

SprkText.propTypes = {
  /**
   * The incoming children.
   */
  children: PropTypes.node,
  /**
   * Determines what element to render.
   */
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.elementType
  ]),
  /**
   * The type of heading variant to render.
   */
  variant: PropTypes.oneOf([
    'one',
    'two',
    'three',
    'four',
  ]),
  /**
   * Assigned to the `data-id` attribute
   * serving as a unique selector for
   * automated tools.
   */
  idString: PropTypes.string,
  /**
   * A space-separated string of classes to add to the
   * outermost container of the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkText;