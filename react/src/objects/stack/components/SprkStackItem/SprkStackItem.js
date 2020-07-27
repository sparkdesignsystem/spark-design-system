import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkStackItem = (props) => {
  const { children, additionalClasses, idString, ...other } = props;

  return (
    <div
      className={classnames('sprk-o-Stack__item', additionalClasses)}
      data-id={idString}
      {...other}
    >
      {children}
    </div>
  );
};

SprkStackItem.propTypes = {
  /**  Content to render inside of SprkStackItem. */
  children: PropTypes.node,
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for
   * automated tools.
   */
  idString: PropTypes.string,
  /**
   * A space-separated string of classes to add to the outermost container of
   * the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkStackItem;
