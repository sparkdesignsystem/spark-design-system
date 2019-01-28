import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkIcon from '../SprkIcon/SprkIcon';

class SprkDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triggerText: props.defaultTriggerText,
      isOpen: false
    };
    this.toggleDropdownOpen = this.toggleDropdownOpen.bind(this);
    this.closeOnEsc = this.closeOnEsc.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.myRef = React.createRef();
  }

  closeOnEsc(e) {
    if (e.key === 'Escape') {
      this.closeDropdown();
    }
  }

  closeOnClickOutside(e) {

  }

  componentWillMount() {
    window.addEventListener('keydown', this.closeOnEsc)
    window.addEventListener('focusin', (e) => {
      if (!this.myRef.current.contains(e.target)) {
        this.closeDropdown();
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEsc);
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
    const {choices, defaultTriggerText, iconType, title, variant} = this.props;
    const { triggerText, isOpen } = this.state;
    return (
      <div ref={this.myRef}>
        <a className={classNames(
          "sprk-b-Link",
          "sprk-b-Link--plain",
          {"sprk-u-mrs": variant === 'informational'}
        )} href="#nogo" aria-haspopup="true" role="combobox" onClick={this.toggleDropdownOpen}>
          { variant === 'informational' &&
            <React.Fragment>
              <span data-sprk-dropdown-trigger-text-container="" role="combobox">{triggerText}</span>
              <SprkIcon additionalClasses="sprk-c-Icon--stroke-current-color sprk-u-mls" iconType="chevron-down" />
            </React.Fragment>
          }
          { variant === 'base' &&
            <SprkIcon iconType={iconType} />
          }
        </a>
        {isOpen &&
          <div className="sprk-c-Dropdown">
            {title &&
            <div className="sprk-c-Dropdown__header">
              <h2 className="sprk-c-Dropdown__title">{title}</h2>
            </div>
            }
            <ul className="sprk-c-Dropdown__links">
              {choices.map((choice, id) => {
                return(
                  <li className="sprk-c-Dropdown__item" role="option" key={id}>
                    <a className="sprk-c-Dropdown__link" href={choice.href || '#nogo'} data-sprk-dropdown-choice={choice.value}>
                    {variant === 'base' && choice.text }
                    {variant === 'informational' &&
                      <React.Fragment>
                        <p className="sprk-b-TypeBodyOne">{choice.content.title}</p>
                        <p className="sprk-b-TypeBodyTwo">{choice.content.infoLine1}</p>
                        <p className="sprk-b-TypeBodyTwo">{choice.content.infoLine2}</p>
                      </React.Fragment>
                    }
                    </a>
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

SprkDropdown.propTypes = {};

SprkDropdown.defaultProps = {
  variant: 'base'
};

export default SprkDropdown;