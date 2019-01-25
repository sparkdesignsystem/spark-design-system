import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SprkIcon from '../../../SprkIcon/SprkIcon';
import classNames from 'classnames';

class SprkMastheadDropdown extends Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
      triggerText: props.defaultTriggerText || 'Select One'
    };
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.updateTriggerText = this.updateTriggerText.bind(this);
    this.runChoiceFunction = this.runChoiceFunction.bind(this);
  }

  openDropdown() {
    this.setState(prevState => ({
      isOpen: true
    }));
  }

  closeDropdown() {
    this.setState(prevState => ({
      isOpen: false
    }));
  }

  updateTriggerText(text) {
    this.setState({
      triggerText: text
    })
  }

  runChoiceFunction(text) {
    this.props.choiceFunction(text);
  }

  render() {
    const { choiceFunction, defaultTriggerText, selector, ...rest} = this.props;
    const { isOpen, triggerText } = this.state;

    return (
      <div className={classNames({"sprk-c-MastheadMask": isOpen})}>
        <div className="sprk-o-Box">
          <a
            className="sprk-c-Masthead__selector sprk-b-Link sprk-b-Link--plain sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column"
            onClick={this.openDropdown}
            href="#nogo" data-sprk-dropdown-trigger="dropdown-selector" aria-haspopup="true">
            <span className="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs" role="combobox">{triggerText}</span>
            <SprkIcon iconType="chevron-down" additionalClasses="sprk-c-Icon--toggle sprk-Stack__item" />
          </a>
        </div>

        { isOpen &&
        <div className="sprk-c-Masthead__selector-dropdown sprk-c-Dropdown"
             data-sprk-dropdown="dropdown-selector">
          <div className="sprk-c-Dropdown__header">
            <a
              className="sprk-b-Link sprk-b-Link--plain sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column sprk-u-Width-100"
              onClick={this.closeDropdown}
              href="#nogo" aria-haspopup="true">
              <span
                className="sprk-c-Dropdown__title sprk-b-TypeBodyTwo sprk-o-Stack__item sprk-o-Stack__item--flex@xxs">{triggerText}</span>
              <SprkIcon iconType="chevron-up" additionalClasses="sprk-c-Icon--toggle sprk-Stack__item" />
            </a>
          </div>

          <ul className="sprk-c-Dropdown__links">

            {selector.items && selector.items.map((item, id) => {
              return (
                <li className="sprk-c-Dropdown__item" key={id}>
                  <a className="sprk-c-Dropdown__link sprk-u-ptm" href="#nogo"
                     onClick={({ text = item.value }) => {
                       this.updateTriggerText(text);
                       this.closeDropdown()
                       this.runChoiceFunction(text)
                     }} role="option">
                    <p className="sprk-b-TypeBodyOne">{item.title}</p>
                    <p>{item.information}</p>
                  </a>
                </li>
              );
            })}

          </ul>

          {selector.footer &&
            <div className="sprk-c-Dropdown__footer sprk-u-TextAlign--center">
              {selector.footer}
            </div>
          }
        </div>
        }
      </div>
    );
  }
}

SprkMastheadDropdown.propTypes = {};

export default SprkMastheadDropdown;