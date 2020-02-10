import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkBox = (props) => {
  const {
    children,
    spacingSize,
    additionalClasses,
    idString,
    ...other
  } = props;

  const classNames = classnames('sprk-o-Box', additionalClasses, {
    'sprk-o-Box--flush': spacingSize === 'flush',
    'sprk-o-Box--tiny': spacingSize === 'tiny',
    'sprk-o-Box--small': spacingSize === 'small',
    'sprk-o-Box--large': spacingSize === 'large',
    'sprk-o-Box--huge': spacingSize === 'huge',
    'sprk-o-Box--misc-a': spacingSize === 'misc-a',
    'sprk-o-Box--misc-b': spacingSize === 'misc-b',
    'sprk-o-Box--misc-c': spacingSize === 'misc-c',
    'sprk-o-Box--misc-d': spacingSize === 'misc-d',
    'sprk-o-Box--inset-short-tiny': spacingSize === 'inset-short-tiny',
    'sprk-o-Box--inset-short-small': spacingSize === 'inset-short-small',
    'sprk-o-Box--inset-short-medium': spacingSize === 'inset-short-medium',
    'sprk-o-Box--inset-short-large': spacingSize === 'inset-short-large',
    'sprk-o-Box--inset-short-huge': spacingSize === 'inset-short-huge',
    'sprk-o-Box--inset-tall-tiny': spacingSize === 'inset-tall-tiny',
    'sprk-o-Box--inset-tall-small': spacingSize === 'inset-tall-small',
    'sprk-o-Box--inset-tall-medium': spacingSize === 'inset-tall-medium',
    'sprk-o-Box--inset-tall-large': spacingSize === 'inset-tall-large',
    'sprk-o-Box--inset-tall-huge': spacingSize === 'inset-tall-huge',
  });

  return (
    <div className={classNames} data-id={idString} {...other}>
      {children}
    </div>
  );

};

SprkBox.defaultProps = {
  children: '',
  spacingSize: '',
  idString: '',
  additionalClasses: '',
};

SprkBox.propTypes = {
  children: PropTypes.node,
  /**
   * Determines the padding size.
   */
  spacingSize: PropTypes.oneOf([
    'flush',
    'tiny',
    'small',
    'large',
    'huge',
    'inset-short-tiny',
    'inset-short-small',
    'inset-short-medium',
    'inset-short-large',
    'inset-short-huge',
    'inset-tall-tiny',
    'inset-tall-small',
    'inset-tall-medium',
    'inset-tall-large',
    'inset-tall-huge',
    'misc-a',
    'misc-b',
    'misc-c',
    'misc-d',
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