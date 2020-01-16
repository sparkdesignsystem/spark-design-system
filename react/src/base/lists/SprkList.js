import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SprkList = (props) => {
  const {
    element,
    children,
    variant,
    additionalClasses,
    idString,
    ...other
  } = props;
  const classNames = classnames('sprk-b-List', additionalClasses, {
    'sprk-b-List--indented': variant === 'indented',
    'sprk-b-List--bare': variant === 'bare',
  });
  const TagName = element;
  return (
    <TagName className={classNames} data-id={idString} {...other}>
      {children}
    </TagName>
  );
};

SprkList.defaultProps = {
  variant: undefined,
  idString: undefined,
  additionalClasses: undefined,
  children: undefined,
};

SprkList.propTypes = {
  /** Determines the type of list element is ordered or unordered. */
  element: PropTypes.oneOf(['ol', 'ul']).isRequired,
  /** The children that will be rendered inside the list. */
  children: PropTypes.node,
  /**
   * Will cause the appropriate variant
   * type to render.
   */
  variant: PropTypes.oneOf(['indented', 'bare']),
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkList;
