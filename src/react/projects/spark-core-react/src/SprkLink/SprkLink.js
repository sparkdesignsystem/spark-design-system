import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkLink = (props) => {
  const classNames = classnames(
    'sprk-b-Link',
    props.additionalClasses, {
      'sprk-b-Link--simple': props.variant === 'simple',
      'sprk-b-Link--plain': props.variant === 'plain',
      'sprk-b-Link--disabled': props.variant === 'disabled',
      'sprk-b-Link--simple sprk-b-Link--has-icon': props.variant === 'has-icon',
    },
  );

  return (
    <a className={classNames} href={props.href} target={props.target}>
      {props.children}
    </a>
  );
}

SprkLink.propTypes = {
  // The children that will be rendered inside the link
  children: PropTypes.node,
  // The link variant that determines the class names
  variant: PropTypes.oneOf(['simple', 'has-icon', 'plain', 'disabled']),
  // The string to use for the href attribute
  href: PropTypes.string,
  // Determines where to display the linked URL ex. _blank
  target: PropTypes.string,
  // Any additional classes to add to the link
  additionalClasses: PropTypes.string
};

export default SprkLink;
