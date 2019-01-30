import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SprkMastheadDropdown from '../SprkMastheadDropdown/SprkMastheadDropdown';

class SprkMastheadBigNav extends Component {
  render() {
    const {links} = this.props
    return (
      <React.Fragment>
        <div className="sprk-o-Stack__item">
          <nav className="sprk-c-Masthead__big-nav" role="navigation">
            <ul
              className="sprk-c-Masthead__big-nav-items sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--center-row sprk-o-Stack--split@xxs sprk-b-List sprk-b-List--bare">
                { links.map((link, id) => {

                  const {element, additionalContainerClasses, isActive, text, ...rest} = link;
                  const TagName = element || 'a';
                  return(
                    <li
                      className={classNames(
                        "sprk-c-Masthead__big-nav-item sprk-o-Stack__item",
                        {"sprk-c-Masthead__link--active": isActive},
                        additionalContainerClasses
                      )}
                      key={id}>
                      { !link.subNavLinks &&
                        <TagName className={classNames("sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link sprk-c-Masthead__link--big-nav")}{...rest}>{text}</TagName>
                      }
                      { link.subNavLinks &&
                        <SprkMastheadDropdown choices={link.subNavLinks} triggerText={link.text}/>
                      }
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

SprkMastheadBigNav.propTypes = {};
SprkMastheadBigNav.defaultProps = {
  links: []
};

export default SprkMastheadBigNav;
