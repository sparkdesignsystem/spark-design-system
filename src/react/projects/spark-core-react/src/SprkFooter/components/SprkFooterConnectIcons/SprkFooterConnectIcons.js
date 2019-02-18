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
            {connectIconsHasIds.map(icon => (
              <li key={icon.id} className="sprk-o-Stack__item">
                <a className="sprk-b-Link sprk-b-Link--plain" href={icon.href}>
                  <SprkIcon iconName={icon.name} additionalClasses={`sprk-c-Icon--stroke-current-color sprk-c-Icon--l ${icon.addClasses}`} />
                  <span className="sprk-u-ScreenReaderText">{icon.screenReaderText}</span>
                </a>
              </li>
            ))}
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
    heading: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.shape({
      // The link href for the icon
      href: PropTypes.string,
      // The name of the icon
      name: PropTypes.string,
      // Text used for screen readers
      screenReaderText: PropTypes.string,
    })),
  }),
};

export default SprkFooterConnectIcons;
