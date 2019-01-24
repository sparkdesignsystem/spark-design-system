import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SprkOrderedList = (props) => {
  const { children, variant, additionalClasses, idString, ...other  } = props;
  const classNames = classnames(
    'sprk-b-List',
    additionalClasses, {
      'sprk-b-List--indented': variant === 'indented'
    },
  )

  return (
    <ol className={classNames} data-id={idString} {...other}>
      {children}
    </ol>
  );
}

SprkOrderedList.propTypes = {
  // The children that will be rendered inside the list
  children: PropTypes.node,
  // The list variant that determines the class names
  variant: PropTypes.oneOf(['indented']),
  //The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the link
  additionalClasses: PropTypes.string
}

export default SprkOrderedList;