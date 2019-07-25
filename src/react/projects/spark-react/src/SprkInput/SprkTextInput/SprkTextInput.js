import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';
import SprkTextInputLabel from './components/SprkTextInputLabel';
import SprkTextInputTextArea from './components/SprkTextInputTextArea';
import SprkTextInputSingleLine from './components/SprkTextInputSingleLine';
import SprkTextInputIconCheck from './components/SprkTextInputIconCheck';

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
      leadingIcon,
      textIcon,
      hiddenLabel,
      helperText,
      type,
      valid,
      label,
      errorMessage,
      formatter,
      children,
      ...rest } = this.props;
    const { id, errorContainerId } = this.state;

    // If hugeTextInput, label has to be after Input
    const GetInputLabelOrder = () => {
      if (type === 'textarea') {
        return (
          <React.Fragment>
            <SprkTextInputLabel
              leadingIcon={leadingIcon}
              hiddenLabel={hiddenLabel}
              id={id}
            />
            <SprkTextInputTextArea
              {...rest}
            />
          </React.Fragment>
        );
      }

      if (type === 'hugeTextInput') {
        return (
          <React.Fragment>
            <SprkTextInputSingleLine
              {...rest}
            />
            <SprkTextInputLabel
              label={label}
              leadingIcon={leadingIcon}
              hiddenLabel={hiddenLabel}
            />
          </React.Fragment>
        );
      }

      return (
        <React.Fragment>
          <SprkTextInputLabel
            label={label}
            leadingIcon={leadingIcon}
            hiddenLabel={hiddenLabel}
          />
          <SprkTextInputSingleLine
            {...rest}
          />
        </React.Fragment>
      );
    }



    return (
      <div
        className={classNames('sprk-b-InputContainer', additionalClasses, {
          'sprk-b-InputContainer--huge': type === 'hugeTextInput',
        })}
      >
        <SprkTextInputIconCheck
          leadingIcon={leadingIcon}
          textIcon={textIcon}
        >
          <GetInputLabelOrder />
        </SprkTextInputIconCheck>

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
  type: PropTypes.string,
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
  type: '',
  valid: true,
};

export default SprkTextInput;
