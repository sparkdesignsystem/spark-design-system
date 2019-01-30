import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkIcon from '../../../SprkIcon/SprkIcon';

class SprkMastheadDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleDropdownOpen = this.toggleDropdownOpen.bind(this);
    this.closeOnEsc = this.closeOnEsc.bind(this);
    this.closeOnClickOutside = this.closeOnClickOutside.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.myRef = React.createRef();
  }

  closeOnEsc(e) {
    if (e.key === 'Escape') {
      this.closeDropdown();
    }
  }

  closeOnClickOutside(e) {
    if (!this.myRef.current.contains(e.target)) {
      this.closeDropdown();
    }
  }

  componentWillMount() {
    window.addEventListener('keydown', this.closeOnEsc)
    window.addEventListener('focusin', this.closeOnClickOutside)
    window.addEventListener('click', this.closeOnClickOutside)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEsc);
    window.removeEventListener('focusin', this.closeOnClickOutside)
    window.removeEventListener('click', this.closeOnClickOutside)
  }

  closeDropdown() {
    this.setState(prevState => ({
      isOpen: false
    }));
  }

  toggleDropdownOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const {additionalClasses, additionalIconClasses, choices, choiceFunction, triggerText, iconType, title, variant} = this.props;
    const { isOpen } = this.state;
    return (
      <div ref={this.myRef}>
        <a className={classNames(
          "sprk-b-Link",
          "sprk-b-Link--plain",
          {"sprk-u-mrs": variant === 'informational'}
        )} href="#nogo" aria-haspopup="true" role="combobox" onClick={this.toggleDropdownOpen}>
          <span data-sprk-dropdown-trigger-text-container="" role="combobox">{triggerText}</span>
          <SprkIcon additionalClasses="sprk-c-Icon--stroke-current-color sprk-u-mls" iconType="chevron-down" />
        </a>
        {isOpen &&
        <div className={classNames("sprk-c-Dropdown sprk-u-TextAlign--left", additionalClasses)}>
          {title &&
          <div className="sprk-c-Dropdown__header">
            <h2 className="sprk-c-Dropdown__title">{title}</h2>
          </div>
          }
          <ul className="sprk-c-Dropdown__links">
            {choices.map((choice, id) => {
              const TagName = choice.element || 'a';
              const {element, href, text, value, ...rest} = choice;
              return(
                <li className="sprk-c-Dropdown__item" role="option" key={id}>
                  <TagName
                    href={TagName === 'a' ? choice.href || '#nogo': undefined}
                    className="sprk-c-Dropdown__link"
                    {...rest}>{choice.text}</TagName>
                </li>);
              })
            }
          </ul>
        </div>
        }
      </div>
    );
  }
}

SprkMastheadDropdown.propTypes = {};

SprkMastheadDropdown.defaultProps = {
};

export default SprkMastheadDropdown;