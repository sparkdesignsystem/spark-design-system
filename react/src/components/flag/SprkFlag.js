import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkFlag = (props) => {
  const {
    children,
    isReverse,
    verticalAlignment,
    idString,
    additionalClasses,
    ...other
  } = props;



  const flagClassNames = classnames(
    'sprk-o-Flag',
    'sprk-o-Flag--stacked',
    additionalClasses,
    {
      'sprk-o-Flag--rev': isReverse,
      'sprk-o-Flag--middle': verticalAlignment === 'middle',
      'sprk-o-Flag--bottom': verticalAlignment === 'bottom',
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
   * Reverses the order of the figure and body.
   */
  isReverse: PropTypes.bool,
  verticalAlignment: PropTypes.oneOf(['middle', 'bottom']),
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
