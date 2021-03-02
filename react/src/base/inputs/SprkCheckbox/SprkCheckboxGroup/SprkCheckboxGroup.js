import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import addPropsToMatchingComponents from '../../../../utilities/helpers/addPropsToMatchingComponents/addPropsToMatchingComponents';

const SprkCheckboxGroup = (props) => {
  const {
    children,
    variant,
    idString,
    additionalClasses,
    analyticsString,
    ariaDescribedBy,
    ...rest
  } = props;

  let errorId;
  let helperId;
  let inputAriaDescribedByArray = [];
  if (ariaDescribedBy) {
    inputAriaDescribedByArray = ariaDescribedBy.split(' ');
  }
  const childrenArray = React.Children.toArray(children);
  // Get the errorId and helperId.
  // If they don't exist in the ariaDescribedBy, add them.
  const elementsToProcess = childrenArray.map((element) => {
    if (
      element.type.name === 'SprkFieldError' ||
      element.type.name === 'SprkErrorContainer'
    ) {
      errorId = element.props.id;
      if (!inputAriaDescribedByArray.includes(errorId)) {
        inputAriaDescribedByArray.push(errorId);
      }
      return React.cloneElement(element);
    }

    if (element.type.name === 'SprkHelperText') {
      helperId = element.props.id;
      if (!inputAriaDescribedByArray.includes(helperId)) {
        inputAriaDescribedByArray.push(helperId);
      }
      return React.cloneElement(element);
    }
    return element;
  });

  const inputAriaDescribedBy =
    inputAriaDescribedByArray.length > 0
      ? inputAriaDescribedByArray.join(' ')
      : null;

  // For each element, if it has grandChildren, add ariaDescribedBy to those
  let key = 0;
  let elementsToRender = elementsToProcess;
  if (errorId || helperId) {
    elementsToRender = elementsToProcess.map((element) => {
      key += 1;
      let grandChildren = null;
      if (element.props.children) {
        grandChildren = addPropsToMatchingComponents(
          element.props.children,
          'SprkCheckboxItem',
        );
      }

      if (element.type.name === 'SprkCheckboxItem') {
        return React.cloneElement(element, {
          key: `sprk-checkbox-item-${key}`,
          children: grandChildren || element.children,
        });
      }

      return React.cloneElement(element, {
        key: `sprk-checkbox-outer-item-${key}`,
        children: grandChildren || element.children,
      });
    });
  }

  return (
    <div
      className={classnames('sprk-b-InputContainer', additionalClasses, {
        'sprk-b-InputContainer--huge': variant === 'huge',
      })}
      data-analytics={analyticsString}
      data-id={idString}
      aria-describedby={inputAriaDescribedBy}
      {...rest}
    >
      {elementsToRender}
    </div>
  );
};

SprkCheckboxGroup.propTypes = {
  /** Content to render inside of the component. */
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
   * Assigned to the `aria-describedby`
   * attribute. Used to create
   * relationships between the
   * component and text that describes it,
   * such as helper text or an error field.
   */
  ariaDescribedBy: PropTypes.string,
};

export default SprkCheckboxGroup;
