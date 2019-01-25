import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkIcon from '../SprkIcon/SprkIcon';

function SprkMastheadLink({ children, element, isSubNavLink, leadingIcon, ...rest}) {
  const TagName = element;
  return (
    <TagName className={classNames(
      {
        "sprk-c-MastheadAccordion__summary": !isSubNavLink,
        "sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link": isSubNavLink
      }
    )} {...rest}>
      { isSubNavLink && children }
      {!isSubNavLink &&
        <span className={classNames({
          "sprk-b-TypeBodyOne sprk-c-MastheadAccordion__heading": !isSubNavLink
        })}>
          { leadingIcon &&
            <SprkIcon additionalClasses="sprk-u-mrs" iconType={leadingIcon} />
          }
          {children}
        </span>
      }
    </TagName>
  );
}

SprkMastheadLink.propTypes = {
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func])
};

export default SprkMastheadLink;