import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkCenteredColumn = (props) => {
  const {
    children,
    additionalClasses,
    idString,
    element,
    ...other
  } = props;

  const classNames = classnames('sprk-o-CenteredColumn', additionalClasses);
  const TagName = element;

  return (
    <TagName className={classNames} {...other} data-id={idString}>
      {children}
    </TagName>
  );
};

SprkCenteredColumn.propTypes = {
  children: PropTypes.node,
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Determines what element to render.
   */
  element: PropTypes.string,
};

SprkCenteredColumn.defaultProps = {
  /**
   * Determines what element to render.
   */
  element: "div"
}

export default SprkCenteredColumn;
