import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';
import SprkIcon from '../../SprkIcon/SprkIcon';

class SprkSelectionInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      choiceItems: props.choices.map(item => ({ id: uniqueId(), ...item })),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChangeFunc } = this.props;
    this.setState({ value: event.target.value });
    if (onChangeFunc) onChangeFunc(e);
  }

  render() {
    const {
      additionalClasses,
      analyticsString,
      disabled,
      errorMessage,
      helperText,
      idString,
      label,
      valid,
      variant,
    } = this.props;
    const { choiceItems, id } = this.state;
    return (
      <React.Fragment>
        <div
          className={classNames('sprk-b-InputContainer', additionalClasses)}
          data-analytics={analyticsString}
          data-id={idString}
        >
          {(variant === 'checkbox' || variant === 'radio') && (
            <fieldset className="sprk-b-Fieldset">
              <legend className="sprk-b-Legend">
                <p className="sprk-b-Label">{label}</p>
              </legend>
              {choiceItems.map(({ label: innerLabel, id: innerId, name, value, ...rest }) => (
                <div className="sprk-b-SelectionContainer" key={innerId}>
                  <input
                    disabled={disabled}
                    id={innerId}
                    type={variant}
                    aria-describedby={`errorcontainer-${id}`}
                    name={name}
                    value={value}
                    {...rest}
                  />
                  <label htmlFor={innerId} className="sprk-b-Label sprk-b-Label--inline">
                    {innerLabel}
                  </label>
                </div>
              ))}
            </fieldset>
          )}
          {variant === 'select' && (
            <React.Fragment>
              <label htmlFor={id} className="sprk-b-Label">
                {label}
              </label>
              <select className="sprk-b-Select" id={id} aria-describedby={`errorcontainer-${id}`}>
                {choiceItems.map(({ id: innerId, label: innerLabel, options, value }) => {
                  if (options) {
                    return (
                      <optgroup label={innerLabel} key={innerId}>
                        {options.map(({ value: optionValue, label: optionLabel }) => (
                          <option key={`${innerId}-${uniqueId()}`} value={optionValue}>
                            {optionLabel}
                          </option>
                        ))}
                      </optgroup>
                    );
                  }
                  return (
                    <option value={value} key={innerId}>
                      {innerLabel}
                    </option>
                  );
                })}
              </select>
              <SprkIcon
                iconName="chevron-down"
                additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
              />
            </React.Fragment>
          )}
          {helperText.length > 0 && <div className="sprk-b-HelperText">{helperText}</div>}
          {!valid && <SprkErrorContainer id={`errorcontainer-${id}`} message={errorMessage} />}
        </div>
      </React.Fragment>
    );
  }
}

SprkSelectionInput.propTypes = {
  additionalClasses: PropTypes.string,
  analyticsString: PropTypes.string,
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  groupLabel: PropTypes.string,
  helperText: PropTypes.string,
  idString: PropTypes.string,
  valid: PropTypes.bool,
  variant: PropTypes.oneOf(['checkbox', 'radio', 'select']).isRequired,
};

SprkSelectionInput.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  disabled: false,
  errorMessage: '',
  groupLabel: '',
  helperText: '',
  idString: '',
  valid: true,
};

export default SprkSelectionInput;
