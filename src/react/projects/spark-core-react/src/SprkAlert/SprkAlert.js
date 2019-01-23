import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SprkAlert extends Component {
  constructor(props) {
    super(props);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.state = {
      isVisible: true
    };
  }

  handleDismiss() {
    this.setState({
      isVisible: false
    })
  }

  render() {
    const {
      message,
      variant,
      additionalClasses,
      isDismissible,
      idString,
      analyticsString,
      ...other
    } = this.props;

    let icon;

    const { isVisible  } = this.state;

    const classNames = classnames(
      'sprk-c-Alert',
      additionalClasses, {
        'sprk-c-Alert--info': variant === 'info',
        'sprk-c-Alert--success': variant === 'success',
        'sprk-c-Alert--fail': variant === 'fail',
        'sprk-u-Display--none': isVisible === false,
      },
    );

    switch (variant) {
      case 'success':
        icon = 'check-mark';
        break;
      case 'info':
        icon = 'bell';
        break;
      case 'fail':
        icon = 'exclamation';
        break;
      default:
        break;
    }

    return (
      <div className={classNames} role="alert" data-id={idString} {...other}>
        <div className="sprk-c-Alert__content">
          {/* TODO: Add Icon Component*/}
          <svg className="sprk-c-Alert__icon sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color" viewBox="0 0 64 64" aria-hidden="true">
            <use xlinkHref={icon}></use>
          </svg>

          <p className="sprk-c-Alert__text">
            {message}
          </p>
        </div>
        {isDismissible &&
          <button className="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss" type="button" title="Dismiss" onClick={this.handleDismiss} data-analytics={analyticsString}>
            {/* TODO: Add Icon Component*/}
            <svg className="sprk-c-Icon sprk-c-Icon--stroke-current-color" viewBox="0 0 64 64" aria-hidden="true">
              <use xlinkHref="#close"></use>
            </svg>
            close placeholder
          </button>
        }
      </div>
    );
  }
}

SprkAlert.propTypes = {
  // The alert message that will be rendered inside the paragraph tab
  message: PropTypes.string,
  // The link variant that determines the class names
  variant: PropTypes.oneOf(['info', 'success', 'fail']),
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // Determines if the dismiss button is added
  isDismissible: PropTypes.bool,
  // The string to use for the data-analytics attribute on the close button
  analyticsString: PropTypes.string,
  // Any additional classes to add to the link
  additionalClasses: PropTypes.string
};

SprkAlert.defaultProps = {
  isDismissible: true
};

export default SprkAlert;
