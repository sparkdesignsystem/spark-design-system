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

  /**
   * A function that is run when the component renders.
   * It processes and updates the children & grandchildren that
   * are passed into the SprkTextareaContainer to add necessary
   * a11y considerations.
   * `for` and `id` are checked and updated to match,
   * if they don't match initially.
   * `ariaDescribedby` is checked and updated on the `textarea`
   * element to include the `id` of the `SprkHelperText`,
   * `SprkFieldError`, and `SprkErrorContainer` if present among
   * the children and grandchildren.
   * @returns {object} Processed and updated children elements
   */
  renderChildren() {
    const { children } = this.props;
    let id;
    let labelFor;
    let errorContainerID;
    let helperTextID;
    let inputAriaDescribedBy;
    let inputAriaDescribedByArray = [];

    /*
     * Checks each child element to
     * store the provided `ariaDescribedby` on the `textarea`,
     * `id` of the SprkFieldError, SprkErrorContainer,
     * SprkHelperText, and `for` of the SprkLabel in
     * variables for processing.
     */
    React.Children.forEach(children, (child) => {
      /**
       * If the child element is a SprkTextarea, then the `id`
       * & `ariaDescribedby` are stored for later use.
       */
      if (child.type && child.type.name === SprkTextarea.name) {
        id = child.props.id;
        inputAriaDescribedBy = child.props.ariaDescribedBy;
      }
      /**
       * If the child element is a SprkLabel, then the `htmlFor`
       * is stored for later use.
       */
      if (child.type && child.type.name === SprkLabel.name) {
        labelFor = child.props.htmlFor;
      }
      /**
       * If the child element is a SprkFieldError or SprkErrorContainer,
       * then the `id` is stored for later use.
       */
      if (
        child.type &&
        (child.type.name === SprkFieldError.name ||
          child.type.name === SprkErrorContainer.name)
      ) {
        errorContainerID = child.props.id;
      }
      /**
       * If the child element is a SprkHelperText,
       * then the `id` is stored for later use.
       */
      if (child.type && child.type.name === SprkHelperText.name) {
        helperTextID = child.props.id;
      }
    });

    /**
     * If there is a SprkHelperText, SprkFieldError, or SprkErrorContainer
     * present in the children elements then start the `ariaDescribedBy`
     * processing.
     */
    if (helperTextID || errorContainerID) {
      /**
       * If an `ariaDescribedBy` was provided on the SprkTextarea,
       * then split the string into an array.
       */
      if (inputAriaDescribedBy) {
        inputAriaDescribedByArray = inputAriaDescribedBy.split(' ');
      }
      /**
       * If there is a SprkHelperText element present and the `id` is not
       * present in the SprkTextarea's `ariaDescribedBy` array, add it.
       */
      if (helperTextID && !inputAriaDescribedByArray.includes(helperTextID)) {
        inputAriaDescribedByArray.push(helperTextID);
      }
      /**
       * If there is a SprkFieldError or SprkErrorContainer element present
       * and the `id` is not present in the SprkTextarea's `ariaDescribedBy`
       * array, add it.
       */
      if (
        errorContainerID &&
        !inputAriaDescribedByArray.includes(errorContainerID)
      ) {
        inputAriaDescribedByArray.push(errorContainerID);
      }
      /**
       * Once the necessary values have been added to the `ariaDescribedBy`
       * array, rejoin the values to make a string that will be passed to the
       * SprkTextarea prop.
       */
      inputAriaDescribedBy = inputAriaDescribedByArray.join(' ');
    }

    if (id && labelFor && id.length > 0 && labelFor.length > 0) {
      const childrenElements = React.Children.map(children, (child) => {
        /*
         * If the SprkLabel `htmlFor` and the textarea `id`
         * are mismatching, use the `id`
         * value to set the `htmlFor` attribute on the SprkLabel.
         * SprkTextarea and SprkLabel will always have
         * an `id` and a `htmlFor`. We check for presence (id="")
         * before checking for length to avoid running
         * .length on undefined.
         */
        if (id !== labelFor && child.type.name === SprkLabel.name) {
          return React.cloneElement(child, {
            htmlFor: id,
          });
        }

        /*
         * If there is an `inputAriaDescribedBy` value and the child element
         * is a SprkTextarea, then clone the child element and update the
         * `ariaDescribedBy` prop with the correct value.
         */
        if (inputAriaDescribedBy && child.type.name === SprkTextarea.name) {
          return React.cloneElement(child, {
            ariaDescribedBy: inputAriaDescribedBy,
          });
        }
        /**
         * If the child element does not need to be updated
         * with the `id`, `htmlFor` or `ariaDescribedBy` criteria,
         * return it without updating any props.
         */
        return child;
      });
      /**
       * Return the child elements to be rendered.
       */
      return childrenElements;
    }
    /** Return other elements. ex. <div> */
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
