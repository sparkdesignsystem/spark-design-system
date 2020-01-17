import React from 'react';
import { SprkLink } from '@sparkdesignsystem/spark-react';
import { Link } from 'gatsby';
import classnames from 'classnames';

function ContextMenu({context, setContext, className, autoNav}) {
  return (
    <div className="docs-context-menu">
      <ul className={className}>
        <li>
          <SprkLink
            additionalClasses={classnames({'docs-context-menu__item--active': context==='installing-spark'})}
            onClick={(e) => {if (!autoNav) {e.preventDefault();} setContext('installing-spark');}}
            variant="simple"
            element={Link}
            to="/installing-spark">Installing Spark</SprkLink>
        </li>
        <li>
          <SprkLink
            additionalClasses={classnames({'docs-context-menu__item--active': context==='using-spark'})}
            onClick={(e) => {if (!autoNav) {e.preventDefault();} setContext('using-spark');}}
            variant="simple"
            element={Link}
            to="/using-spark">Using Spark</SprkLink>
        </li>
        <li>
          <SprkLink
            additionalClasses={classnames({'docs-context-menu__item--active': context==='principles'})}
            onClick={(e) => {if (!autoNav) {e.preventDefault();} setContext('principles');}}
            element={Link}
            variant='simple'
            to="/principles/design-principles">Principles</SprkLink>
        </li>
      </ul>
    </div>
  );
}

export default ContextMenu;
