import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkFlag = (props) => {
  const {
    additionalMediaClasses,
    additionalBodyClasses,
    bodyAdditionalClasses,
    mediaAdditionalClasses,
    children,
    media,
    isReversed,
    isStacked,
    verticalAlignment,
    idString,
    additionalClasses,
    spacing,
    ...other
  } = props;

  const flagClassNames = classnames('sprk-o-Flag', additionalClasses, {
    'sprk-o-Flag--stacked': isStacked,
    'sprk-o-Flag--rev': isReversed,
    'sprk-o-Flag--middle': verticalAlignment === 'middle',
    'sprk-o-Flag--bottom': verticalAlignment === 'bottom',
    'sprk-o-Flag--tiny': spacing === 'tiny',
    'sprk-o-Flag--small': spacing === 'small',
    'sprk-o-Flag--large': spacing === 'large',
    'sprk-o-Flag--huge': spacing === 'huge',
  });

  return (
    <div className={flagClassNames} data-id={idString} {...other}>
      <div
        className={classnames(
          'sprk-o-Flag__figure',
          mediaAdditionalClasses || additionalMediaClasses,
        )}
      >
        {media}
      </div>
      <div
        className={classnames(
          'sprk-o-Flag__body',
          bodyAdditionalClasses || additionalBodyClasses,
        )}
      >
        {children}
      </div>
    </div>
  );
};

SprkFlag.propTypes = {
  /** Content to render inside of the component. */
  children: PropTypes.node,
  /**
   * Receives a component that will
   * render media into the Flag component. Required.
   */
  media: PropTypes.element.isRequired,
  /**
   * Reverses the order of the figure and body.
   */
  isReversed: PropTypes.bool,
  /**
   * Stacks elements at `$sprk-flag-stacked-breakpoint`
   */
  isStacked: PropTypes.bool,
  /**
   * Determines how much space between the figure and the body.
   */
  spacing: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Determines the vertical alignment of content.
   */
  verticalAlignment: PropTypes.oneOf(['top', 'middle', 'bottom']),
  /**
   * Assigned to the `data-id` attribute serving as
   * a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * Deprecated: A space-separated string of classes to add to
   * the media container of the component.
   * Will be removed at next release.
   */
  additionalMediaClasses: PropTypes.string,
  /**
   * A space-separated string of classes to add to
   * the media container of the component.
   */
  mediaAdditionalClasses: PropTypes.string,
  /**
   * Deprecated: A space-separated string of classes to add to
   * the body container of the component.
   * Will be removed at next release.
   */
  additionalBodyClasses: PropTypes.string,
  /**
   * A space-separated string of classes to add to
   * the body container of the component.
   */
  bodyAdditionalClasses: PropTypes.string,
  /**
   * A space-separated string of classes to add to
   * the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkFlag;
