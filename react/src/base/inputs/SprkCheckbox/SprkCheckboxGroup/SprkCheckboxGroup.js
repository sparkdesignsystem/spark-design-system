import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import addPropsToMatchingChildren from '../../../../utilities/helpers/addPropstoMatchingChildren/addPropsToMatchingChildren';

const SprkCheckboxGroup = (props) => {
  const {
    children,
    variant,
    idString,
    additionalClasses,
    analyticsString,
  } = props;

  let errorId = null;

  const childrenArray = React.Children.toArray(children);

  // Map through children, assign SprkErrorContainer with id/uniqueId
  // Assign errorId which will determine the ariaDescribedBy of SprkCheckboxItem
  const elementsToProcess = childrenArray.map((element) => {
    if (element.type.displayName === 'SprkErrorContainer') {
      errorId = element.props.id || uniqueId('sprk-error-container-');
      return React.cloneElement(element, { id: errorId });
    }
    return element;
  });

  const elementsToRender = addPropsToMatchingChildren(
    elementsToProcess,
    'SprkCheckboxItem',
    {
      ariaDescribedBy: errorId,
    },
  );

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
