import React from 'react';
import { SprkLink } from '@sparkdesignsystem/spark-react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function ContextMenu({ context, setContext, className, autoNav }) {
  return (
    <div className="docs-context-menu">
      <ul className={className}>
        <li>
          <SprkLink
            additionalClasses={
              classnames(
                {
                  'docs-context-menu__item--active': context === 'installing-spark',
                },
              )
            }
            onClick={
              (e) => {
                if (!autoNav) {
                  e.preventDefault();
                }
                setContext('installing-spark');
              }
            }
            variant="simple"
            element={Link}
            to="/installing-spark/setting-up-your-environment"
          >
            Installing Spark
          </SprkLink>
        </li>
        <li>
          <SprkLink
            additionalClasses={
              classnames(
                {
                  'docs-context-menu__item--active': context === 'using-spark',
                },
              )
            }
            onClick={
              (e) => {
                if (!autoNav) {
                  e.preventDefault();
                }
                setContext('using-spark');
              }
            }
            variant="simple"
            href="#nogo"
          >
            Using Spark
          </SprkLink>
        </li>
        <li>
          <SprkLink
            additionalClasses={
              classnames(
                { 'docs-context-menu__item--active': context === 'principles' },
              )
            }
            onClick={
              (e) => {
                if (!autoNav) { e.preventDefault(); } setContext('principles');
              }
            }
            variant="simple"
            href="#nogo"
          >
            Principles
          </SprkLink>
        </li>
      </ul>
    </div>
  );
}

ContextMenu.propTypes = {
  context: PropTypes.string,
  setContext: PropTypes.func,
  className: PropTypes.string,
  autoNav: PropTypes.bool,
};

export default ContextMenu;
