import React from 'react';
import classnames from 'classnames';

function SprkButton(props) {
  return (
    <button
      className={classnames('sprk-c-Button', props.additionalClasses)}
      type="button"
      data-id={props.dataId}
      disabled={props.disabled}>
      {props.children}
    </button>
  );
}

export default SprkButton;