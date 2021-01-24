import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

class SprkSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (variant === 'huge') {
      if (this.selectRef.current.value !== '') {
        this.setState({
          selectHugeHasValue: true,
        });
      }
    }
  }

  /*
   * Runs optional onChange prop.
   * Updates state if huge selects have
   * a value.
   */
  handleChange(e, variant, onChangeFunc) {
    const isHugeSelect = variant === 'huge';

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
      isDisabled,
      idString,
      isValid,
      id,
      variant,
      hasBlankFirstOption,
      onChange,
      ariaDescribedBy,
      choices,
      ...other
    } = this.props;
    const { choiceItems, selectHugeHasValue } = this.state;

    return (
      <select
        className={classNames('sprk-b-Select', additionalClasses, {
          'sprk-b-Input--has-floating-label': selectHugeHasValue,
          'sprk-b-Select--error': !isValid,
        })}
        id={id}
        disabled={isDisabled}
        aria-describedby={ariaDescribedBy}
        onChange={(e) => {
          this.handleChange(e, variant, onChange);
        }}
        data-analytics={analyticsString}
        data-id={idString}
        ref={this.selectRef}
        {...other}
      >
        {variant === 'huge' && (
          // eslint-disable-next-line max-len
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <option
            value=""
            hidden={!hasBlankFirstOption}
            disabled={!hasBlankFirstOption}
          />
        )}
        {choiceItems.map(
          ({ id: innerId, label: innerLabel, options, value, ...rest }) => {
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
          },
        )}
      </select>
    );
  }
}

SprkSelect.propTypes = {
  /**
   * A space-separated string of classes to
   * add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving
   * as a unique selector for outside libraries
   * to capture data.
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
  isDisabled: PropTypes.bool,
  /**
   * Assigned to the `aria-describedby`
   * attribute of the input used
   * to create relationships between the
   * input and error container.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving
   * as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Determines whether to render
   * the component in the valid or the error state.
   */
  isValid: PropTypes.bool,
  /**
   * Will render a blank first option. This option
   * is only available when `variant="huge"`
   */
  hasBlankFirstOption: PropTypes.bool,
  /**
   * Passes in a function that handles the onChange of the input.
   */
  onChange: PropTypes.func,
  /**
   * Determines what type of input is rendered.
   */
  variant: PropTypes.oneOf(['huge']),
  /**
   * Assigned to the `id` attribute
   * of the rendered input element.
   * A custom ID will
   * be added if this is not supplied.
   */
  id: PropTypes.string,
};

SprkSelect.defaultProps = {
  id: uniqueId('sprk-'),
  isValid: true,
};

export default SprkSelect;
