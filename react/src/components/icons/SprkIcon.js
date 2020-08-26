import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SprkIcon = ({
  additionalClasses,
  iconName,
  idString,
  viewBox,
  ...rest
}) => {
  return (
    <svg
      className={classNames('sprk-c-Icon', additionalClasses)}
      viewBox={viewBox}
      data-id={idString}
      {...rest}
    >
      <use xlinkHref={`#${iconName}`} />
    </svg>
  );
};

SprkIcon.propTypes = {
  /**
   * A space-separated string of classes to add
   * to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /** Incoming children. */
  children: PropTypes.node,
  /** The id of the symbol to use for the icon. */
  iconName: PropTypes.string.isRequired,
  /**
   * Assigned to the `data-id` attribute serving
   * as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /** The viewbox of the svg containing the symbol. */
  viewBox: PropTypes.string,
};

SprkIcon.defaultProps = {
  viewBox: '0 0 64 64',
};

export default SprkIcon;
