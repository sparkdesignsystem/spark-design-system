import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkIcon from '../../icons/react/SprkIcon';

const SprkAlert = (props) => {
  const {
    message,
    variant,
    additionalClasses,
    isDismissible,
    idString,
    onDismiss,
    analyticsString,
    isVisible,
    iconNameSuccess,
    iconNameInfo,
    iconNameFail,
    iconNameDismiss,
    ...other
  } = props;

  if (!isVisible) return null;

  let icon;

  const classNames = classnames('sprk-c-Alert', additionalClasses, {
    'sprk-c-Alert--info': variant === 'info',
    'sprk-c-Alert--success': variant === 'success',
    'sprk-c-Alert--fail': variant === 'fail',
  });

  switch (variant) {
    case 'success':
      icon = iconNameSuccess;
      break;
    case 'info':
      icon = iconNameInfo;
      break;
    case 'fail':
      icon = iconNameFail;
      break;
    default:
      break;
  }

  return (
    <div className={classNames} role="alert" data-id={idString} {...other}>
      <div className="sprk-c-Alert__content">
        {variant && (
          <SprkIcon
            iconName={icon}
            additionalClasses="sprk-c-Alert__icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color"
            aria-hidden="true"
          />
        )}

        <p className="sprk-c-Alert__text">{message}</p>
      </div>
      {isDismissible && (
        <button
          className="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss"
          type="button"
          title="Dismiss"
          onClick={onDismiss}
          data-analytics={analyticsString}
        >
          <SprkIcon
            iconName={iconNameDismiss}
            additionalClasses="sprk-c-Icon--stroke-current-color"
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
};

SprkAlert.propTypes = {
  /**
   * Determines whether to render the alert.
   */
  isVisible: PropTypes.bool,
  /** The alert message that will be rendered inside the paragraph tab. */
  message: PropTypes.string.isRequired,
  /** The link variant that determines the class names. */
  variant: PropTypes.oneOf(['info', 'success', 'fail']),
  /** The string to use for the data-id attribute. */
  idString: PropTypes.string,
  /** Determines if the dismiss button is added. */
  isDismissible: PropTypes.bool,
  /** The string to use for the data-analytics attribute on the close button. */
  analyticsString: PropTypes.string,
  /** Any additional classes to add to the link. */
  additionalClasses: PropTypes.string,
  /** Function that is called when dismiss button is clicked. */
  onDismiss: PropTypes.func,
  /** The icon name for the fail alert. */
  iconNameFail: PropTypes.string,
  /** The icon name for the dismiss button. */
  iconNameDismiss: PropTypes.string,
  /** The icon name for the info alert. */
  iconNameInfo: PropTypes.string,
  /** The icon name for the success alert. */
  iconNameSuccess: PropTypes.string,
};

SprkAlert.defaultProps = {
  iconNameFail: 'exclamation',
  iconNameDismiss: 'close',
  iconNameInfo: 'bell',
  iconNameSuccess: 'check-mark',
  isVisible: false,
  isDismissible: true,
};

export default SprkAlert;
