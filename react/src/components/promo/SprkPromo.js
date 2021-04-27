import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkPromo = (props) => {
  const {
    additionalClasses,
    idString,
    isFlag,
    hasBorder,
    children,
    ...other
  } = props;

  return (
    <div
      className={classnames(
        'sprk-c-Promo',
        'sprk-o-Stack',
        { 'sprk-c-Promo--flag': isFlag },
        { 'sprk-c-Promo--bordered': hasBorder },
        additionalClasses,
      )}
      data-id={idString}
      {...other}
    >
      {children}
    </div>
  );
};

SprkPromo.propTypes = {
  /**
   * The content to render inside the Promo.
   */
  children: PropTypes.node,
  /**
   * A space-separated string of classes to
   * add to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving
   * as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  /**
   * If `true`, the Flag Promo variant styles
   * will be added to the component.
   */
  isFlag: PropTypes.bool,
  /**
   * If `true`, the Promo will be rendered
   * with a border.
   */
  hasBorder: PropTypes.bool,
};

SprkPromo.defaultProps = {
  isFlag: false,
  hasBorder: false,
};

export default SprkPromo;
