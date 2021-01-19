import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';
import SprkLabelLocationCheck from '../components/SprkLabelLocationCheck/SprkLabelLocationCheck';
import SprkIcon from '../../../components/icons/SprkIcon';

/**
 * TODO: Remove this component as part of Issue 3783.
 */
class SprkSelectionInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      choiceItems: props.choices.map((item) => ({ id: uniqueId(), ...item })),
    };
    this.handleChange = this.handleChange.bind(this);
    this.selectRef = React.createRef();
  }

  componentDidMount() {
    /*
     * Check if Huge Select has a value when it first mounts.
     * Set presence of value in state.
     */
    const { variant } = this.props;
    if (variant === 'hugeSelect') {
      if (this.selectRef.current.value !== '') {
        this.setState({
          selectHugeHasValue: true,
        });
      }
    }
  }

  /*
   * Runs optional onChangeFunc prop.
   * Updates state if huge selects have
   * a value.
   */
  handleChange(e, variant, onChangeFunc) {
    const isHugeSelect = variant === 'hugeSelect';

    if (isHugeSelect) {
      this.setState({
        selectHugeHasValue: e.target.value !== '',
      });
    }
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
      groupLabel,
      valid,
      variant,
      hasBlankFirstOption,
      onChange,
      ...other
    } = this.props;
    const { choiceItems, id, selectHugeHasValue } = this.state;
    // eslint-disable-next-line react/prop-types
    // eslint-disable-next-line react/destructuring-assignment
    const onChangeFunc = onChange || this.props.onChangeFunc;

    return (
      <div
        className={classNames('sprk-b-InputContainer', additionalClasses, {
          'sprk-b-InputContainer--huge': variant === 'hugeSelect',
        })}
        data-analytics={analyticsString}
        data-id={idString}
      >
        {(variant === 'checkbox' || variant === 'radio') && (
          <fieldset className="sprk-b-Fieldset">
            <legend className="sprk-b-Legend">
              <p className="sprk-b-Label">{groupLabel || label}</p>
            </legend>
            {choiceItems.map(
              ({ label: innerLabel, id: innerId, name, value, ...rest }) => (
                <div className="sprk-b-SelectionContainer" key={innerId}>
                  <input
                    className={classNames({
                      'sprk-b-Checkbox__input': variant === 'checkbox',
                      'sprk-b-Radio__input': variant === 'radio',
                    })}
                    disabled={disabled}
                    id={innerId}
                    type={variant}
                    aria-describedby={`errorcontainer-${id}`}
                    name={name}
                    value={value}
                    onChange={onChangeFunc}
                    {...rest}
                  />
                  <label
                    htmlFor={innerId}
                    className={classNames('sprk-b-Label sprk-b-Label--inline', {
                      'sprk-b-Checkbox__label': variant === 'checkbox',
                      'sprk-b-Radio__label': variant === 'radio',
                      'sprk-b-Label--disabled': disabled,
                    })}
                  >
                    {innerLabel}
                  </label>
                </div>
              ),
            )}
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
              <select
                className={classNames('sprk-b-Select', {
                  'sprk-b-Input--has-floating-label': selectHugeHasValue,
                  'sprk-b-Select--error': !valid,
                })}
                id={id}
                disabled={disabled}
                aria-describedby={`errorcontainer-${id}`}
                onChange={(e) => {
                  this.handleChange(e, variant, onChangeFunc);
                }}
                ref={this.selectRef}
                {...other}
              >
                {variant === 'hugeSelect' && (
                  // eslint-disable-next-line max-len
                  // eslint-disable-next-line jsx-a11y/control-has-associated-label
                  <option
                    value=""
                    hidden={!hasBlankFirstOption}
                    disabled={!hasBlankFirstOption}
                  />
                )}
                {choiceItems.map(
                  ({
                    id: innerId,
                    label: innerLabel,
                    options,
                    value,
                    ...rest
                  }) => {
                    if (options) {
                      return (
                        <optgroup label={innerLabel} key={innerId}>
                          {options.map(
                            ({ value: optionValue, label: optionLabel }) => (
                              <option
                                key={optionValue}
                                value={optionValue}
                                {...rest}
                              >
                                {optionLabel}
                              </option>
                            ),
                          )}
                        </optgroup>
                      );
                    }
                    return (
                      <option value={value} key={value} {...rest}>
                        {innerLabel}
                      </option>
                    );
                  },
                )}
              </select>
            </SprkLabelLocationCheck>
            <SprkIcon
              iconName="chevron-down"
              additionalClasses="
              sprk-c-Icon--filled-current-color
              sprk-c-Icon--stroke-current-color
              sprk-b-SelectContainer__icon"
            />
          </>
        )}
        {helperText.length > 0 && (
          <div className="sprk-b-HelperText">{helperText}</div>
        )}
        {!valid && (
          <SprkErrorContainer
            id={`errorcontainer-${id}`}
            message={errorMessage}
          />
        )}
      </div>
    );
  }
}

SprkSelectionInput.propTypes = {
  /**
   * A space-separated string of classes to
   * add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving
   * as a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Expects an array of objects
   * that describe the choices available to the user.
   */
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Text tied to the rendered input element.
       */
      label: PropTypes.string.isRequired,
      /**
       * Assigned to the `name` attribute
       * of the rendered input element.
       */
      name: PropTypes.string,
      /**
       * 	Assigned to the `value` attribute
       *  of the rendered input element.
       */
      value: PropTypes.string,
    }),
  ).isRequired,
  /**
   * Will render the component in its disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * The error message that will display
   * while in its error state.
   */
  errorMessage: PropTypes.string,
  /**
   * Text that describes the
   * group of selection items as a whole.
   * Applies to the checkbox and radio variants only.
   */
  groupLabel: PropTypes.string,
  label: PropTypes.string,
  /**
   * 	Text that appears below the input, intended
   * to provide more information to a user.
   */
  helperText: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving
   * as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Determines whether to render
   * the component in the valid or the error state.
   */
  valid: PropTypes.bool,
  /**
   * Will render a blank first option. This option
   * is only available when `variant="hugeSelect"`
   */
  hasBlankFirstOption: PropTypes.bool,
  /**
   * Passes in a function that handles the onChange of the input.
   */
  onChange: PropTypes.func,
  onChangeFunc: PropTypes.func,
  /**
   * Determines what type of input is rendered.
   */
  variant: PropTypes.oneOf(['checkbox', 'radio', 'select', 'hugeSelect'])
    .isRequired,
};

SprkSelectionInput.defaultProps = {
  helperText: '',
  valid: true,
};

export default SprkSelectionInput;
