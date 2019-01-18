import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SprkSpinner } from '@sparkdesignsystem/spark-core-react';

const SprkButton = ({ additionalClasses, children, href, idString, loading, variant, ...rest}) => {
  const TagName = href ? 'a' : 'button';

  return (
    <TagName
      className={
        classnames(
          'sprk-c-Button',
          {'sprk-c-Button--secondary': variant === 'secondary'},
          {'sprk-c-Button--tertiary': variant === 'tertiary'},
          additionalClasses
        )}
      data-id={idString}
      href={href}
      role={href ? 'button' : undefined }
      data-id={idString}
      {...rest}>
      { (loading && <SprkSpinner />) || children }
    </TagName>
  );
}

SprkButton.propTypes = {
  additionalClasses: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  idString: PropTypes.string,
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
}

SprkButton.defaultProps = {
  disabled: false,
  variant: 'primary',
  loading: false
}

export default SprkButton;
