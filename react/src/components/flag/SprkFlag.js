import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkFlag = (props) => {
  const {
    children,
    media,
    isReverse,
    verticalAlignment,
    idString,
    additionalClasses,
    spacing,
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
      'sprk-o-Flag--tiny': spacing === 'tiny',
      'sprk-o-Flag--small': spacing === 'small',
      'sprk-o-Flag--large': spacing === 'large',
      'sprk-o-Flag--huge': spacing === 'huge',
    },
  );

  return (
    <div className={flagClassNames} data-id={idString} {...other}>
      <div class="sprk-o-Flag__figure">
        {media}
      </div>
      <div class="sprk-o-Flag__body">
        {children}
      </div>
    </div>
  );
};

SprkFlag.propTypes = {
  /**
   * Recieved a component that is the media.
   */
  media: PropTypes.element.isRequired,
  /**
   * Reverses the order of the figure and body.
   */
  isReverse: PropTypes.bool,
  /**
   * Determines how much space between the figure and the body.
   */
  spacing: PropTypes.oneOf(['tiny', 'small', 'large', 'huge']),
  /**
   * Determines the vertical alignment of content.
   */
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
