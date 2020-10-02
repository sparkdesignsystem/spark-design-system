import React from 'react';
import PropTypes from 'prop-types';

function ContentWrapper({children}) {
  return (
    <div>{children}</div>
  );
}

ContentWrapper.propTypes = {
  /**
  * Content to render inside of the component.
  */
  children: PropTypes.node
};

export default ContentWrapper;
