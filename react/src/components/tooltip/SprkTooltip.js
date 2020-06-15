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
        data-analytics={analyticsString}
        data-id={idString}
      >
        <SprkIcon iconName={triggerIconType} additionalClasses={iconAdditionalClasses} />
      </button>
      <span
        className={classnames(
          'sprk-c-Tooltip',
          additionalClasses
        )}
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
  triggerIconType: 'question-filled',
  isDefaultToggled: false,
};

SprkTooltip.propTypes = {
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * trigger element. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  idString: PropTypes.string,
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the trigger element.
   * Intended for an outside
   * library to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Expects a space separated string
   * of classes to be added to the
   * tooltip element.
   */
  additionalClasses: PropTypes.string,
  /**
   * Whether or not the tooltip is toggled open when the component renders.
   */
  isDefaultToggled: PropTypes.bool,
};

export default SprkTooltip;
