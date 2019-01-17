import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkLink = (props) => {
  const { children, variant, href, target, additionalClasses, idString, ...other } = props;
  const classNames = classnames(
    'sprk-b-Link',
    additionalClasses, {
      'sprk-b-Link--simple': variant === 'simple',
      'sprk-b-Link--plain': variant === 'plain',
      'sprk-b-Link--disabled': variant === 'disabled',
      'sprk-b-Link--simple sprk-b-Link--has-icon': variant === 'has-icon',
    },
  );

  return (
    <a className={classNames} href={href} target={target} data-id={idString} {...other}>
      {children}
    </a>
  );
}

SprkLink.propTypes = {
  // The children that will be rendered inside the link
  children: PropTypes.node,
  // The link variant that determines the class names
  variant: PropTypes.oneOf(['base', 'simple', 'has-icon', 'plain', 'disabled']),
  // The string to use for the href attribute
  href: PropTypes.string,
  // The string to use for the data-id attribute ex.
  idString: PropTypes.string,
  // Determines where to display the linked URL ex. _blank
  target: PropTypes.string,
  // Any additional classes to add to the link
  additionalClasses: PropTypes.string
};

export default SprkLink;
