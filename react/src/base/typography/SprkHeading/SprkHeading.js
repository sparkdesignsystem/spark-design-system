import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkHeading = ({
  children,
  element,
  variant,
  idString,
  isPageTitle,
  additionalClasses,
  ...other
}) => {
  const classNames = classnames(additionalClasses, {
    'sprk-b-TypeDisplayOne': variant === 'one',
    'sprk-b-TypeDisplayTwo': variant === 'two',
    'sprk-b-TypeDisplayThree': variant === 'three',
    'sprk-b-TypeDisplayFour': variant === 'four',
    'sprk-b-TypeDisplayFive': variant === 'five',
    'sprk-b-TypeDisplaySix': variant === 'six',
    'sprk-b-TypeDisplaySeven': variant === 'seven',
    'sprk-b-PageTitle': isPageTitle,
  });

  const TagName = element || 'h1';

  return (
    <TagName
      className={classNames}
      data-id={idString}
      {...other}
    >
      {children}
    </TagName>
  );
};

SprkHeading.defaultProps = {
  /**
   * If `false`, the heading will not have Page Title styles.
   * If `true`, the heading will have Page Title stles.
   */
  isPageTitle: false,
}

SprkHeading.propTypes = {
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
    'five',
    'six',
    'seven'
  ]),
  /**
   * Assigned to the `data-id` attribute
   * serving as a unique selector for
   * automated tools.
   */
  idString: PropTypes.string,
  /**
   * If `false`, the heading will not have Page Title styles.
   * If `true`, the heading will have Page Title stles.
   */
  isPageTitle: PropTypes.bool,
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkHeading;