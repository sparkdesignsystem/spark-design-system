import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkBox = (props) => {
  const {
    children,
    spacing,
    additionalClasses,
    idString,
    ...other
  } = props;

  const classNames = classnames('sprk-o-Box', additionalClasses, {
    'sprk-o-Box--flush': spacing === 'flush',
    'sprk-o-Box--tiny': spacing === 'tiny',
    'sprk-o-Box--small': spacing === 'small',
    'sprk-o-Box--large': spacing === 'large',
    'sprk-o-Box--huge': spacing === 'huge',
    'sprk-o-Box--misc-a': spacing === 'miscA',
    'sprk-o-Box--misc-b': spacing === 'miscB',
    'sprk-o-Box--misc-c': spacing === 'miscC',
    'sprk-o-Box--misc-d': spacing === 'miscD',
    'sprk-o-Box--inset-short-tiny': spacing === 'insetShortTiny',
    'sprk-o-Box--inset-short-small': spacing === 'insetShortSmall',
    'sprk-o-Box--inset-short-medium': spacing === 'insetShortMedium',
    'sprk-o-Box--inset-short-large': spacing === 'insetShortLarge',
    'sprk-o-Box--inset-short-huge': spacing === 'insetShortHuge',
    'sprk-o-Box--inset-tall-tiny': spacing === 'insetTallTiny',
    'sprk-o-Box--inset-tall-small': spacing === 'insetTallSmall',
    'sprk-o-Box--inset-tall-medium': spacing === 'insetTallMedium',
    'sprk-o-Box--inset-tall-large': spacing === 'insetTallLarge',
    'sprk-o-Box--inset-tall-huge': spacing === 'insetTallHuge',
  });

  return (
    <div className={classNames} data-id={idString} {...other}>
      {children}
    </div>
  );
};

SprkBox.propTypes = {
  children: PropTypes.node,
  /**
   * Determines the padding size.
   */
  spacing: PropTypes.oneOf([
    'flush',
    'tiny',
    'small',
    'large',
    'huge',
    'insetShortTiny',
    'insetShortSmall',
    'insetShortMedium',
    'insetShortLarge',
    'insetShortHuge',
    'insetTallTiny',
    'insetTallSmall',
    'insetTallMedium',
    'insetTallLarge',
    'insetTallHuge',
    'miscA',
    'miscB',
    'miscC',
    'miscD',
  ]),
  /**
   * Assigned to the `data-id` attribute serving as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * A space-separated string of classes to add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkBox;
