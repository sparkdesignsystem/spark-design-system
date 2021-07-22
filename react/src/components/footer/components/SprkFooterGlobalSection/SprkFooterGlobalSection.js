import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import SprkIcon from '../../../icons/SprkIcon';

class SprkFooterGlobalSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      globalItemsHasIds: props.globalItems.items.map(item => ({ id: uniqueId(), ...item })),
    };
  }

  render() {
    const { globalItems } = this.props;
    const { globalItemsHasIds } = this.state;
    return (
      <div className="
            sprk-o-Stack__item
            sprk-o-Stack__item--three-tenths@m
            sprk-o-Stack
            sprk-o-Stack--misc-b
            sprk-c-Footer__global-links
          ">
        <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne sprk-c-Footer__text">
          {globalItems.heading}
        </h3>
        {globalItemsHasIds.map((item) => {
          const {
            id,
            mediaHref,
            analyticsString,
            mediaType,
            mediaAddClasses,
            src,
            altText,
            iconName,
            description,
            element,
            svg,
            ...rest
          } = item;
          const TagName = element || 'a';
          return (
            <div key={id} className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium">
              <div className="sprk-o-Stack__item">
                <TagName
                  className="sprk-b-Link sprk-b-Link--plain"
                  href={TagName === 'a' ? mediaHref || '#nogo' : undefined}
                  data-analytics={analyticsString}
                  {...rest}
                >
                  {mediaType === 'image' && (
                    <img className={mediaAddClasses} src={src} alt={altText} />
                  )}
                  {mediaType === 'SprkIcon' && (
                    <SprkIcon iconName={iconName} additionalClasses={mediaAddClasses} />
                  )}
                  {mediaType === 'svg' && <div>{svg}</div>}
                  {mediaType !== 'image' && (
                    <span className="sprk-u-ScreenReaderText">{altText}</span>
                  )}
                </TagName>
              </div>

              <p className="sprk-o-Stack__item sprk-b-TypeBodyFour sprk-c-Footer__text">{description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

SprkFooterGlobalSection.propTypes = {
  /** Object used to configure the global items section. */
  globalItems: PropTypes.shape({
    /** Main headline for the global section. */
    heading: PropTypes.string,
    /**
     * Object used to configure each item in
     * global items section such as
     * `mediaType`, `src`, `description` etc.
     */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /** The type of media element to render. */
        mediaType: PropTypes.oneOf(['image', 'svg', 'SprkIcon']),
        /**
         * Assigned to `src` attribute of the item's image.
         */
        src: PropTypes.string,
        /**
         * Assigned to `href` of item.
         */
        mediaHref: PropTypes.string,
        /**
         * The `alt` text for the image, icon, or `SprkIcon`.
         */
        altText: PropTypes.string,
        /**
         * Expects a space separated string
         * of classes to be added to the
         * media of the item.
         */
        mediaAddClasses: PropTypes.string,
        /** The description of the image */
        description: PropTypes.string,
        /**
         * Assigned to the `data-analytics` attribute serving
         * as a unique selector for outside libraries to capture data.
         */
        analyticsString: PropTypes.string,
        /**
         * Determines if link renders as an anchor tag, or router link.
         */
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      }),
    ),
  }).isRequired,
};

export default SprkFooterGlobalSection;
