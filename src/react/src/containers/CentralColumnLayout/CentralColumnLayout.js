import React from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import IconSet from '../../components/IconSet/IconSet';

function CentralColumnLayout(props) {
  return (
    <div>
      <IconSet/>
      <SiteHeader />
      <div className="drizzle-o-Layout-content sprk-u-mal sprk-b-TypeBodyTwo">
        {props.children}
      </div>
    </div>
  );
}

export default CentralColumnLayout;
