import React from 'react';
import IconSet from '../../components/IconSet/IconSet';

function EmptyLayout(props) {
  return (
    <div>
      <IconSet/>
      <div className="drizzle-o-Layout-content sprk-b-TypeBodyTwo">
        {props.children}
      </div>
    </div>
  );
}

export default EmptyLayout;
