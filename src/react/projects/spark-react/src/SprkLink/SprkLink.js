import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkLink = props => {
  const {
    children,
    element,
    variant,
    additionalClasses,
    idString,
    analyticsString,
    onClick,
    href,
    ...other
  } = props;
  const TagName = element || 'a';
  const classNames = classnames(additionalClasses, {
    'sprk-b-Link': variant !== 'unstyled',
    'sprk-b-Link--simple': variant === 'simple',
    'sprk-b-Link--plain': variant === 'plain',
    'sprk-b-Link--disabled': variant === 'disabled',
    'sprk-b-Link--simple sprk-b-Link--has-icon': variant === 'has-icon',
  });

  let link;
  if (href) {
    link = href;
  } else if (TagName === 'a' || TagName === 'button') {
    link = '#';
  } else {
    link = undefined;
  }

  let clickEvent;
  function handleClick(e) {
    e.preventDefault();
  }
  if (onClick) {
    clickEvent = onClick;
  } else if (!onClick && link === '#') {
    clickEvent = handleClick;
  }

  return (
    <TagName
      className={classNames}
      data-analytics={analyticsString}
      data-id={idString}
      href={link}
      onClick={clickEvent}
      {...other}
    >
      {children}
    </TagName>
  );
};

SprkLink.propTypes = {
  // The children that will be rendered inside the link
  children: PropTypes.node,
  // The link variant that determines the class names
  variant: PropTypes.oneOf([
    'base',
    'simple',
    'has-icon',
    'plain',
    'disabled',
    'unstyled',
  ]),
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // The string to use for the data-analytics attribute
  analyticsString: PropTypes.string,
  // Any additional classes to add to the link
  additionalClasses: PropTypes.string,
  // Url passed
  href: PropTypes.string,
  // The element that will be rendered
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  // The event that will fire when the element is clicked
  onClick: PropTypes.func,
};

SprkLink.defaultProps = {
  variant: 'base',
};

export default SprkLink;
