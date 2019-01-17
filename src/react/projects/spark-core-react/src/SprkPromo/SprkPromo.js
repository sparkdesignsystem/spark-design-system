import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkPromo = (props) => {
  const { variant, additionalClasses } = props;
  const classNames = classnames(
    'sprk-b-Promo',
    additionalClasses, {
    },
  );

  return (
    <div className={classNames}>
    </div>
  );
}

SprkPromo.propTypes = {
  // The link variant that determines the class names
  variant: PropTypes.oneOf(['base', 'asdf']),
  // Any additional classes to add to the link
  additionalClasses: PropTypes.string
};

export default SprkPromo;