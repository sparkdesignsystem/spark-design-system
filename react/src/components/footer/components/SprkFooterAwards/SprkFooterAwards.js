import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import SprkToggle from '../../../toggle/SprkToggle';

class SprkFooterAwards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awardsImagesHasIds: props.awards.images.map((item) => ({
        id: uniqueId(),
        ...item,
      })),
    };
  }

  render() {
    const { awards } = this.props;
    const { awardsImagesHasIds } = this.state;
    return (
      <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large">
        <h3
          className="
            sprk-o-Stack__item
            sprk-b-TypeBodyOne
            sprk-c-Footer__text
          "
        >
          {awards.heading}
        </h3>
        <div
          className="
            sprk-o-Stack__item
            sprk-o-Stack
            sprk-o-Stack--medium
            sprk-o-Stack--split@s
            sprk-c-Footer__awards
          "
        >
          {awardsImagesHasIds.map((image) => {
            const {
              element,
              href,
              analyticsString,
              addClasses,
              src,
              altText,
              ...rest
            } = image;
            const TagName = element || 'a';
            return (
              <div key={image.id} className="sprk-o-Stack__item">
                <TagName
                  href={TagName === 'a' ? href || '#nogo' : undefined}
                  data-analytics={analyticsString}
                  {...rest}
                >
                  <img className={addClasses} src={src} alt={altText} />
                </TagName>
              </div>
            );
          })}
        </div>

        <SprkToggle
          additionalClasses="sprk-o-Stack__item"
          iconAdditionalClasses="sprk-c-Footer__icon"
          toggleIconName="chevron-down-circle"
          triggerText={awards.disclaimerTitle}
          triggerTextAdditionalClasses="sprk-b-TypeBodyFour sprk-c-Footer__trigger"
          analyticsString={awards.disclaimerAnalytics}
        >
          <p
            className="
              sprk-b-TypeBodyFour sprk-c-Footer__text
            "
          >
            {awards.disclaimerText}
          </p>
        </SprkToggle>
      </div>
    );
  }
}

SprkFooterAwards.propTypes = {
  awards: PropTypes.shape({
    /** The main headline for the section. */
    heading: PropTypes.string,
    /** Configures the images in the Awards Section. */
    images: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         *  The link href for the image
         */
        href: PropTypes.string,
        /**
         * Determines if link renders as an anchor tag, or router link.
         */
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        /**
         * The image `src`.
         */
        src: PropTypes.string,
        /**
         * The `alt` text for the image, icon, or `SprkIcon`.
         */
        altText: PropTypes.string,
        /**
         * Expects a space separated string of
         * classes to be added to the award image.
         */
        addClasses: PropTypes.string,
        /**
         * Assigned to the `data-analytics` attribute serving as a unique
         * selector for outside libraries to capture data.
         */
        analyticsString: PropTypes.string,
      }),
    ).isRequired,
    /** The text rendered in the disclaimer. */
    disclaimerText: PropTypes.string,
    /**
     * The value supplied will be assigned to the
     * `data-analytics` attribute on the disclaimer.
     * Intended for an outside
     * library to capture data.
     */
    disclaimerAnalytics: PropTypes.string,
    /** The title text rendered in the disclaimer. */
    disclaimerTitle: PropTypes.string,
  }).isRequired,
};

export default SprkFooterAwards;
