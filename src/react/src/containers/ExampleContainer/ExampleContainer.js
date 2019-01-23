import React from 'react';

function ExampleContainer(props) {
  return (
    <div className="drizzle-o-ContentGrouping">
      <h2 className="drizzle-b-h2">{props.heading}</h2>
      {props.children}
    </div>
  );
}

export default ExampleContainer;