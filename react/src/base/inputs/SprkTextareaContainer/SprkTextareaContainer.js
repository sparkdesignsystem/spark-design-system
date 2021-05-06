import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SprkLabel from '../SprkLabel/SprkLabel';
import SprkTextarea from '../SprkTextarea/SprkTextarea';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';
import SprkFieldError from '../SprkFieldError/SprkFieldError';
import SprkHelperText from '../SprkHelperText/SprkHelperText';

class SprkTextareaContainer extends Component {
  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
  }

  renderChildren() {
    const { children } = this.props;
    let id;
    let labelFor;
    let errorContainerID;
    let helperTextID;
    let inputAriaDescribedBy;
    let inputAriaDescribedByArray = [];

    /*
     * Store references to id, for
     * and errorContainerID.
     */
    React.Children.forEach(children, (child) => {
      if (child.type.name === SprkTextarea.name) {
        id = child.props.id;
        inputAriaDescribedBy = child.props.ariaDescribedBy;
      }
      if (child.type.name === SprkLabel.name) {
        labelFor = child.props.htmlFor;
      }
      if (
        child.type.name === SprkFieldError.name ||
        child.type.name === SprkErrorContainer.name
      ) {
        errorContainerID = child.props.id;
      }
      if (child.type.name === SprkHelperText.name) {
        helperTextID = child.props.id;
      }
    });

    /* Check to see if the errorContainerID
     * and helperTextID are in the inputAriaDescribedByArray.
     * If they aren't, add it to the array.
     */
    if (helperTextID || errorContainerID) {
      if (inputAriaDescribedBy) {
        inputAriaDescribedByArray = inputAriaDescribedBy.split(' ');
      }
      if (helperTextID && !inputAriaDescribedByArray.includes(helperTextID)) {
        inputAriaDescribedByArray.push(helperTextID);
      }
      if (
        errorContainerID &&
        !inputAriaDescribedByArray.includes(errorContainerID)
      ) {
        inputAriaDescribedByArray.push(errorContainerID);
      }
      inputAriaDescribedBy = inputAriaDescribedByArray.join(' ');
    }

    if (id && labelFor && id.length > 0 && labelFor.length > 0) {
      const childrenElements = React.Children.map(children, (child) => {
        /*
         * If the label for and the input id
         * are mismatching, use the id
         * value to set the `for` attribute on the label.
         * SprkInput and SprkLabel will always have
         * an ID and a for. We check for presence (id="")
         * before checking for length to avoid running
         * .length on undefined.
         */
        if (id !== labelFor && child.type.name === SprkLabel.name) {
          return React.cloneElement(child, {
            htmlFor: id,
          });
        }

        /*
         * If there is an inputAriaDescribedBy,
         * add it to the SprkTextarea element.
         */
        if (inputAriaDescribedBy && child.type.name === SprkTextarea.name) {
          return React.cloneElement(child, {
            ariaDescribedBy: inputAriaDescribedBy,
          });
        }

        return child;
      });
      return childrenElements;
    }
    // Return other elements ex. <div>
    return children;
  }

  render() {
    const {
      additionalClasses,
      analyticsString,
      idString,
      ...rest
    } = this.props;

    return (
      <div
        data-analytics={analyticsString}
        data-id={idString}
        className={classNames('sprk-b-InputContainer', additionalClasses)}
        {...rest}
      >
        {this.renderChildren()}
      </div>
    );
  }
}

SprkTextareaContainer.propTypes = {
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

export default SprkTextareaContainer;
