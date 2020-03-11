import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkCenteredColumn = (props) => {
  const {
    children,
    additionalClasses,
    ...other
  } = props;

  const classNames = classnames('sprk-o-CenteredColumn', additionalClasses);

  return (
    <div className={classNames} {...other}>
      {children}
    </div>
  );
};

SprkCenteredColumn.propTypes = {
  children: PropTypes.node,
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkCenteredColumn;
