import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';
import SprkIcon from '../../SprkIcon/SprkIcon';

class SprkTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      errorContainerId: uniqueId(),
    };
  }

  render() {
    const {
      additionalClasses,
      analyticsString,
      children,
      errorMessage,
      formatter,
      forwardedRef,
      helperText,
      hiddenLabel,
      idString,
      label,
      leadingIcon,
      textIcon,
      type,
      valid,
      value,
      ...rest
    } = this.props;
    const { id, errorContainerId } = this.state;

    return (
      <div
        className={classNames('sprk-b-InputContainer', additionalClasses, {
          'sprk-b-InputContainer--huge': type === 'hugeTextInput',
        })}
      >
        <div
          className={classNames({
            'sprk-b-TextInputIconContainer': leadingIcon.length > 0 || textIcon,
            'sprk-b-TextInputIconContainer--has-text-icon': textIcon,
          })}
        >
          {leadingIcon.length > 0 && (
            <SprkIcon
              iconName={leadingIcon}
              additionalClasses="
                sprk-c-Icon--m sprk-c-Icon--stroke-current-color
              "
            />
          )}

          {/*
            Render this only if it's not huge Text Input
            Huge Text Input's label needs to be rendered under the input
          */}
          {type != 'hugeTextInput' && (
            <label
              htmlFor={id}
              className={classNames('sprk-b-Label', {
                'sprk-b-Label--with-icon': leadingIcon.length > 0,
                'sprk-u-ScreenReaderText':
                  hiddenLabel || type === 'hugeTextInput',
              })}
            >
              {label}
            </label>
          )}

          {type === 'textarea' && (
            <textarea
              className="sprk-b-TextArea sprk-u-Width-100"
              id={id}
              data-analytics={analyticsString}
              data-id={idString}
              type={type}
              aria-invalid={!valid}
              aria-describedby={errorContainerId}
              value={valid && formatter(value) ? formatter(value) : value}
              {...rest}
            />
          )}
          {type !== 'textarea' && (
            <input
              className={classNames('sprk-b-TextInput sprk-u-Width-100', {
                'sprk-b-TextInput--error': !valid,
                'sprk-b-TextInput--has-svg-icon': leadingIcon.length > 0,
                'sprk-b-TextInput--has-text-icon': textIcon,
                'sprk-b-TextInput--huge': type === 'hugeTextInput',
                'sprk-b-TextInput--label-hidden': type === 'hugeTextInput' && hiddenLabel
              })}
              id={id}
              data-analytics={analyticsString}
              data-id={idString}
              ref={forwardedRef}
              type={type}
              aria-invalid={!valid}
              aria-describedby={errorContainerId}
              value={valid && formatter(value) ? formatter(value) : value}
              {...rest}
            />
          )}

          {/*
            Render this only if it is huge Text Input
            Huge Text Input's label needs to be rendered under the input
          */}
          {type === 'hugeTextInput' && (
            <label
              htmlFor={id}
              className={classNames('sprk-b-Label', {
                // TODO: Huge input with icon
                // 'sprk-b-Label--with-icon': leadingIcon.length > 0,
                'sprk-u-ScreenReaderText': hiddenLabel,
              })}
            >
              {label}
            </label>
          )}

        </div>
        {children}
        {helperText.length > 0 && (
          <div className="sprk-b-HelperText">{helperText}</div>
        )}
        {!valid && (
          <SprkErrorContainer id={errorContainerId} message={errorMessage} />
        )}
      </div>
    );
  }
}

SprkTextInput.propTypes = {
  additionalClasses: PropTypes.string,
  analyticsString: PropTypes.string,
  children: PropTypes.node,
  errorMessage: PropTypes.string,
  formatter: PropTypes.func,
  forwardedRef: PropTypes.shape(),
  helperText: PropTypes.string,
  hiddenLabel: PropTypes.bool,
  idString: PropTypes.string,
  label: PropTypes.string,
  leadingIcon: PropTypes.string,
  textIcon: PropTypes.bool,
  valid: PropTypes.bool,
};

SprkTextInput.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  children: [],
  errorMessage: '',
  formatter: value => value,
  forwardedRef: React.createRef(),
  helperText: '',
  hiddenLabel: false,
  idString: '',
  label: 'Text Input Label',
  leadingIcon: '',
  textIcon: false,
  valid: true,
};

export default SprkTextInput;
