import React from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';

function CentralColumnLayout(props) {
  return (
    <div>
      <SiteHeader />
      <div className="drizzle-o-Layout-content sprk-u-mal sprk-b-TypeBodyTwo">
        {props.children}
      </div>
    </div>
  );
}

export default CentralColumnLayout;
