import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkIcon from '../../../SprkIcon/SprkIcon';

class SprkMastheadAccordionItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: this.props.defaultOpen || false,
      height: this.props.defaultOpen ? 'auto': 0};
    this.toggleAccordionOpen = this.toggleAccordionOpen.bind(this);
  }

  toggleAccordionOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      height: !prevState.isOpen ? 'auto' : 0
    }));
  }

  render() {
    const {text, defaultOpen, element, href, isActive, isButton, leadingIcon, subNavLinks, ...rest} = this.props;
    const {isOpen, height} = this.state;
    const TagName = element || 'a';
    return (
        <li
          className={classNames(
            "sprk-c-MastheadAccordion__item",
            { "sprk-c-MastheadAccordion__item--open": isOpen },
            { "sprk-c-MastheadAccordion__item--active": isActive },
            {"sprk-o-Box": isButton},
            )}>

          { subNavLinks &&
          <React.Fragment>
            <a href="#nogo" className="sprk-c-MastheadAccordion__summary" onClick={this.toggleAccordionOpen}>
              <span className="sprk-b-TypeBodyOne sprk-c-MastheadAccordion__heading">
                {text}
              </span>
              <SprkIcon additionalClasses={classNames({'sprk-c-Icon--open': isOpen})} iconType="chevron-down" />
            </a>
            <AnimateHeight duration={300} height={height}>
              <ul className="sprk-b-List sprk-b-List--bare sprk-c-MastheadAccordion__details">
                {subNavLinks.map((subnavlink, id) => {
                  const {element, href, text, ...rest} = subnavlink;
                  const TagName = element || 'a';
                  return (
                    <li key={id}>
                      <TagName
                        href={TagName === 'a' ? href || '#nogo': undefined}
                        className={classNames("sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link")}
                        {...rest}>{text}</TagName>
                    </li>
                  );
                })}
              </ul>
            </AnimateHeight>
          </React.Fragment>
          }
        { !subNavLinks &&
          <TagName
            className={classNames(
              {"sprk-c-MastheadAccordion__summary": !isButton},
              {"sprk-c-Button sprk-c-Button--secondary sprk-c-Button--compact sprk-c-Button--full@sm": isButton},
            )}
            href={TagName === 'a' ? href || '#nogo': undefined}
            {...rest}>
            <span className={classNames({"sprk-c-MastheadAccordion__heading": !isButton})}>
              {leadingIcon &&
                <SprkIcon additionalClasses="sprk-c-Icon--stroke-current-color sprk-c-Icon--l sprk-u-mrs" iconType={leadingIcon}></SprkIcon>
              }
              { text }
            </span>
          </TagName>
        }
        </li>
    );
  }
}

SprkMastheadAccordionItem.propTypes = {
  // Decides whether the accordion should render open by default
  defaultOpen: PropTypes.bool,
  // The element to render, could be 'a' or a Component like Link
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.node ]),
  // Assigned to the href attribute if element is 'a'
  href: PropTypes.string,
  // Decides if the outer link is the active link
  isActive: PropTypes.bool,
  // Will render the element as a button with correct style
  isButton: PropTypes.bool,
  // The name of the icon to render before the text
  leadingIcon: PropTypes.string,
  // An array of link objects that builds the sub nav
  subNavLinks: PropTypes.arrayOf(PropTypes.shape({
    // The element to render, could be 'a' or a Component like Link
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.node ]),
    // Assigned to the href attribute if element is 'a'
    href: PropTypes.string,
    // The element to render, could be 'a' or a Component like Link
    text: PropTypes.string,
  })),
  // The text inside the element
  text: PropTypes.string,
};

SprkMastheadAccordionItem.defaultProps = {
  defaultOpen: false,
  link: {}
};

export default SprkMastheadAccordionItem;
