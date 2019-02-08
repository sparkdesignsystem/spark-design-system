import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SprkList = (props) => {
  const { element, children, variant, additionalClasses, idString, ...other  } = props;
  const classNames = classnames(
    'sprk-b-List',
    additionalClasses, {
      'sprk-b-List--indented': variant === 'indented',
      'sprk-b-List--bare': variant === 'bare',
    },
  )
  const TagName = element;
  return (
    <TagName className={classNames} data-id={idString} {...other}>
      {children}
    </TagName>
  );
}

SprkList.propTypes = {
  // The element that will be rendered - Required
  element: PropTypes.oneOf(['ol', 'ul']).isRequired,
  // The children that will be rendered inside the list
  children: PropTypes.node,
  // The list variant that determines the class names
  variant: PropTypes.oneOf(['indented', 'bare']),
  //The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the link
  additionalClasses: PropTypes.string
}

export default SprkList;