import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import SprkLabel from './spark'
// import uniqueId from 'lodash/uniqueId';

class SprkInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
      // id: uniqueId(),
      // errorContainerId: uniqueId(),
    };
  }

  /*
   * <SprkInputContainer>
   *   <SprkLabel>Percentage</SprkLabel>
   *   <SprkIcon
   *     iconName="percent"
   *     additionalClasses="sprk-b-InputContainer__icon sprk-c-Icon--m sprk-c-Icon--stroke-current-color sprk-b-InputContainer__icon--right"
   *    />
   *   <SprkInput id="amber-test-id" type="tel"/>
   *   <SprkCheckboxItem isVisibilityToggle>Show</SprkCheckboxItem>
   * </SprkInputContainer>
  */

  // TODO
  // hasID - return bool value if input has an id, return element.id.length > 0;

  // TODO
  // hasFor return element.htmlFor.length > 0;

  // TODO
  // hasMatchingForAndID - label.htmlFor === input.id;


  // Map through children, pull out and store reference
  // to the label, input and error container,
  // solve these scenarios below.


  /** TODO
   * If the label and the input both do not
   * have a for or id then add custom ones.
   */

  /** TODO
    * If the input has an id
    * but the label has no for
    * then set the for the match the id.
    */

  /** TODO
   * If the label has a for
   * but the input has no id
   * then set the id the match the for.
   */

  /** TODO
    * If the label for and the input id
    * are there but mismatching, use the id
    * value for the for attribute on the label.
    * This is because input ids and labels
    * need to match and there is no reason
    * they should not match for a11y.
    */


  /** TODO
   * If there is an error container
   * with an id then match the aria-describedby
   * on the input to the id on the
   * error container.
   */

  /** TODO
    * If there is an error container
    * and it does not have an id
    * then use custom id for the
    * error and aria.
    */

  render() {
    const {
      additionalClasses,
      analyticsString,
      children,
      idString,
      variant,
      ...rest
    } = this.props;
    // TODO const { id, errorContainerId } = this.state;

    React.Children.forEach(children, () => {
      let sprkLabel;
      if (children.type.name !== SprkLabel.name) {
        sprkLabel = children;
        console.log(sprkLabel, 'the label component')
      }
    });


    return (
      <div
        data-analytics={analyticsString}
        data-id={idString}
        className={classNames('sprk-b-InputContainer', additionalClasses, {
          'sprk-b-InputContainer--huge': variant === 'huge',
        })}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

SprkInputContainer.propTypes = {
  /**
   * Determines the style of the input container.
   * Supplying no value will cause
   * the default styles to be used.
   */
  variant: PropTypes.oneOf(['huge']),
  /**
   * A space-separated string of
   * classes to add to the outermost
   * container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics`
   * attribute serving as a unique selector
   * for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Content to render inside of
   * the component.
   */
  children: PropTypes.node,
  /**
   * Assigned to the `data-id` attribute
   * serving as a unique selector for
   * automated tools.
   */
  idString: PropTypes.string,
};

export default SprkInputContainer;
