import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import SprkIcon from '../../../../icons/react/SprkIcon';

class SprkFooterConnectIcons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      connectIconsHasIds: props.connectIcons.icons.map(icon => ({ id: uniqueId(), ...icon })),
    };
  }

  render() {
    const { connectIcons } = this.props;
    const { connectIconsHasIds } = this.state;
    return (
      <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
        <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">{connectIcons.heading}</h3>

        <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@m">
          <ul className="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
            {connectIconsHasIds.map((icon) => {
              const {
                element,
                id,
                href,
                analyticsString,
                screenReaderText,
                addClasses,
                name,
                ...rest
              } = icon;
              const TagName = element || 'a';
              return (
                <li key={id} className="sprk-o-Stack__item">
                  <TagName
                    className="sprk-b-Link sprk-b-Link--plain"
                    href={TagName === 'a' ? href || '#nogo' : undefined}
                    data-analytics={analyticsString}
                    {...rest}
                  >
                    <SprkIcon
                      iconName={name}
                      additionalClasses={`sprk-c-Icon--stroke-current-color sprk-c-Icon--l ${
                        addClasses
                      }`}
                    />
                    <span className="sprk-u-ScreenReaderText">{screenReaderText}</span>
                  </TagName>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

SprkFooterConnectIcons.propTypes = {
  // The data for the global site items
  connectIcons: PropTypes.shape({
    // The main heading for the connect secion
    heading: PropTypes.string,
    // An array of icon objects
    icons: PropTypes.arrayOf(
      PropTypes.shape({
        // The link href for the icon
        href: PropTypes.string,
        // The name of the icon
        name: PropTypes.string,
        // Text used for screen readers
        screenReaderText: PropTypes.string,
        // String used for the data-analytics attribute
        analyticsString: PropTypes.string,
        // Element to render, can be 'a' or Link
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      }),
    ).isRequired,
  }).isRequired,
};

export default SprkFooterConnectIcons;
