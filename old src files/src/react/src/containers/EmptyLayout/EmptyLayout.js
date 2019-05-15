import React from 'react';
import PropTypes from 'prop-types';
import IconSet from '../../components/IconSet/IconSet';

function EmptyLayout(props) {
  const { children } = props;
  return (
    <div>
      <IconSet />
      <div className="drizzle-o-Layout-content sprk-b-TypeBodyTwo">
        {children}
      </div>
    </div>
  );
}

EmptyLayout.propTypes = {
  children: PropTypes.node,
};
EmptyLayout.defaultProps = {
  children: [],
};

export default EmptyLayout;
