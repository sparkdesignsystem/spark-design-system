import React from 'react';
import classnames from 'classnames';

function SprkSpinner(props) {
  return (
    <div className={classnames(
      'sprk-c-Spinner',
      'sprk-c-Spinner--circle',
      {'sprk-c-Spinner--large': props.size === 'large'},
      {'sprk-c-Spinner--dark': props.lightness === 'dark'}
    )}>
    </div>
  );
}

export default SprkSpinner;