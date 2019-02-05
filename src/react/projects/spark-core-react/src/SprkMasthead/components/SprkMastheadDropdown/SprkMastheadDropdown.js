import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SprkIcon from '../../../SprkIcon/SprkIcon';
import { uniqueId } from 'lodash';

class SprkMastheadDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      choiceItems: this.props.choices.items ? {id: uniqueId(), ...this.props.choices.items} : undefined
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

  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEsc)
    window.addEventListener('focusin', this.closeOnClickOutside)
    window.addEventListener('click', this.closeOnClickOutside)
  }

  componentDidUnmount() {
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
    const {
      additionalClasses,
      additionalIconClasses,
      additionalTriggerClasses,
      additionalTriggerTextClasses,
      analyticsString,
      children,
      choices,
      iconType,
      idString,
      title,
      triggerText,
      variant
    } = this.props;
    const { isOpen } = this.state;
    return (
      <div ref={this.myRef}>
        <a className={classNames(
          "sprk-b-Link",
          "sprk-b-Link--plain",
          {"sprk-u-mrs": variant === 'informational'},
          additionalTriggerClasses
        )}
           href="#nogo"
           data-analytics={analyticsString ? analyticsString : 'undefined'}
           data-id={idString ? idString : 'undefined'}
           aria-haspopup="true"
           role="combobox"
           onClick={this.toggleDropdownOpen}>
          <span className={classNames(additionalTriggerTextClasses)} role="combobox">{triggerText}</span>
          <SprkIcon additionalClasses={classNames("sprk-c-Icon--stroke-current-color sprk-u-mls", additionalIconClasses)} iconType={iconType} />
        </a>
        {isOpen &&
        <div className={classNames("sprk-c-Dropdown sprk-u-TextAlign--left", additionalClasses)}>
          {title &&
          <div className="sprk-c-Dropdown__header">
            <h2 className="sprk-c-Dropdown__title">{title}</h2>
          </div>
          }
          <ul className="sprk-c-Dropdown__links">
            {this.state.choiceItems.map((choice) => {
              const {element, href, text, ...rest} = choice;
              const TagName = element || 'a';
              return(
                <li className="sprk-c-Dropdown__item" role="option" key={choice.id}>
                  <TagName
                    href={TagName === 'a' ? href || '#nogo': undefined}
                    className="sprk-c-Dropdown__link"
                    {...rest}>{text}</TagName>
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

SprkMastheadDropdown.propTypes = {
  // Classes applied to the dropdown
  additionalClasses: PropTypes.string,
  // Classes applied to the icon
  additionalIconClasses: PropTypes.string,
  // Classes applied to the link that triggers the dropdown to open
  additionalTriggerClasses: PropTypes.string,
  // Classes applied to the text in the trigger link
  additionalTriggerTextClasses: PropTypes.string,
  // Assigned to data-analytics
  analyticsString: PropTypes.string,
  // Incoming children
  children: PropTypes.node,
  // Choices object that builds the dropdown contents
  choices: PropTypes.shape({
    // An array of objects that describe the items in the menu
    items: PropTypes.arrayOf(PropTypes.shape({
      // The element to render for each menu item
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      // Assigned to href of the element is 'a'
      href: PropTypes.string,
      // The text inside the item
      text: PropTypes.string,
    }))
  }),
  // The text set as the default of the trigger link
  triggerText: PropTypes.string,
  // The icon type of the trigger icon
  iconType: PropTypes.string,
  // Assigned to data-id
  idString: PropTypes.string,
  // The text of the optional header above the choices in the dropdown
  title: PropTypes.string,
  // The variant name
  variant: PropTypes.oneOf(['base', 'informational'])
};

SprkMastheadDropdown.defaultProps = {
  additionalClasses: '',
  additionalIconClasses: '',
  additionalTriggerClasses: '',
  additionalTriggerTextClasses: '',
  analyticsString: '',
  choices: {
    items: []
  },
  triggerText: 'Choose One...',
  iconType: 'chevron-down',
  idString: '',
  variant: 'base'
};

export default SprkMastheadDropdown;