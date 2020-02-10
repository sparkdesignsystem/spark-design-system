import React from 'react';
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

export default SprkHeading;