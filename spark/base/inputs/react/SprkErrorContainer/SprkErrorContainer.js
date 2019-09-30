import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SprkIcon from '../../../../components/icons/react/SprkIcon';

const SprkErrorContainer = ({
  additionalClasses,
  analyticsString,
  idString,
  message,
  id }) => (
    <div
      className={classNames('sprk-b-ErrorContainer', additionalClasses)}
      data-analytics={analyticsString}
      data-id={idString}
      id={id}
    >
      <SprkIcon
        additionalClasses="sprk-c-Icon--m sprk-b-ErrorIcon"
        iconName="exclamation-filled-small"
      />
      <div className="sprk-b-ErrorText">{message}</div>
    </div>
);

SprkErrorContainer.propTypes = {
  additionalClasses: PropTypes.string,
  analyticsString: PropTypes.string,
  id: PropTypes.string.isRequired,
  idString: PropTypes.string,
  message: PropTypes.string.isRequired,
};

SprkErrorContainer.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  idString: '',
};

export default SprkErrorContainer;
