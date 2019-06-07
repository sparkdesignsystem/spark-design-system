import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

function ContentIframe({ title, additionalClasses, src, ...rest }) {
  return (
    <iframe
      className={cx(
        'content-iframe',
        additionalClasses,
      )}
      title={title}
      src={src}
      {...rest}
    />
  );
}

export default ContentIframe;

ContentIframe.propTypes = {
  title: PropTypes.string,
  additionalClasses: PropTypes.string,
  src: PropTypes.string,
};
