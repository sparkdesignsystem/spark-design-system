import React from 'react';

function EmptyLayout(props) {
  return (
    <div>
      <div className="drizzle-o-Layout-content sprk-u-mal sprk-b-TypeBodyTwo">
        {props.children}
      </div>
    </div>
  );
}

export default EmptyLayout;
