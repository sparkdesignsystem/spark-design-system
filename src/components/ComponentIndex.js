import React from 'react';

const ComponentIndex = ({ id, name, reactLink, angularLink, htmlLink }) => (
  <div className="component-index" id={id}>
    <h2 className="sprk-b-TypeDisplayThree component-index__heading">{name}</h2>
    <ul className="component-index-list">
      { reactLink
      && (
      <li className="component-index-list__item">
        <a className="sprk-b-Link" href={`https://react.sparkdesignsystem.com/${reactLink}`}>React</a>
      </li>
      )
      }
      { angularLink
      && (
      <li className="component-index-list__item">
        <a className="sprk-b-Link" href={`https://angular.sparkdesignsystem.com/${angularLink}`}>Angular</a>
      </li>
      )
      }
      { htmlLink
      && (
      <li className="component-index-list__item">
        <a className="sprk-b-Link" href={`https://html.sparkdesignsystem.com/${htmlLink}`}>HTML</a>
      </li>
      )
}
    </ul>
  </div>
);

export default ComponentIndex;
