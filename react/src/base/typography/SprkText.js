import React from 'react';
import classnames from 'classnames';

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

export default SprkText;