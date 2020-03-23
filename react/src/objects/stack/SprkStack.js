import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkStack = (props) => {
  const {
    children,
    itemSpacing,
    splitAt,
    additionalClasses,
    idString,
    ...other
  } = props;

  const classNames = classnames('sprk-o-Stack', additionalClasses, {
    'sprk-o-Stack--tiny': itemSpacing === 'tiny',
    'sprk-o-Stack--small': itemSpacing === 'small',
    'sprk-o-Stack--medium': itemSpacing === 'medium',
    'sprk-o-Stack--large': itemSpacing === 'large',
    'sprk-o-Stack--huge': itemSpacing === 'huge',
    'sprk-o-Stack--misc-a': itemSpacing === 'misc-a' || 'miscA',
    'sprk-o-Stack--misc-b': itemSpacing === 'misc-b' || 'miscB',
    'sprk-o-Stack--misc-c': itemSpacing === 'misc-c' || 'miscC',
    'sprk-o-Stack--misc-d': itemSpacing === 'misc-d' || 'miscD',
    'sprk-o-Stack--split@xxs': splitAt === 'extraTiny',
    'sprk-o-Stack--split@xs': splitAt === 'tiny',
    'sprk-o-Stack--split@s': splitAt === 'small',
    'sprk-o-Stack--split@m': splitAt === 'medium',
    'sprk-o-Stack--split@l': splitAt === 'large',
    'sprk-o-Stack--split@xl': splitAt === 'huge',
  });

  return (
    <div className={classNames} data-id={idString} {...other}>
      {children}
    </div>
  );
};

SprkStack.defaultProps = {
  children: '',
  splitAt: '',
  itemSpacing: '',
  idString: '',
  additionalClasses: '',
};

SprkStack.propTypes = {
  children: PropTypes.node,
  /**
   * Determines when the layout will switch
   * `flex-direction` from `column` to `row` based on
   * breakpoint.
   */
  splitAt: PropTypes.oneOf([
    'extraTiny',
    'tiny',
    'small',
    'medium',
    'large',
    'huge',
    '',
  ]),
  /**
   * Determines spacing between items.
   */
  itemSpacing: PropTypes.oneOf([
    'tiny',
    'small',
    'medium',
    'large',
    'huge',
    'misc-a',
    'misc-b',
    'misc-c',
    'misc-d',
    'miscA',
    'miscB',
    'miscC',
    'miscD',
    '',
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

export default SprkStack;
