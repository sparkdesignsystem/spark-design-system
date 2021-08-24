import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import SprkIcon from '../../../icons/SprkIcon';

class SprkFooterConnectIcons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      connectIconsHasIds: props.connectIcons.icons.map((icon) => ({
        id: uniqueId(),
        ...icon,
      })),
    };
  }

  render() {
    const { connectIcons, appStoreLinks } = this.props;
    const { connectIconsHasIds } = this.state;
    return (
      <div
        className="
          sprk-o-Stack__item
          sprk-o-Stack
          sprk-o-Stack--large
          sprk-o-Box
        "
      >
        <h3
          className="
            sprk-o-Stack__item
            sprk-b-TypeBodyOne
            sprk-c-Footer__text
          "
        >
          {connectIcons.heading}
        </h3>

        <div
          className="
            sprk-o-Stack__item
            sprk-o-Stack
            sprk-o-Stack--large
            sprk-o-Stack--split@m
          "
        >
          <ul
            className="
              sprk-o-Stack__item
              sprk-o-Stack__item--flex@m
              sprk-o-Stack
              sprk-o-Stack--split@xxs
              sprk-o-Stack--medium
              sprk-b-List
              sprk-b-List--bare
            "
          >
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
                      additionalClasses={`sprk-c-Footer__icon sprk-c-Icon--xl ${addClasses}`}
                    />
                    <span className="sprk-u-ScreenReaderText">
                      {screenReaderText}
                    </span>
                  </TagName>
                </li>
              );
            })}
          </ul>
        </div>
        {appStoreLinks}
      </div>
    );
  }
}

SprkFooterConnectIcons.propTypes = {
  /** An optional spot to pass in App Store links.
   * Passed down from SprkFooter.
   */
  appStoreLinks: PropTypes.node,
  /** Constructs the Connect Icon Section. */
  connectIcons: PropTypes.shape({
    /** The main headline for the section. */
    heading: PropTypes.string,
    /** Configures the icons for the section. */
    icons: PropTypes.arrayOf(
      PropTypes.shape({
        /** The link `href` for the icon. */
        href: PropTypes.string,
        /** Determines what icon `SprkIcon` renders */
        name: PropTypes.string,
        /** Text used for screen readers. */
        screenReaderText: PropTypes.string,
        /**
         * Assigned to the `data-analytics` attribute serving as a unique selector for outside libraries to capture data.
         */
        analyticsString: PropTypes.string,
        /**
         * Determines if link renders as an anchor tag, or router link.
         */
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      }),
    ).isRequired,
  }).isRequired,
};

export default SprkFooterConnectIcons;
