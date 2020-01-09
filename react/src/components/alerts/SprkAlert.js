import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkIcon from '../icons/SprkIcon';

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
   * Determines whether to render the Alert.
   */
  isVisible: PropTypes.bool,
  /**
   * The text of the Alert message.
   * Will be rendered inside a paragraph tag.
   */
  message: PropTypes.string.isRequired,
  /**
   * The type of Alert variant to render.
   * 	Can be `info`, `fail`, or `success`.
   */
  variant: PropTypes.oneOf(['info', 'success', 'fail']),
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * If `false`, the dismiss button will not be rendered and
   * the Alert will not dismissible.
   * If `true`, the dismiss button will be rendered and
   * the Alert will be dismissible.
   */
  isDismissible: PropTypes.bool,
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the dismiss button.
   * Intended for an outside
   * library to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Function that is called when dismiss button is clicked.
   */
  onDismiss: PropTypes.func,
  /** The icon name for the fail Alert. */
  iconNameFail: PropTypes.string,
  /** The icon name for the dismiss button. */
  iconNameDismiss: PropTypes.string,
  /** The icon name for the info Alert. */
  iconNameInfo: PropTypes.string,
  /** The icon name for the success Alert. */
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
