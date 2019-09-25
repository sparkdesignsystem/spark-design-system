import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import SprkToggle from '../../../../toggle/react/SprkToggle';

class SprkFooterAwards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awardsImagesHasIds: props.awards.images.map(item => ({ id: uniqueId(), ...item })),
    };
  }

  render() {
    const { awards } = this.props;
    const { awardsImagesHasIds } = this.state;
    return (
      <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--large">
        <h3 className="sprk-o-Stack__item sprk-b-TypeBodyOne">{awards.heading}</h3>
        <div className="sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--medium sprk-o-Stack--split@s sprk-u-mbm">
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
          toggleIconName="chevron-down-circle-two-color"
          title={awards.disclaimerTitle}
          titleAddClasses="sprk-b-TypeBodyFour sprk-u-FontWeight--normal"
          analyticsString={awards.disclaimerAnalytics}
        >
          <p className="sprk-b-TypeBodyFour sprk-u-pts sprk-u-pbs">{awards.disclaimerText}</p>
        </SprkToggle>
      </div>
    );
  }
}

SprkFooterAwards.propTypes = {
  awards: PropTypes.shape({
    heading: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        // The link href for the image
        href: PropTypes.string,
        // Element to render, can be 'a' or Link
        element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        // The image src
        src: PropTypes.string,
        // Image alt text
        altText: PropTypes.string,
        // Additional classes for the image
        addClasses: PropTypes.string,
        // Used for the data-analytics attribute on the link wrapping the image
        analyticsString: PropTypes.string,
      }),
    ).isRequired,
    // The text rendered in the disclaimer
    disclaimerText: PropTypes.string,
    // Used for the data-analytics value on the title
    disclaimerAnalytics: PropTypes.string,
    // The title text rendered in the disclaimer
    disclaimerTitle: PropTypes.string,
  }).isRequired,
};

export default SprkFooterAwards;
