import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { SprkLink } from '@sparkdesignsystem/spark-react';

function ContextSubMenu({ heading, collection, directory }) {
  const ProcessedSublinks = collection.filter(
    ((item) => item.node.parent.name !== 'guides') || ((item) => item.node.parent.name !== 'component-status'),
  );
  return (
    <div className="docs-sub-menu">
      <h4 className="docs-menu__subheading">
        <SprkLink
          element={Link}
          variant="simple"
          to={ 
            directory === 'guides'
              ? '/using-spark/guides' : directory === 'components' 
                ? '/using-spark/component-status'
                : `/using-spark/${directory}/${collection[0].node.parent.name}`
          }
        >
          {heading}
        </SprkLink>
      </h4>
      <ul className="docs-menu__collection">
        {ProcessedSublinks.map((item) => (
          <li
            key={item.node.parent.name}
            className="docs-menu__collection-item sprk-u-pbs"
          >
            <SprkLink
              element={Link}
              variant="simple"
              to={`/using-spark/${directory}/${item.node.parent.name}`}
            >
              {item.node.frontmatter.title || item.node.parent.name}
            </SprkLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

ContextSubMenu.propTypes = {
  heading: PropTypes.string,
  collection: PropTypes.arrayOf(PropTypes.object),
  directory: PropTypes.string,
};

export default ContextSubMenu;
