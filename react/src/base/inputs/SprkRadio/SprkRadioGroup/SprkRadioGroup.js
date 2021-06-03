import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SprkErrorContainer from '../../SprkErrorContainer/SprkErrorContainer';
import SprkFieldError from '../../SprkFieldError/SprkFieldError';
import SprkHelperText from '../../SprkHelperText/SprkHelperText';
import SprkFieldset from '../../SprkFieldset/SprkFieldset';

class SprkRadioGroup extends Component {
  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
  }

  /**
   * A function that is run when the component renders.
   * It processes and updates the children & grandchildren that
   * are passed into the SprkRadioGroup to add necessary
   * a11y considerations.
   * `ariaDescribedby` is checked and updated on the SprkFieldset
   * element to include the `id` of the `SprkHelperText`,
   * `SprkFieldError`, and `SprkErrorContainer` if present among
   * the children and grandchildren.
   * @returns {object} Processed and updated children elements
   */
  renderChildren() {
    const { children } = this.props;
    let errorContainerID;
    let helperTextID;
    let ariaDescribedByArray = [];
    let fieldsetAriaDescribedBy;

    /*
     * Checks each child element and grandchild element to
     * store the provided `ariaDescribedby` on the SprkFieldset,
     * `id` of the SprkFieldError, SprkErrorContainer,
     * and SprkHelperText in variables for processing.
     */
    React.Children.forEach(children, (child) => {
      /**
       * Add this check in case the child is being
       * conditionally rendered.
       * If the child is not rendered but returns a React fragment the
       * child will return null and break without this check.
       */
      if (child === null) {
        return;
      }
      /**
       * If the child element is a SprkFieldset, then the
       * `ariaDescribedBy` is stored for later use.
       */
      if (child.type && child.type.name === SprkFieldset.name) {
        fieldsetAriaDescribedBy = child.props.ariaDescribedBy;
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
      /**
       * If the child element has it's own children,
       * check the grandchildren to get the necessary values.
       */
      if (child.props && child.props.children) {
        React.Children.forEach(child.props.children, (grandchild) => {
          /**
           * Add this check in case the grandchild is being
           * conditionally rendered.
           * If the grandchild is not rendered but returns a React fragment the
           * grandchild will return null and break without this check.
           */
          if (grandchild === null) {
            return;
          }
          /**
           * If the grandchild element is a SprkFieldset, then the
           * `ariaDescribedBy` is stored for later use.
           */
          if (grandchild.type && grandchild.type.name === SprkFieldset.name) {
            fieldsetAriaDescribedBy = grandchild.props.ariaDescribedBy;
          }
          /**
           * If the grandchild element is a SprkFieldError or
           * SprkErrorContainer, then the `id` is stored for later use.
           */
          if (
            grandchild.type &&
            (grandchild.type.name === SprkFieldError.name ||
              grandchild.type.name === SprkErrorContainer.name)
          ) {
            errorContainerID = grandchild.props.id;
          }
          /**
           * If the grandchild element is a SprkHelperText,
           * then the `id` is stored for later use.
           */
          if (grandchild.type && grandchild.type.name === SprkHelperText.name) {
            helperTextID = grandchild.props.id;
          }
        });
      }
    });
    /**
     * If there is a SprkHelperText, SprkFieldError, or SprkErrorContainer
     * present in the children elements then start the `ariaDescribedBy`
     * processing.
     */
    if (helperTextID || errorContainerID) {
      /**
       * If an `ariaDescribedBy` was provided on the SprkFieldset,
       * then split the string into an array.
       */
      if (fieldsetAriaDescribedBy) {
        ariaDescribedByArray = fieldsetAriaDescribedBy.split(' ');
      }
      /**
       * If there is a SprkHelperText element present and the `id` is not
       * present in the SprkFieldset's `ariaDescribedBy` array, add it.
       */
      if (helperTextID && !ariaDescribedByArray.includes(helperTextID)) {
        ariaDescribedByArray.push(helperTextID);
      }
      /**
       * If there is a SprkFieldError or SprkErrorContainer element present
       * and the `id` is not present in the SprkFieldset's `ariaDescribedBy`
       * array, add it.
       */
      if (
        errorContainerID &&
        !ariaDescribedByArray.includes(errorContainerID)
      ) {
        ariaDescribedByArray.push(errorContainerID);
      }
      /**
       * Once the necessary values have been added to the `ariaDescribedBy`
       * array, rejoin the values to make a string that will be passed to the
       * SprkFieldset prop.
       */
      fieldsetAriaDescribedBy = ariaDescribedByArray.join(' ');
    }
    /*
     * If there is an `fieldsetAriaDescribedBy` value map through
     * the children to update the SprkFieldset `ariaDescribedBy` prop.
     */
    if (fieldsetAriaDescribedBy) {
      const childrenElements = React.Children.map(children, (child) => {
        /**
         * Add this check in case the child is being
         * conditionally rendered.
         * If the child is not rendered but returns a React fragment the
         * child will return null and break without this check.
         */
        if (child === null) {
          return child;
        }
        /**
         * If the child element is a SprkFieldset, then clone the child
         * element and update the `ariaDescribedBy` prop with the correct value.
         */
        if (child.type && child.type.name === SprkFieldset.name) {
          return React.cloneElement(child, {
            ariaDescribedBy: fieldsetAriaDescribedBy,
          });
        }
        /**
         * If the child element has it's own children,
         * map the grandchildren to update the values.
         */
        if (child.props.children) {
          const grandchildrenElements = React.Children.map(
            child.props.children,
            (grandchild) => {
              /**
               * Add this check in case the grandchild is being
               * conditionally rendered.
               * If the grandchild is not rendered but returns a React fragment
               * the grandchild will return null and break without this check.
               */
              if (grandchild === null) {
                return grandchild;
              }
              /**
               * If the grandchild element is a SprkFieldset,
               * then clone the grandchild element and update
               * the `ariaDescribedBy` prop with the correct value.
               */
              if (
                grandchild.type &&
                grandchild.type.name === SprkFieldset.name
              ) {
                return React.cloneElement(grandchild, {
                  ariaDescribedBy: fieldsetAriaDescribedBy,
                });
              }
              /**
               * If the grandchild element does not need to be updated
               * with the `ariaDescribedBy` criteria,
               * return it without updating any props.
               */
              return grandchild;
            },
          );
          /**
           * If there were grandchildren, return the child with the
           * processed grandchildren elements.
           */
          return React.cloneElement(child, {
            children: grandchildrenElements,
          });
        }
        /**
         * If the child element does not need to be updated
         * with the `ariaDescribedBy` criteria,
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
      variant,
      idString,
      additionalClasses,
      analyticsString,
      ...rest
    } = this.props;

    return (
      <div
        className={classnames('sprk-b-InputContainer', additionalClasses, {
          'sprk-b-InputContainer--huge': variant === 'huge',
        })}
        data-analytics={analyticsString}
        data-id={idString}
        {...rest}
      >
        {this.renderChildren()}
      </div>
    );
  }
}

SprkRadioGroup.propTypes = {
  /** Content to render inside of the component. */
  children: PropTypes.node,
  /**
   * Determines the style of radio.
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
};

export default SprkRadioGroup;
