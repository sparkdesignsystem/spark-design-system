import React from 'react';

const ComponentIndexItem = ({id, name, reactLink, angularLink, htmlLink}) => {
  return (
    <div id={id}>
      <h1>{name}</h1>
      <a href={reactLink}>React</a>
      <a href={angularLink}>Angular</a>
      <a href={htmlLink}>HTML</a>
    </div>
  );
};

export default ComponentIndexItem;