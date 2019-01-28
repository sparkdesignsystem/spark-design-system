import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkDictionary = (props) => {
    const { keyValuePairs, variant, idString, additionalClasses, ...other } = props;
    const classNames = classnames(
        'sprk-c-Dictionary',
        additionalClasses, {
            'sprk-c-Dictionary--striped': variant === 'striped'
        }
    );

    const keyValuePairsMap = Object.keys(keyValuePairs).map(function (term) {
        return (
            <div className="sprk-c-Dictionary__keyvaluepair">
                <dt className="sprk-c-Dictionary__key sprk-b-Label sprk-b-Label--no-input">{term}</dt>
                <dd className="sprk-c-Dictionary__value">{keyValuePairs[term]}</dd>
            </div>
        )
    });

    return (
        <div className={classNames} data-id={idString}>
            <dl className="sprk-c-Dictionary__keyvaluepairs">
                {keyValuePairsMap}
            </dl>
        </div>
    );
}

SprkDictionary.defaultProps = {
    keyValuePairs: {}
}

SprkDictionary.propTypes = {
    // The string to use for the data-id attribute
    keyValuePairs: PropTypes.object.isRequired,
    // The link variant that determines the class names
    variant: PropTypes.oneOf(['striped']),
    // The string to use for the data-analytics attribute
    analyticsString: PropTypes.string,
    // The string to use for the data-id attribute
    idString: PropTypes.string,
    // Any additional classes to add to the link
    additionalClasses: PropTypes.string
};

export default SprkDictionary;
