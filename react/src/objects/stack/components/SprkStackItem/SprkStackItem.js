import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkStackItem = (props) => {
  const {
    children,
    additionalClasses,
    idString,
    ...other
  } = props;

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

SprkStackItem.defaultProps = {
  children: '',
  idString: '',
  additionalClasses: '',
};

SprkStackItem.propTypes = {
  /**  The children of the Stack item. */
  children: PropTypes.node,
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  idString: PropTypes.string,
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkStackItem;
