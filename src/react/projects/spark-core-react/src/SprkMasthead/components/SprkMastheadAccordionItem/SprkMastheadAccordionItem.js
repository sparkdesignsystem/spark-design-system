import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkIcon from '../../../SprkIcon/SprkIcon';

class SprkMastheadAccordionItem extends Component {
  constructor(props){
    super(props);
    this.state = {isOpen: this.props.link.defaultOpen || false};
    this.toggleAccordionOpen = this.toggleAccordionOpen.bind(this);
  }

  toggleAccordionOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const {link, ...rest} = this.props;
    const {isOpen} = this.state;
    return (
      <li className="sprk-c-MastheadAccordion__item" {...rest}>
        <a className="sprk-c-MastheadAccordion__summary" href={link.href} onClick={this.toggleAccordionOpen}>
          <span className="sprk-b-TypeBodyOne sprk-c-MastheadAccordion__heading">
            {link.text}
          </span>
          {link.subnav &&
          <SprkIcon
            additionalClasses={classNames("sprk-c-Icon--stroke-current-color",
              "sprk-c-MastheadAccordion__icon",
              {"sprk-c-Icon--open": isOpen})}
            iconType="chevron-down"/>
          }
        </a>
        { (link.subnav && this.state.isOpen) &&
        <ul className="sprk-b-List sprk-b-List--bare sprk-c-MastheadAccordion__details">
          {link.subnav.map((subnavlink, id) => {
            return (
              <li key={id}>
                <a className="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link" href={subnavlink.href}>
                  {subnavlink.text}
                </a>
              </li>
            );
          })}
        </ul>
        }
      </li>
    );
  }
}

SprkMastheadAccordionItem.propTypes = {};

export default SprkMastheadAccordionItem;