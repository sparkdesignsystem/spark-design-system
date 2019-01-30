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
    if (this.props.choices.choiceFunction) {
      this.props.choices.choiceFunction(text);
    }
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
      defaultTriggerText,
      iconType,
      idString,
      screenReaderText,
      title,
      variant
    } = this.props;
    const { triggerText, isOpen } = this.state;
    return (
      <div ref={this.myRef}>
        <a className={classNames(
          "sprk-b-Link",
          "sprk-b-Link--plain",
          {"sprk-u-mrs": variant === 'informational'},
          additionalTriggerClasses,
        )}
           href="#nogo"
           aria-haspopup="true"
           role="combobox"
           data-analytics={analyticsString ? analyticsString : 'undefined'}
           data-id={idString ? idString : 'undefined'}
           onClick={this.toggleDropdownOpen}>
          { variant === 'informational' &&
            <React.Fragment>
              <span
                className={classNames(additionalTriggerTextClasses)}
                role="combobox">{triggerText}</span>
              <SprkIcon additionalClasses="sprk-c-Icon--stroke-current-color sprk-u-mls" iconType="chevron-down" />
            </React.Fragment>
          }
          { variant === 'base' &&
            <React.Fragment>
              <span
                className={
                  classNames("sprk-u-ScreenReaderText", additionalTriggerTextClasses)
                }>{screenReaderText}</span>
              <SprkIcon iconType={iconType} additionalClasses={additionalIconClasses} />
            </React.Fragment>
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
              {choices.items.map((choice, id) => {
                const {content, element, href, isActive, text, value, ...rest} = choice;
                const TagName = element || 'a';
                return(
                  <li className="sprk-c-Dropdown__item" role="option" key={id}>

                    {variant === 'base' &&
                      <TagName
                        className="sprk-c-Dropdown__link"
                        onClick={() => {
                          this.updateTriggerText(text);
                          this.closeDropdown()
                          this.runChoiceFunction(value)
                        }}
                        {...rest}>{text}</TagName>
                    }
                    {variant === 'informational' &&
                      <React.Fragment>
                        <TagName
                          className={classNames(
                            "sprk-c-Dropdown__link",
                            {"sprk-c-Dropdown__link--active": isActive}
                            )}
                          href={TagName === 'a' ? href || '#nogo' : undefined}
                          onClick={() => {
                            this.updateTriggerText(content.title);
                            this.closeDropdown()
                            this.runChoiceFunction(value)
                          }}
                          {...rest}>
                          <p className="sprk-b-TypeBodyOne">{content.title}</p>
                          <p className="sprk-b-TypeBodyTwo">{content.infoLine1}</p>
                          <p className="sprk-b-TypeBodyTwo">{content.infoLine2}</p>
                        </TagName>
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

SprkDropdown.propTypes = {
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
  choices: PropTypes.object,
  // The text set as the default of the trigger link
  defaultTriggerText: PropTypes.string,
  // The icon type of the trigger icon
  iconType: PropTypes.string,
  // Assigned to data-id
  idString: PropTypes.string,
  // Text that is visually hidden when the trigger is just an icon
  screenReaderText: PropTypes.string,
  // The text of the optional header above the choices in the dropdown
  title: PropTypes.string,
  // The variant name
  variant: PropTypes.oneOf(['base', 'informational'])
};

SprkDropdown.defaultProps = {
  choices: {
    items: []
  },
  defaultTriggerText: 'Choose One...',
  iconType: 'chevron-down',
  idString: '',
  variant: 'base'
};

export default SprkDropdown;