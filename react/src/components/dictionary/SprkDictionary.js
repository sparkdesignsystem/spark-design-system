/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';

const SprkDictionary = (props) => {
  const {
    keyValuePairs,
    variant,
    idString,
    additionalClasses,
    keysAdditionalClasses,
    valuesAdditionalClasses,
    ...other
  } = props;

  const classNames = classnames('sprk-c-Dictionary', additionalClasses, {
    'sprk-c-Dictionary--striped': variant === 'striped',
  });

  const keysClassNames = classnames(
    'sprk-c-Dictionary__key',
    'sprk-b-Label',
    'sprk-b-Label--no-input',
    keysAdditionalClasses,
  );

  const valuesClassNames = classnames(
    'sprk-c-Dictionary__value',
    valuesAdditionalClasses,
  );

  const keyValuePairsMap = Object.keys(keyValuePairs).map((term) => (
    <div className="sprk-c-Dictionary__keyvaluepair" key={uniqueId('key-')}>
      <dt className={keysClassNames}>{term}</dt>
      <dd className={valuesClassNames}>{keyValuePairs[term]}</dd>
    </div>
  ));

  return (
    <div className={classNames} data-id={idString} {...other}>
      <dl className="sprk-c-Dictionary__keyvaluepairs">{keyValuePairsMap}</dl>
    </div>
  );
};

SprkDictionary.propTypes = {
  /**
   * The collection of key-value pairs to render.
   */
  keyValuePairs: PropTypes.PropTypes.shape({
    '': '',
  }).isRequired,
  /**
   * Determines the style of dictionary component. Supplying no value will
   * cause the base styles to be used.
   */
  variant: PropTypes.oneOf(['striped']),
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for
   * automated tools.
   */
  idString: PropTypes.string,
  /**
   * Expects a space separated string of classes to be added to each key
   * element.
   */
  keysAdditionalClasses: PropTypes.string,
  /**
   * Expects a space separated string of classes to be added to each value
   * element.
   */
  valuesAdditionalClasses: PropTypes.string,
  /**
   * Expects a space separated string of classes to be added to the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkDictionary;
