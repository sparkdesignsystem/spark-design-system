import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function SprkIcon({
  additionalClasses,
  children,
  iconName,
  idString,
  viewBox,
  ...rest
}) {
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
}

SprkIcon.propTypes = {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  additionalClasses: PropTypes.string,
  /** Incoming children. */
  children: PropTypes.node,
  /** The id of the symbol to use for the icon. */
  iconName: PropTypes.string.isRequired,
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  idString: PropTypes.string,
  /** The viewbox of the svg containing the symbol. */
  viewBox: PropTypes.string,
};

SprkIcon.defaultProps = {
  additionalClasses: '',
  children: [],
  idString: '',
  viewBox: '0 0 64 64',
};

export default SprkIcon;
