import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkFlag = (props) => {
  const {
    children,
    variant,
    idString,
    additionalClasses,
    ...other
  } = props;

  const flagClassNames = classnames(
    'sprk-o-Flag',
    'sprk-o-Flag--stacked',
    additionalClasses,
    {
      'sprk-o-Flag--rev': variant === 'reverse',
    },
  );

  return (
    <div className={flagClassNames} data-id={idString} {...other}>
      {children}
    </div>
  );
};

SprkFlag.propTypes = {
  /**
   * Determines the style of dictionary component.
   * Supplying no value will cause the base styles to be used.
   */
  variant: PropTypes.oneOf(['reverse']),
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkFlag;
