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
    'sprk-b-TypeDisplayOne': variant === 'displayOne',
    'sprk-b-TypeDisplayTwo': variant === 'displayTwo',
    'sprk-b-TypeDisplayThree': variant === 'displayThree',
    'sprk-b-TypeDisplayFour': variant === 'displayFour',
    'sprk-b-TypeDisplayFive': variant === 'displayFive',
    'sprk-b-TypeDisplaySix': variant === 'displaySix',
    'sprk-b-TypeDisplaySeven': variant === 'displaySeven',
    'sprk-b-PageTitle': isPageTitle,
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
  );
};

SprkHeading.defaultProps = {
  /**
   * If `false`, the heading will not have Page Title styles.
   * If `true`, the heading will have Page Title stles.
   */
  isPageTitle: false,
  /**
   * Determines what element to render.
   */
  element: 'h1',
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
   * The heading style to render.
   * See [Typography](https://www.sparkdesignsystem.com/using-spark/foundations/typography)
   * for more information on the design styles.
   */
  variant: PropTypes.oneOf([
    'displayOne',
    'displayTwo',
    'displayThree',
    'displayFour',
    'displayFive',
    'displaySix',
    'displaySeven'
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