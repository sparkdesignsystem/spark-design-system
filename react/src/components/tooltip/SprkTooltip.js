import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkIcon from '../icons/SprkIcon';
import uniqueId from 'lodash/uniqueId';

const SprkTooltip = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    // ref to trigger???.addEventListener('keydown', handleTriggerKeydown);

    return() => {
      window.removeEventListener('keydown', handleKeydown);
      // triggerIconType.removeEventListener('keydown', handleTriggerKeydown);
    }
  }, [])
  useEffect(() => {
    if (props.isDefaultToggled) {
      setIsToggled(true);
    }
  }, [])

  const {
    children,
    idString,
    triggerIconType,
    iconAdditionalClasses,
    additionalClasses,
    analyticsString,
    isDefaultToggled,
    id,
    ...other
  } = props;

  const handleKeydown = e =>{
    if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
      console.log('hey')
      setIsToggled(false);
    }

    if (e.key === 'Enter'){
      console.log('sup')
    }
  }

  const handleTriggerKeydown = e =>{
    if (e.key === 'Enter'){
      console.log('sup')
    }
  }



  const toggle = e => {
    setIsToggled(!isToggled);
  }

  return (
    <span {...other} className='sprk-c-Tooltip__container'>
      <button
        onClick={toggle}
        className={classnames({
          'sprk-c-Tooltip__trigger': true,
          'sprk-c-Tooltip--toggled': isToggled,
        })}
        aria-expanded={isToggled ? 'true' : 'false'}
        aria-labelledby={id}
      >
        <SprkIcon iconName={triggerIconType} additionalClasses={iconAdditionalClasses} />
      </button>
      <span
        className='sprk-c-Tooltip sprk-c-Tooltip--bottom-right'
        id={id}
      >
        {children}
      </span>
    </span>
  );
}

SprkTooltip.defaultProps = {
  triggerIconType: 'question-filled',
  id: uniqueId('sprk_tooltip_'),
  isDefaultToggled: false,
};

SprkTooltip.propTypes = {
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as a unique selector for outside libraries to capture data.
  */
  analyticsString: PropTypes.string,
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Toggles the tooltip open by default
   */
  isDefaultToggled: PropTypes.bool,
};

export default SprkTooltip;
