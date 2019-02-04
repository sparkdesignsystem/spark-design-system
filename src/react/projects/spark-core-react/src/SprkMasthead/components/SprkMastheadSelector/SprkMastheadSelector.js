import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SprkIcon from '../../../SprkIcon/SprkIcon';
import classNames from 'classnames';
import addIdsToArray from '../../../utility/addIdsToArray';

class SprkMastheadSelector extends Component {
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
    this.closeOnEsc = this.closeOnEsc.bind(this);
    this.closeOnClickOutside = this.closeOnClickOutside.bind(this);
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
    this.setState({
      choiceItems: this.props.choices.items ? addIdsToArray(this.props.choices.items) : undefined
    });

    window.addEventListener('keydown', this.closeOnEsc)
    window.addEventListener('focusin', this.closeOnClickOutside)
    window.addEventListener('click', this.closeOnClickOutside)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEsc);
    window.removeEventListener('focusin', this.closeOnClickOutside)
    window.removeEventListener('click', this.closeOnClickOutside)
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
    if (this.props.choices.choiceFunction) {
      this.props.choices.choiceFunction(text);
    }
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
      defaultTriggerText,
      iconType,
      idString,
      isFlush
    } = this.props;
    const { isOpen, triggerText } = this.state;

    return (
      <div
        ref={this.myRef}
        className={classNames({"sprk-c-MastheadMask": isOpen && isFlush})}
        onClick={() => { if(isOpen) { this.closeDropdown() }}}>
        <div className={classNames({"sprk-o-Box": isFlush})}>
          <a
            className={classNames(
              "sprk-c-Masthead__selector sprk-b-Link sprk-b-Link--plain sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column",
              additionalTriggerClasses)}
            data-analytics={analyticsString ? analyticsString : 'undefined'}
            data-id={idString ? idString : 'undefined'}
            onClick={this.openDropdown}
            href="#nogo" data-sprk-dropdown-trigger="dropdown-selector" aria-haspopup="true">
            <span
              className={classNames("sprk-o-Stack__item sprk-o-Stack__item--flex@xxs", additionalTriggerTextClasses)}
              role="combobox">{triggerText}</span>
            <SprkIcon iconType={iconType} additionalClasses={
              classNames("sprk-c-Icon--toggle sprk-Stack__item", additionalIconClasses)} />
          </a>
        </div>

        { isOpen &&
        <div className={classNames("sprk-c-Masthead__selector-dropdown sprk-c-Dropdown", additionalClasses)}
             data-sprk-dropdown="dropdown-selector">
          <div className="sprk-c-Dropdown__header">
            <a
              className="sprk-b-Link sprk-b-Link--plain sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column sprk-u-Width-100"
              onClick={this.closeDropdown}
              href="#nogo" aria-haspopup="true">
              <span
                className="sprk-c-Dropdown__title sprk-b-TypeBodyTwo sprk-o-Stack__item sprk-o-Stack__item--flex@xxs">{triggerText}</span>
              <SprkIcon iconType="chevron-up" additionalClasses="sprk-c-Icon--toggle sprk-Stack__item"/>
            </a>
          </div>

          <ul className="sprk-c-Dropdown__links">
            {choices.items && this.state.choiceItems.map((item) => {
              const {element, href, title, information, value, ...rest} = item;
              const TagName = element || 'a';
              return (
                <li className="sprk-c-Dropdown__item" key={item.id}>
                  <TagName className="sprk-c-Dropdown__link sprk-u-ptm"
                     href={TagName === 'a' ? href || '#nogo' : undefined}
                     onClick={() => {
                       this.updateTriggerText(title);
                       this.closeDropdown()
                       this.runChoiceFunction(value)
                     }} role="option" {...rest}>
                    <p className="sprk-b-TypeBodyOne">{title}</p>
                    <p>{information}</p>
                  </TagName>
                </li>
              );
            })}

          </ul>

          {choices.footer &&
            <div className="sprk-c-Dropdown__footer sprk-u-TextAlign--center">
              {choices.footer}
            </div>
          }
        </div>
        }
      </div>
    );
  }
}

SprkMastheadSelector.propTypes = {
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
  // Choices object that builds the dropdown contents
  choices: PropTypes.shape({
    // An array of objects that describe the items in the menu
    items: PropTypes.arrayOf(PropTypes.shape({
      // The element to render for each menu item
      element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      // Assigned to href of the element is 'a'
      href: PropTypes.string,
      // The text inside the item
      text: PropTypes.string,
  })),
  // Incoming children
  children: PropTypes.node,
  // The text set as the default of the trigger link
  defaultTriggerText: PropTypes.string,
  // The icon type of the trigger icon
  iconType: PropTypes.string,
  // Assigned to data-id
  idString: PropTypes.string,
  // Applies styles if the selector is flush with the sides of the viewport
  isFlush: PropTypes.bool
  }),
};

SprkMastheadSelector.defaultProps = {
  defaultTriggerText: 'Choose One...',
  iconType: 'chevron-down',
  isFlush: false,
  choices: {
    items: []
  },
};

export default SprkMastheadSelector;