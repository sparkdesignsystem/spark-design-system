import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function SprkIcon({
                    additionalClasses,
                    children,
                    iconType,
                    idString,
                    viewBox,
                    ...rest
                  }) {
  return (
    <svg
      className={classNames('sprk-c-Icon', additionalClasses)}
      viewBox={viewBox}
      data-id={idString}
      {...rest}>
      <use xlinkHref={'#' + iconType}/>
    </svg>
  );
}

SprkIcon.defaultProps = {
  additionalClasses: "",
  viewBox: '0 0 64 64'
};

SprkIcon.propTypes = {
  additionalClasses: PropTypes.string,
  children: PropTypes.node,
  iconType: PropTypes.string.isRequired,
  idString: PropTypes.string,
  viewBox: PropTypes.string
};

export default SprkIcon;