import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Link } from 'gatsby';

import { SprkToggle, SprkList, SprkListItem, SprkLink } from '@sparkdesignsystem/spark-react';

function SiteNavigation({ navItems }) {
  return (
    <>
      <nav className={cx('navigation')}>
        { navItems.map(item => (
          <div key={shortid.generate()}>
            {
                item.subNavLinks
                && (
                  <SprkToggle
                    isDefaultOpen
                    title={item.text}
                    additionalClasses="nav-toggle"
                    toggleIconName="chevron-down"
                    key={shortid.generate()}
                    analyticsString="toggle-1"
                    iconAddClasses="sprk-c-Icon--m"
                  >
                    {item.subNavLinks.map(link => (
                      <SprkList
                        element="ul"
                        variant="bare"
                        key={shortid.generate()}
                        additionalClasses="nav-list"
                      >
                        <SprkListItem additionalClasses="nav-list__item">
                          <SprkLink
                            element={link.element}
                            to={link.to}
                            variant="simple"

                          >
                            {link.text}
                          </SprkLink>
                        </SprkListItem>
                      </SprkList>
                    ))}
                  </SprkToggle>
                )
              }
            {!item.subNavLinks
              && (
                <div className="nav-list__item" key={shortid.generate()}>
                  <SprkLink
                    element={Link}
                    to={item.to}
                    variant="simple"
                  >
                    {item.text}
                  </SprkLink>
                </div>
              )
              }
          </div>
        )) }
      </nav>
    </>
  );
}

export default SiteNavigation;

SiteNavigation.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    element: PropTypes.node,
    text: PropTypes.string,
    href: PropTypes.string,
  })),
};

SiteNavigation.defaultProps = {
  navItems: [],
};
