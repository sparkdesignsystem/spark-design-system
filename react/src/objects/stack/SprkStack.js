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
    'sprk-o-Stack--misc-a': itemSpacing === 'misc-a',
    'sprk-o-Stack--misc-b': itemSpacing === 'misc-b',
    'sprk-o-Stack--misc-c': itemSpacing === 'misc-c',
    'sprk-o-Stack--misc-d': itemSpacing === 'misc-d',
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
    '',
  ]),
  /**
   * Value assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  idString: PropTypes.string,
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  additionalClasses: PropTypes.string,
};

export default SprkStack;
