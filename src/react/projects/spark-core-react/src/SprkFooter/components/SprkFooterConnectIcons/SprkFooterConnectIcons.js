import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import SprkIcon from '../../../SprkIcon/SprkIcon';

class SprkFooterConnectIcons extends Component {
  constructor(props) {
    super(props);

    if (props.connectIcons.icons !== undefined) {
      this.state = {
        connectIconsHasIds: props.connectIcons.icons.map(
          icon => ({ id: uniqueId(), ...icon }),
        ),
      };
    }
  }

  render() {
    const { connectIcons } = this.props;
    if (connectIcons.icons === undefined) return false;
    const { connectIconsHasIds } = this.state;
    return (
      <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Box">
        <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">
          {connectIcons.heading}
        </h3>

        <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@m">
          <ul className="sprk-o-Stack__item sprk-o-Stack__item--flex@m sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--medium sprk-b-List sprk-b-List--bare">
            {connectIconsHasIds.map((icon) => {
              const TagName = icon.linkElement || 'a';
              return (
                <li key={icon.id} className="sprk-o-Stack__item">
                  <TagName
                    className="sprk-b-Link sprk-b-Link--plain"
                    href={TagName === 'a' ? icon.href || '#nogo' : undefined}
                    data-analytics={icon.analyticsString}
                  >
                    <SprkIcon iconName={icon.name} additionalClasses={`sprk-c-Icon--stroke-current-color sprk-c-Icon--l ${icon.addClasses}`} />
                    <span className="sprk-u-ScreenReaderText">{icon.screenReaderText}</span>
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

SprkFooterConnectIcons.defaultProps = {
  connectIcons: {},
};

SprkFooterConnectIcons.propTypes = {
  // The data for the global site items
  connectIcons: PropTypes.shape({
    // The main heading for the connect secion
    heading: PropTypes.string,
    // An array of icon objects
    icons: PropTypes.arrayOf(PropTypes.shape({
      // The link href for the icon
      href: PropTypes.string,
      // The name of the icon
      name: PropTypes.string,
      // Text used for screen readers
      screenReaderText: PropTypes.string,
      // String used for the data-analytics attribute
      analyticsString: PropTypes.string,
      // Element to render, can be 'a' or Link
      linkElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    })),
  }),
};

export default SprkFooterConnectIcons;
