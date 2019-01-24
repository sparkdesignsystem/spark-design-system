import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkIcon from '../../../SprkIcon/SprkIcon';

class SprkMastheadAccordionItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: this.props.link.defaultOpen || false,
      height: this.props.link.defaultOpen ? 'auto': 0};
    this.toggleAccordionOpen = this.toggleAccordionOpen.bind(this);
  }

  toggleAccordionOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      height: !prevState.isOpen ? 'auto' : 0
    }));
  }

  render() {
    const {link, ...rest} = this.props;
    const {isOpen, height} = this.state;
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
        { (link.subnav) &&
        <AnimateHeight
          duration={ 500 }
          height={ height }>
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
        </AnimateHeight>
        }
      </li>
    );
  }
}

SprkMastheadAccordionItem.propTypes = {};

export default SprkMastheadAccordionItem;