import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SprkText = ({
  children,
  element,
  variant,
  idString,
  additionalClasses,
  ...other
}) => {
  const classNames = classnames(additionalClasses, {
    'sprk-b-TypeBodyOne': variant === 'bodyOne',
    'sprk-b-TypeBodyTwo': variant === 'bodyTwo',
    'sprk-b-TypeBodyThree': variant === 'bodyThree',
    'sprk-b-TypeBodyFour': variant === 'bodyFour',
  });

  const TagName = element;

  return (
    <TagName className={classNames} data-id={idString} {...other}>
      {children}
    </TagName>
  );
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
    PropTypes.elementType,
  ]),
  /**
   * The text style to render.
   * See [Typography](https://www.sparkdesignsystem.com/using-spark/foundations/typography)
   * for more information on the design styles.
   */
  variant: PropTypes.oneOf(['bodyOne', 'bodyTwo', 'bodyThree', 'bodyFour']),
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for
   * automated tools.
   */
  idString: PropTypes.string,
  /**
   * A space-separated string of classes to add to the outermost container
   * of the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkText;
