import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

function ContentIframe({ title, additionalClasses, src, story, ...rest }) {
  return (
    <iframe
      className={cx(
        'content-iframe',
        additionalClasses,
      )}
      title={title}
      src={`${src}${story}`}
      {...rest}
    />
  );
}

export default ContentIframe;

ContentIframe.propTypes = {
  title: PropTypes.string,
  additionalClasses: PropTypes.string,
  src: PropTypes.string,
  story: PropTypes.string,
};
