import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SprkLabel from '../SprkLabel/SprkLabel';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';
import SprkFieldError from '../SprkFieldError/SprkFieldError';
import SprkHelperText from '../SprkHelperText/SprkHelperText';
import isSprkInput from '../../../utilities/helpers/isSprkInput/isSprkInput';

class SprkInputContainer extends Component {
  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
  }

  /**
   * A function that is run when the component renders.
   * It processes and updates the children & grandchildren that
   * are passed into the SprkInputContainer to add necessary
   * a11y considerations.
   * `htmlFor` and `id` are checked and updated to match,
   * if they don't match initially.
   * `ariaDescribedBy` is checked and updated on the `input`
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
     * Checks each child element and grandchild element to
     * store the provided `ariaDescribedBy` on the `input`,
     * `id` of the `SprkFieldError`, `SprkErrorContainer`,
     * `SprkHelperText`, and `htmlFor` of the `SprkLabel` in
     * variables for processing.
     */
    React.Children.forEach(children, (child) => {
      /**
       * Add this check in case the child is being
       * conditionally rendered.
       * If the child is not rendered but returns a React fragment the
       * child will return null and break without this check.
       */
      if (child !== null) {
        /**
         * If the child element is a `SprkInput`, then the `id`
         * & `ariaDescribedBy` are stored for later use.
         */
        if (isSprkInput(child)) {
          id = child.props.id;
          inputAriaDescribedBy = child.props.ariaDescribedBy;
        }
        /**
         * If the child element is a `SprkLabel`, then the `htmlFor`
         * is stored for later use.
         */
        if (child.type && child.type.name === SprkLabel.name) {
          labelFor = child.props.htmlFor;
        }
        /**
         * If the child element is a `SprkFieldError` or `SprkErrorContainer`,
         * then the `id` is stored for later use.
         * `SprkFieldError` is the newer, preferred component and
         * `SprkErrorContainer` is going to be deprecated. If they are both
         * present, then `SprkFieldError` will take precedent.
         */
        if (
          child.type &&
          (child.type.name === SprkFieldError.name ||
            child.type.name === SprkErrorContainer.name)
        ) {
          errorContainerID = child.props.id;
        }
        /**
         * If the child element is a `SprkHelperText`,
         * then the `id` is stored for later use.
         */
        if (child.type && child.type.name === SprkHelperText.name) {
          helperTextID = child.props.id;
        }
        /**
         * If the child element has it's own children and it's an
         * icon-container, check the grandchildren to get the necessary values.
         */
        if (
          child.props.children &&
          child.props.className &&
          child.props.className.includes(
            'sprk-b-InputContainer__icon-container',
          )
        ) {
          React.Children.forEach(child.props.children, (grandchild) => {
            /**
             * Add this check in case the child is being
             * conditionally rendered.
             * If the child is not rendered but returns a React fragment the
             * grandchild will return null and break without this check.
             */
            if (grandchild !== null) {
              /**
               * If the grandchild element is a `SprkInput`, then the `id`
               * & `ariaDescribedBy` are stored for later use.
               */
              if (isSprkInput(grandchild)) {
                id = grandchild.props.id;
                inputAriaDescribedBy = grandchild.props.ariaDescribedBy;
              }
              /**
               * If the grandchild element is a `SprkLabel`, then the `htmlFor`
               * is stored for later use.
               */
              if (grandchild.type && grandchild.type.name === SprkLabel.name) {
                labelFor = grandchild.props.htmlFor;
              }
            }
          });
        }
      }
    });
    /**
     * If there is a `SprkHelperText`, `SprkFieldError`, or `SprkErrorContainer`
     * present in the children elements then start the `ariaDescribedBy`
     * processing.
     */
    if (helperTextID || errorContainerID) {
      /**
       * If an `ariaDescribedBy` was provided on the `SprkInput`,
       * then split the string into an array.
       */
      if (inputAriaDescribedBy) {
        inputAriaDescribedByArray = inputAriaDescribedBy.split(' ');
      }
      /**
       * If there is a `SprkHelperText` element present and the `id` is not
       * present in the `SprkInput`'s `ariaDescribedBy` array, add it.
       */
      if (helperTextID && !inputAriaDescribedByArray.includes(helperTextID)) {
        inputAriaDescribedByArray.push(helperTextID);
      }
      /**
       * If there is a `SprkFieldError` or `SprkErrorContainer` element present
       * and the `id` is not present in the SprkInput's `ariaDescribedBy` array,
       * add it.
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
       * `SprkInput` prop.
       */
      inputAriaDescribedBy = inputAriaDescribedByArray.join(' ');
    }

    /**
     * `SprkInput` and `SprkLabel` will always have
     * an `id` and a `htmlFor`. We check for presence (id="")
     * before checking for length to avoid running
     * .length on undefined.
     */
    if (id && labelFor && id.length > 0 && labelFor.length > 0) {
      const childrenElements = React.Children.map(children, (child) => {
        /**
         * Add this check in case the child is being
         * conditionally rendered.
         * If the child is not rendered but returns a React fragment the
         * child will return null and break without this check.
         */
        if (child !== null) {
          /*
           * If the `SprkLabel` `htmlFor` and the `input` `id`
           * are mismatching, use the `id`
           * value to set the `htmlFor` attribute on the `SprkLabel`.
           */
          if (id !== labelFor && child.type.name === SprkLabel.name) {
            return React.cloneElement(child, {
              htmlFor: id,
            });
          }

          /*
           * If there is an `inputAriaDescribedBy` value and the child element
           * is a `SprkInput`, then clone the child element and update the
           * `ariaDescribedBy` prop with the correct value.
           */
          if (inputAriaDescribedBy && isSprkInput(child)) {
            return React.cloneElement(child, {
              ariaDescribedBy: inputAriaDescribedBy,
            });
          }
          /**
           * If the child element has it's own children and it's an
           * icon-container, map the grandchildren to update the values.
           */
          if (
            child.props.children &&
            child.props.className &&
            child.props.className.includes(
              'sprk-b-InputContainer__icon-container',
            )
          ) {
            const grandchildrenElements = React.Children.map(
              child.props.children,
              (grandchild) => {
                /**
                 * Add this check in case the child is being
                 * conditionally rendered.
                 * If the child is not rendered but returns a React fragment the
                 * grandchild will return null and break without this check.
                 */
                if (grandchild !== null) {
                  /*
                   * If the grandchild is a `SprkLabel` and the `htmlFor` and
                   * the `input` `id` are mismatching, use the `id`
                   * value to set the `htmlFor` attribute on the `SprkLabel`.
                   */
                  if (
                    id !== labelFor &&
                    grandchild.type.name === SprkLabel.name
                  ) {
                    return React.cloneElement(grandchild, {
                      htmlFor: id,
                    });
                  }
                  /*
                   * If there is an `inputAriaDescribedBy` value and
                   * the grandchild element is a `SprkInput`, then clone
                   * the grandchild element and update the `ariaDescribedBy`
                   * prop with the correct value.
                   */
                  if (inputAriaDescribedBy && isSprkInput(grandchild)) {
                    return React.cloneElement(grandchild, {
                      ariaDescribedBy: inputAriaDescribedBy,
                    });
                  }
                  /**
                   * If the grandchild element does not need to be updated
                   * with the `id`, `htmlFor` or `ariaDescribedBy` criteria,
                   * return it without updating any props.
                   */
                  return grandchild;
                }
                return grandchild;
              },
            );
            /**
             * If there was an icon-container, return the grandchildren
             * elements that were mapped through.
             */
            return React.cloneElement(child, {
              children: grandchildrenElements,
            });
          }
          /**
           * If the child element does not need to be updated
           * with the `id`, `htmlFor` or `ariaDescribedBy` criteria,
           * return it without updating any props.
           */
          return child;
        }
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
      children,
      idString,
      variant,
      ...rest
    } = this.props;

    return (
      <div
        data-analytics={analyticsString}
        data-id={idString}
        className={classNames('sprk-b-InputContainer', additionalClasses, {
          'sprk-b-InputContainer--huge': variant === 'huge',
        })}
        {...rest}
      >
        {this.renderChildren()}
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
