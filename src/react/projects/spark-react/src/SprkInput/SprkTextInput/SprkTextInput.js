import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';
import SprkIcon from '../../SprkIcon/SprkIcon';
import SprkInputIconCheck from '../components/SprkInputIconCheck';
import SprkLabelLocationCheck from '../components/SprkLabelLocationCheck';
import SprkTextAreaCheck from '../components/SprkTextareaCheck';

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
      iconRight,
      idString,
      label,
      disabled,
      leadingIcon,
      narrowWidth,
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
        <SprkInputIconCheck
          leadingIcon={leadingIcon}
          textIcon={textIcon}
          narrowWidth={narrowWidth}
          iconRight={iconRight}
        >
          <SprkLabelLocationCheck
            type={type}
            label={label}
            leadingIcon={leadingIcon}
            hiddenLabel={hiddenLabel}
            id={id}
            disabled={disabled}
          >
            <SprkTextAreaCheck
              id={id}
              analyticsString={analyticsString}
              idString={idString}
              forwardedRef={forwardedRef}
              type={type}
              formatter={formatter}
              errorContainerId={errorContainerId}
              hiddenLabel={hiddenLabel}
              valid={valid}
              leadingIcon={leadingIcon}
              textIcon={textIcon}
              value={value}
              iconRight={iconRight}
              disabled={disabled}
              {...rest}
            />
          </SprkLabelLocationCheck>
        </SprkInputIconCheck>
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
  iconRight: PropTypes.bool,
  idString: PropTypes.string,
  label: PropTypes.string,
  narrowWidth: PropTypes.bool,
  leadingIcon: PropTypes.string,
  textIcon: PropTypes.bool,
  valid: PropTypes.bool,
  disabled: PropTypes.bool,
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
  iconRight: false,
  idString: '',
  label: 'Text Input Label',
  leadingIcon: '',
  narrowWidth: false,
  textIcon: false,
  valid: true,
  disabled: false,
};

export default SprkTextInput;
