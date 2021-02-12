import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import addPropsToMatchingComponents from '../../../../utilities/helpers/addPropsToMatchingComponents/addPropsToMatchingComponents';

const SprkCheckboxGroup = (props) => {
  const {
    children,
    variant,
    idString,
    additionalClasses,
    analyticsString,
  } = props;

  let errorId = null;
  let helperId = null;
  let hasErrorContainer = false;
  let hasHelperText = false;

  const childrenArray = React.Children.toArray(children);
  // Map through children, assign SprkErrorContainer with id/uniqueId
  // Assign errorId which will determine the ariaDescribedBy of SprkCheckboxItem
  const elementsToProcess = childrenArray.map((element) => {
    if (element.type.name === 'SprkErrorContainer') {
      hasErrorContainer = true;
      errorId = element.props.id;
      return React.cloneElement(element, { id: errorId });
    }

    if (element.type.name === 'SprkHelperText') {
      hasHelperText = true;
      helperId = element.props.id;
      return React.cloneElement(element, { id: helperId });
    }
    return element;
  });

  // For each element, if it has grandChildren, add ariaDescribedBy to those
  let key = 0;
  let elementsToRender = elementsToProcess;
  if (hasErrorContainer || hasHelperText) {
    elementsToRender = elementsToProcess.map((element) => {
      key += 1;
      let grandChildren = null;
      if (element.props.children) {
        grandChildren = addPropsToMatchingComponents(
          element.props.children,
          ['SprkCheckboxItem'],
          {
            ariaDescribedBy: [helperId, errorId].join(' '),
          },
        );
      }

      if (element.type.name === 'SprkCheckboxItem') {
        return React.cloneElement(element, {
          ariaDescribedBy: [helperId, errorId].join(' '),
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
};

export default SprkCheckboxGroup;
