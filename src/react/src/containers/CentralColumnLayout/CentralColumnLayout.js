import React from 'react';
import PropTypes from 'prop-types';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import IconSet from '../../components/IconSet/IconSet';

function CentralColumnLayout(props) {
  const { children } = props;
  return (
    <div>
      <IconSet />
      <SiteHeader />
      <div className="drizzle-o-Layout-content sprk-u-mal sprk-b-TypeBodyTwo">
        {children}
      </div>
    </div>
  );
}

CentralColumnLayout.propTypes = {
  children: PropTypes.node,
};

CentralColumnLayout.defaultProps = {
  children: [],
};

export default CentralColumnLayout;
