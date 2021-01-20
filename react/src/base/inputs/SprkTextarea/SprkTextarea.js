import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

const SprkTextarea = (props) => {
  const {
    additionalClasses,
    analyticsString,
    children,
    forwardedRef,
    idString,
    isDisabled,
    id,
    ariaDescribedBy,
    isValid,
    ...rest
  } = props;

  return (
    <textarea
      className={classNames('sprk-b-TextArea', additionalClasses)}
      id={id}
      disabled={isDisabled}
      ref={forwardedRef}
      data-id={idString}
      data-analytics={analyticsString}
      aria-invalid={!isValid}
      aria-describedby={ariaDescribedBy}
      {...rest}
    >
      {children}
    </textarea>
  );
};

SprkTextarea.propTypes = {
  /**
   * A space-separated string of classes to add
   * to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving as a
   * unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Content to render inside of the textarea.
   */
  children: PropTypes.node,
  /**
   * A ref passed in will be attached to the textarea
   * element of the rendered component.
   */
  forwardedRef: PropTypes.shape(),
  /**
   * Assigned to the `data-id` attribute serving as a
   * unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Determines whether to render the
   * component in the valid or the error state.
   */
  isValid: PropTypes.bool,
  /**
   * Assigned to the `id` attribute
   * of the rendered textarea element.
   * A custom ID will
   * be added if this is not supplied.
   */
  id: PropTypes.string,
  /**
   * Assigned to the `aria-describedby`
   * attribute of the textarea used
   * to create relationships between the
   * input and error container.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * Will render the component in it's disabled state.
   */
  isDisabled: PropTypes.bool,
};

SprkTextarea.defaultProps = {
  forwardedRef: React.createRef(),
  isValid: true,
  id: uniqueId('sprk-'),
};

export default SprkTextarea;
