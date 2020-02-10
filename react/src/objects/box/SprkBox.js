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
    'sprk-o-Box--misc-a': spacing === 'misc-a',
    'sprk-o-Box--misc-b': spacing === 'misc-b',
    'sprk-o-Box--misc-c': spacing === 'misc-c',
    'sprk-o-Box--misc-d': spacing === 'misc-d',
    'sprk-o-Box--inset-short-tiny': spacing === 'inset-short-tiny',
    'sprk-o-Box--inset-short-small': spacing === 'inset-short-small',
    'sprk-o-Box--inset-short-medium': spacing === 'inset-short-medium',
    'sprk-o-Box--inset-short-large': spacing === 'inset-short-large',
    'sprk-o-Box--inset-short-huge': spacing === 'inset-short-huge',
    'sprk-o-Box--inset-tall-tiny': spacing === 'inset-tall-tiny',
    'sprk-o-Box--inset-tall-small': spacing === 'inset-tall-small',
    'sprk-o-Box--inset-tall-medium': spacing === 'inset-tall-medium',
    'sprk-o-Box--inset-tall-large': spacing === 'inset-tall-large',
    'sprk-o-Box--inset-tall-huge': spacing === 'inset-tall-huge',
  });

  return (
    <div className={classNames} data-id={idString} {...other}>
      {children}
    </div>
  );

};

SprkBox.defaultProps = {
  children: '',
  spacing: '',
  idString: '',
  additionalClasses: '',
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

export default SprkBox;