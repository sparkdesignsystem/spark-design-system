import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const SprkCard = (props) => {
  const { additionalClasses, children, idString, isStandout, ...other } = props;

  return (
    <div
      className={cx('sprk-c-Card sprk-o-Stack', additionalClasses, {
        'sprk-c-Card--standout': isStandout,
      })}
      data-id={idString}
      {...other}
    >
      {children}
    </div>
  );
};

SprkCard.propTypes = {
  /**
   * A space-separated string of classes to
   * add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Content to render inside of `SprkCard`.
   */
  children: PropTypes.node,
  /**
   * Assigned to the `data-id` attribute serving
   * as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * If `true`, the Card will receive
   * the standout design styles.
   */
  isStandout: PropTypes.bool,
};

SprkCard.defaultProps = {
  isStandout: false,
};

export default SprkCard;
