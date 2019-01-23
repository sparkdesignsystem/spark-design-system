import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function SprkIcon({additionalClasses, viewBox, iconType, ...rest}) {
  return (
    <svg className={classNames('sprk-c-Icon', additionalClasses)} viewBox={viewBox} {...rest}>
      <use xlinkHref={'#' + iconType}/>
    </svg>
  );
}

SprkIcon.defaultProps = {
  viewBox: '0 0 64 64'
};

SprkIcon.propTypes = {
  additionalClasses: PropTypes.string,
  viewBox: PropTypes.string,
  iconType: PropTypes.string
};

export default SprkIcon;