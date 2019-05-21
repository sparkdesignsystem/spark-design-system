import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { SprkToggle, SprkList, SprkListItem, SprkLink } from '@sparkdesignsystem/spark-react';

function SiteNavigation({ navItems }) {
  return (
    <>
      <nav className={cx('navigation')}>
        { navItems.map(item => (
          <>
            {
              item.subNavLinks
                && (
                <SprkToggle
                  title={item.text}
                  additionalClasses="nav-toggle"
                  toggleIconName="chevron-down"
                  analyticsString="toggle-1"
                  iconAddClasses="sprk-c-Icon--m"
                >
                  {item.subNavLinks.map(link => (
                    <SprkList
                      element="ul"
                      variant="bare"
                      additionalClasses="nav-list"
                    >
                      <SprkListItem additionalClasses="nav-list__item">
                        <SprkLink variant="simple">{link.text}</SprkLink>
                      </SprkListItem>
                    </SprkList>
                  ))}
                </SprkToggle>
                )
            }
            { !item.subNavLinks
              && (
              <div className="nav-list__item">
                <SprkLink variant="simple">{item.text}</SprkLink>
              </div>
              )
            }
          </>
        )) }
      </nav>
    </>
  );
}

export default SiteNavigation;

SiteNavigation.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.Object),
};

SiteNavigation.defaultProps = {
  navItems: [],
};
