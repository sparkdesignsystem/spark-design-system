import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkLink = (props) => {
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
  } else if (TagName === 'a' && !href) {
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
  /** The children that will be rendered inside the link. */
  children: PropTypes.node,
  /**
   * Will cause the appropriate variant
   * type to render.
   */
  variant: PropTypes.oneOf([
    'base',
    'simple',
    'has-icon',
    'plain',
    'disabled',
    'unstyled',
  ]),
  /**
   * The value supplied will be assigned to
   * the 'data-id' attribute on the
   * component. This is intended to be used as
   * a selector for automated tools. This value
   * should be unique per page.
   */
  idString: PropTypes.string,
  /** The value supplied will be assigned to the 'data-analytics' attribute. */
  analyticsString: PropTypes.string,
  /**
   * A space-separated list of
   * classes that will be added
   * to the outermost element.
  */
  additionalClasses: PropTypes.string,
  /** The href value for the link. */
  href: PropTypes.string,
  /** The element that will be rendered. */
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** The event that will fire when the element is clicked. */
  onClick: PropTypes.func,
};

SprkLink.defaultProps = {
  variant: 'base',
};

export default SprkLink;
