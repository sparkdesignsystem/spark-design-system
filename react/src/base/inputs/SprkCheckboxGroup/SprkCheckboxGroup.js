import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';

class SprkCheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
    };
  }

  render() {
    const {
      children,
      variant,
      idString,
      additionalClasses,
      analyticsString,
      helperText,
      errorMessage,
      valid,
    } = this.props;
    const { id } = this.state;
    return (
      <div
        className={classnames('sprk-b-InputContainer', additionalClasses, {
          'sprk-b-InputContainer--huge': variant === 'huge',
        })}
        data-analytics={analyticsString}
        data-id={idString}
      >
        {children}
        {/* Turn this into SprkHelperText   */}
        {helperText && <div className="sprk-b-HelperText">{helperText}</div>}
        {/* {// Take this out and add it into
          the story instead for better compositional// } */}
        {valid === false && (
          <SprkErrorContainer
            id={`errorcontainer-${id}`}
            message={errorMessage}
          />
        )}
      </div>
    );
  }
}

SprkCheckboxGroup.propTypes = {
  children: PropTypes.node,
  /**
   * Determines the style of checkbox.
   * Supplying no value will cause the default styles to be used.
   */
  variant: PropTypes.oneOf(['huge']),
  /**
   * Assigned to the `data-id` attribute serving as
   * a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute
   * serving as a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * A space-separated string of classes
   * to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * 	Text that appears below the input,
   * intended to provide more information to a user.
   */
  helperText: PropTypes.string,
  /**
   * The error message that will display
   * while in its error state.
   */
  errorMessage: PropTypes.string,
  /**
   * Determines whether to render
   * the component in the valid or the error state.
   */
  valid: PropTypes.bool,
};

export default SprkCheckboxGroup;
