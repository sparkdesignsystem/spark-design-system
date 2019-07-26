import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

const SprkTextareaCheck = props => {
  const {
    analyticsString,
    children,
    errorContainerId,
    type,
    id,
    idString,
    leadingIcon,
    textIcon,
    hiddenLabel,
    valid,
    ...rest
  } = props;
  const Element = type === 'textarea' ? 'textarea' : 'input';

  return (
    <Element
      className={classNames('sprk-u-Width-100', {
        'sprk-b-TextArea': type === 'textarea',
        'sprk-b-TextInput': type !== 'textarea',
        'sprk-b-TextInput--label-hidden': type === 'hugeTextInput' && hiddenLabel,
        'sprk-b-TextInput--error': type !== 'textarea' && !valid,
        'sprk-b-TextInput--has-svg-icon':
          type !== 'textarea' && leadingIcon.length > 0,
        'sprk-b-TextInput--has-text-icon': type !== 'textarea' && textIcon,
      })}
      type={type}
      htmlFor={id}
      data-id={idString}
      data-analytics={analyticsString}
      aria-invalid={!valid}
      aria-describedby={errorContainerId}
      {...rest}
    >
      {children}
    </Element>
  );
};

SprkTextareaCheck.propTypes = {
  analyticsString: propTypes.string,
  errorContainerId: propTypes.string,
  type: propTypes.string,
  id: propTypes.string,
  idString: propTypes.string,
  leadingIcon: propTypes.string,
  textIcon: propTypes.bool,
  valid: propTypes.bool,
};

export default SprkTextareaCheck;
