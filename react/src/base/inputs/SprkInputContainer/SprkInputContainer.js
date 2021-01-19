import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SprkLabel from '../SprkLabel/SprkLabel';
import SprkInput from '../SprkInput/SprkInput';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';

class SprkInputContainer extends Component {
  constructor(props) {
    super(props);
    this.renderChildren = this.renderChildren.bind(this);
  }

  renderChildren() {
    const { children } = this.props;
    let id;
    let labelFor;
    let errorContainerID;

    /*
     * Store references to id, for
     * and errorContainerID.
     */
    React.Children.forEach(children, (child) => {
      if (child.type.name === SprkInput.name) {
        id = child.props.id;
      }
      if (child.type.name === SprkLabel.name) {
        labelFor = child.props.htmlFor;
      }
      if (child.type.name === SprkErrorContainer.name) {
        errorContainerID = child.props.id;
      }
    });

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
        if (id !== labelFor) {
          if (child.type.name === SprkLabel.name) {
            return React.cloneElement(child, {
              htmlFor: id,
            });
          }
        }

        /*
         * If there is an error container
         * with an id then match the aria-describedby
         * on the input to the id on the
         * error container.
         */
        if (
          errorContainerID &&
          child.type.name === SprkInput.name &&
          child.props.ariaDescribedBy !== errorContainerID
        ) {
          return React.cloneElement(child, {
            ariaDescribedBy: errorContainerID,
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
