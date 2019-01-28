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
    this.closeOnClickOutside = this.closeOnClickOutside.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.updateTriggerText = this.updateTriggerText.bind(this);
    this.runChoiceFunction = this.runChoiceFunction.bind(this);
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

  updateTriggerText(text) {
    this.setState({
      triggerText: text
    })
  }

  runChoiceFunction(text) {
    if (this.props.choiceFunction) {
      this.props.choiceFunction(text);
    }
  }

  toggleDropdownOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const {additionalClasses, additionalIconClasses, choices, choiceFunction, defaultTriggerText, iconType, title, variant} = this.props;
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
            <SprkIcon iconType={iconType} additionalClasses={additionalIconClasses} />
          }
        </a>
        {isOpen &&
          <div className={classNames("sprk-c-Dropdown", additionalClasses)}>
            {title &&
            <div className="sprk-c-Dropdown__header">
              <h2 className="sprk-c-Dropdown__title">{title}</h2>
            </div>
            }
            <ul className="sprk-c-Dropdown__links">
              {choices.map((choice, id) => {
                return(
                  <li className="sprk-c-Dropdown__item" role="option" key={id}>

                    {variant === 'base' &&
                      <a
                        className="sprk-c-Dropdown__link"
                        href={choice.href || '#nogo'}
                        onClick={() => {
                          this.updateTriggerText(choice.text);
                          this.closeDropdown()
                          this.runChoiceFunction(choice.value)
                        }}>{choice.text}</a>
                    }
                    {variant === 'informational' &&
                      <React.Fragment>
                        <a
                          className="sprk-c-Dropdown__link"
                          href={choice.href || '#nogo'}
                          onClick={() => {
                            this.updateTriggerText(choice.content.title);
                            this.closeDropdown()
                            this.runChoiceFunction(choice.value)
                          }}>
                          <p className="sprk-b-TypeBodyOne">{choice.content.title}</p>
                          <p className="sprk-b-TypeBodyTwo">{choice.content.infoLine1}</p>
                          <p className="sprk-b-TypeBodyTwo">{choice.content.infoLine2}</p>
                        </a>
                      </React.Fragment>
                    }
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