import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import SprkButton from '../SprkButton/SprkButton';

function SprkSpinner({size, lightness, ...rest}) {
  return (
    <div className={classnames(
      'sprk-c-Spinner',
      'sprk-c-Spinner--circle',
      {'sprk-c-Spinner--large': size === 'large'},
      {'sprk-c-Spinner--dark': lightness === 'dark'}
    )}
   {...rest}>
    </div>
  );
}

SprkSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  lightness: PropTypes.oneOf(['light', 'dark']),
  idString: PropTypes.string
}

SprkSpinner.defaultProps = {
  size: 'small',
  lightness: 'light'
}

export default SprkSpinner;