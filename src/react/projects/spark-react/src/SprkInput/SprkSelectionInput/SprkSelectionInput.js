import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';
import SprkLabelLocationCheck from '../components/SprkLabelLocationCheck';
import SprkIcon from '../../SprkIcon/SprkIcon';

class SprkSelectionInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      choiceItems: props.choices.map(item => ({ id: uniqueId(), ...item })),
    };
    this.handleChange = this.handleChange.bind(this);
    this.selectRef = React.createRef();
  }

  /*
  * Runs optional onChangeFunc prop.
  * Updates state if huge selects have
  * a value.
  */
  handleChange(e, variant) {
     const { onChangeFunc } = this.props;
     const isHugeSelect = variant === 'hugeSelect';

     if (isHugeSelect) {
      this.setState({
        selectHugeHasValue: e.target.value === '' ? false : true
      });
    }
    if (onChangeFunc) onChangeFunc(e);
  }

  /*
  * Expects an element ref
  * Returns true if the element
  * has a value.
  */
  elementHasValue(elementRef) {
    if (!elementRef) return false;
    return elementRef.current.value === '' ? false : true;
  }

  componentDidMount() {
    /*
    * Check if Huge Select has a value when it first mounts.
    * Set presence of value in state.
    */
   if (this.props.variant === 'hugeSelect') {
      const selectHugeHasValue = this.elementHasValue(this.selectRef);
      if (selectHugeHasValue) {
        this.setState({
          selectHugeHasValue: true
        });
      }
    }
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
      groupLabel,
      valid,
      variant,
      hasBlankFirstOption,
      onChangeFunc,
      ...other
    } = this.props;
    const {
      choiceItems,
      id,
      selectHugeHasValue,
    } = this.state;

    return (
      <div
        className={
          classNames('sprk-b-InputContainer', additionalClasses, {
          'sprk-b-InputContainer--huge': variant === 'hugeSelect',
        })}
        data-analytics={analyticsString}
        data-id={idString}
      >
        {(variant === 'checkbox' || variant === 'radio') && (
          <fieldset className="sprk-b-Fieldset">
            <legend className="sprk-b-Legend">
              <p className="sprk-b-Label">{groupLabel || label }</p>
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
                  onChange={(e)=>{this.handleChange(e, variant)}}
                  {...rest}
                />
                <label htmlFor={innerId} className="sprk-b-Label sprk-b-Label--inline">
                  {innerLabel}
                </label>
              </div>
            ))}
          </fieldset>
        )}

        {(variant === 'select' || variant === 'hugeSelect') && (
          <>
            <SprkLabelLocationCheck
              type={variant}
              label={label}
              id={id}
              disabled={disabled}
            >
              <select className={
                  classNames(
                    'sprk-b-Select',
                    {
                      'sprk-b-Input--has-floating-label' : selectHugeHasValue,
                      'sprk-b-Select--error': !valid,
                    }
                  )}
                id={id}
                disabled={disabled}
                aria-describedby={`errorcontainer-${id}`}
                onChange={(e)=>{this.handleChange(e, variant)}}
                ref={this.selectRef}
                {...other}
              >
                {variant === 'hugeSelect' && (<option value="" hidden={!hasBlankFirstOption} disabled={!hasBlankFirstOption}></option>)}
                {choiceItems.map(({ id: innerId, label: innerLabel, options, value, ...rest }) => {
                  if (options) {
                    return (
                      <optgroup label={innerLabel} key={innerId}>
                        {options.map(({ value: optionValue, label: optionLabel }) => (
                          <option key={optionValue} value={optionValue} {...rest}>
                            {optionLabel}
                          </option>
                        ))}
                      </optgroup>
                    );
                  }
                  return (
                    <option value={value} key={value} {...rest}>
                      {innerLabel}
                    </option>
                  );
                })}
              </select>
            </SprkLabelLocationCheck>
            <SprkIcon
              iconName="chevron-down"
              additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
            />
          </>
        )}
        {helperText.length > 0 && <div className="sprk-b-HelperText">{helperText}</div>}
        {!valid && <SprkErrorContainer id={`errorcontainer-${id}`} message={errorMessage} />}
      </div>
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
  hasBlankFirstOption: PropTypes.bool,
  onChangeFunc: PropTypes.func,
  variant: PropTypes.oneOf(['checkbox', 'radio', 'select', 'hugeSelect']).isRequired,
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
  hasBlankFirstOption: false,
};

export default SprkSelectionInput;
