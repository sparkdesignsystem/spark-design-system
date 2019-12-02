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
  /** The element that will be rendered. */
  element: PropTypes.oneOf(['ol', 'ul']).isRequired,
  /** The children that will be rendered inside the list. */
  children: PropTypes.node,
  /**
   * Will cause the appropriate variant
   * type to render.
   */
  variant: PropTypes.oneOf(['indented', 'bare']),
  /**
   * The value supplied will be assigned to
   * the 'data-id' attribute on the
   * component. This is intended to be used as
   * a selector for automated tools. This value
   * should be unique per page.
   */
  idString: PropTypes.string,
  /**
   * A space-separated list of
   * classes that will be added
   * to the outermost element.
  */
  additionalClasses: PropTypes.string,
};

export default SprkList;
