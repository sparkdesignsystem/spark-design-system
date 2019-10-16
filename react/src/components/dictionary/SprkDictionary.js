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
    ...other
  } = props;

  const classNames = classnames(
    'sprk-c-Dictionary',
    additionalClasses, {
      'sprk-c-Dictionary--striped': variant === 'striped',
    },
  );

  const keyValuePairsMap = Object.keys(keyValuePairs).map(term => (
    <div className="sprk-c-Dictionary__keyvaluepair" key={uniqueId('key-')}>
      <dt className="sprk-c-Dictionary__key sprk-b-Label sprk-b-Label--no-input">{term}</dt>
      <dd className="sprk-c-Dictionary__value">{keyValuePairs[term]}</dd>
    </div>
  ));

  return (
    <div className={classNames} data-id={idString} {...other}>
      <dl className="sprk-c-Dictionary__keyvaluepairs">
        {keyValuePairsMap}
      </dl>
    </div>
  );
};

SprkDictionary.defaultProps = {
  variant: '',
  idString: '',
  additionalClasses: '',
};

SprkDictionary.propTypes = {
  // The data that this component will use to populate itself
  keyValuePairs: PropTypes.PropTypes.shape({
    '': '',
  }).isRequired,
  // The link variant that determines the class names
  variant: PropTypes.oneOf(['striped', '']),
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Any additional classes to add to the link
  additionalClasses: PropTypes.string,
};

export default SprkDictionary;
