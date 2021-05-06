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

  renderChildren() {
    const { children } = this.props;
    let errorContainerID;
    let helperTextID;
    let ariaDescribedByArray = [];
    let fieldsetAriaDescribedBy;

    /*
     * Store references to errorContainerID, helperTextID,
     * & fieldset ariaDescribedBy.
     */
    React.Children.forEach(children, (child) => {
      if (child.type.name === SprkFieldset.name) {
        fieldsetAriaDescribedBy = child.props.ariaDescribedBy;
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
      // If the child has it's own children
      // map through them to get values.
      if (child.props && child.props.children) {
        React.Children.forEach(child.props.children, (grandchild) => {
          if (grandchild.type) {
            if (grandchild.type.name === SprkFieldset.name) {
              fieldsetAriaDescribedBy = grandchild.props.ariaDescribedBy;
            }
            if (
              grandchild.type.name === SprkFieldError.name ||
              grandchild.type.name === SprkErrorContainer.name
            ) {
              errorContainerID = grandchild.props.id;
            }
            if (grandchild.type.name === SprkHelperText.name) {
              helperTextID = grandchild.props.id;
            }
          }
        });
      }
    });
    /* Check to see if the errorContainerID
     * and helperTextID are in the ariaDescribedByArray.
     * If they aren't, add it to the array.
     */
    if (helperTextID || errorContainerID) {
      if (fieldsetAriaDescribedBy) {
        ariaDescribedByArray = fieldsetAriaDescribedBy.split(' ');
      }
      if (helperTextID && !ariaDescribedByArray.includes(helperTextID)) {
        ariaDescribedByArray.push(helperTextID);
      }
      if (
        errorContainerID &&
        !ariaDescribedByArray.includes(errorContainerID)
      ) {
        ariaDescribedByArray.push(errorContainerID);
      }
      fieldsetAriaDescribedBy = ariaDescribedByArray.join(' ');
    }
    if (fieldsetAriaDescribedBy) {
      const childrenElements = React.Children.map(children, (child) => {
        if (child.type && child.type.name === SprkFieldset.name) {
          return React.cloneElement(child, {
            ariaDescribedBy: fieldsetAriaDescribedBy,
          });
        }
        if (child.props.children) {
          const grandchildrenElements = React.Children.map(
            child.props.children,
            (grandchild) => {
              if (
                grandchild.type &&
                grandchild.type.name === SprkFieldset.name
              ) {
                return React.cloneElement(grandchild, {
                  ariaDescribedBy: fieldsetAriaDescribedBy,
                });
              }
              return grandchild;
            },
          );
          return React.cloneElement(child, {
            children: grandchildrenElements,
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
